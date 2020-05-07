import createDataContext from './createDataContext';
import FlipApi from '../api/FlipApi';
import * as ScreenState from '../utils/ScreenState';
import * as SortState from './transactions/TransactionSortState';
import * as Utils from '../utils/UtilsFunction';
import * as DateUtils from '../utils/DateUtils';
import * as Converter from './transactions/TransactionStatusConverter';

const TransactionsReducer = (state, action) => {
  switch (action.type) {
    case 'GotTransactions':
      return {
        ...state,
        transactions: action.payload,
        transactionListScreenState: ScreenState.SUCCESS,
      };
    case 'TransactionRequestFailed':
      return {
        ...state,
        transactions: null,
        transactionListScreenState: ScreenState.FAILED(action.payload),
      };
    case 'ChangeSortState':
      if (state.transactionListScreenState !== ScreenState.SUCCESS) {
        return state; // we don't want to sort if data haven't been fetched yet
      }
      return {
        ...state,
        transactionListSortState: action.payload,
        transactions: state.transactions.sort(action.payload.sortFunction),
        filteredTransactions: state.transactions.sort(
          action.payload.sortFunction,
        ),
      };
    case 'FilterTransactions':
      if (state.transactionListScreenState !== ScreenState.SUCCESS) {
        return state; // we don't want to search if data haven't been fetched yet
      }
      const query = action.payload.query;
      const result = state.transactions.filter(item => {
        const bool = Utils.searchForOccurence({
          criterias: [
            item.beneficiary_name,
            item.beneficiary_bank,
            item.sender_bank,
            item.amount,
          ],
          query: query,
        });
        return bool;
      });
      return {
        ...state,
        filteredTransactions: result.sort(
          state.transactionListSortState.sortFunction,
        ),
      };
    default:
      return state;
  }
};

const getTransactions = dispatch => {
  return async () => {
    try {
      const response = await FlipApi.get('/frontend-test');

      // TODO: ASK FLIP IF THE API WAS CORRECT FOR SENDING MAP INSTEAD OF LIST
      const correctData = [];
      for (var prop in response.data) {
        correctData.push(response.data[prop]);
      }

      // Process data and add color & parsed time AOT
      const processedData = [];
      correctData.forEach(datum => {
        processedData.push({
          ...datum,
          itemColor: Converter.convert(datum.status),
          created_at: DateUtils.parse(datum.created_at),
          completed_at: DateUtils.parse(datum.completed_at),
        });
      });

      dispatch({type: 'GotTransactions', payload: processedData});
    } catch (ex) {
      dispatch({type: 'TransactionRequestFailed', payload: ex});
    }
  };
};

const filterTransactionsByQuery = dispatch => {
  return query => {
    dispatch({type: 'FilterTransactions', payload: {query: query}});
  };
};

const changeSortState = dispatch => {
  return newSortState => {
    dispatch({type: 'ChangeSortState', payload: newSortState});
  };
};

export const {Context, Provider} = createDataContext(
  TransactionsReducer,
  {getTransactions, filterTransactionsByQuery, changeSortState},
  {
    transactions: null,
    filteredTransactions: null,
    transactionListScreenState: ScreenState.LOADING,
    transactionListSortState: SortState.DEFAULT_SORT,
  },
);
