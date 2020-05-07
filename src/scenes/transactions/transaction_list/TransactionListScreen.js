import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Strings from '../../../localization/Strings';
import SearchBar from './components/SearchBar';
import TransactionItemView from './components/TransactionItemView';
import LoadableListView from '../../../components/LoadableListView';
import SortModal from './modals/SortModal';
import {Context} from '../../../context/TransactionsContext';
import * as ScreenState from '../../../utils/ScreenState';

const TransactionListScreen = ({navigation}) => {
  const [modalShowing, setModalShowing] = useState(false);
  const {
    state,
    getTransactions,
    filterTransactionsByQuery,
    changeSortState,
  } = useContext(Context);

  const toggleModal = () => setModalShowing(!modalShowing);
  const onNewStateClicked = newState => {
    changeSortState(newState);
    toggleModal();
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.parentContainerStyle}>
      <SearchBar
        onTermChanged={filterTransactionsByQuery}
        onFilterTap={toggleModal}
        currentFilter={state.transactionListSortState.label}
      />
      <LoadableListView
        error={
          state.transactionListScreenState.state === ScreenState.FAILED_STATE
            ? state.transactionListScreenState.message
            : null
        }
        onRetry={getTransactions}
        items={
          state.filteredTransactions == null
            ? state.transactions
            : state.filteredTransactions
        }
        keyExtractor={transaction => transaction.id}
        renderItem={({item}) => {
          return (
            <TransactionItemView
              transaction={item}
              onClick={() =>
                navigation.navigate('TransactionDetail', {
                  transaction: item,
                })
              }
            />
          );
        }}
      />
      <SortModal
        currentSelected={state.transactionListSortState.value}
        onClose={toggleModal}
        isVisible={modalShowing}
        onNewStateClicked={onNewStateClicked}
      />
    </View>
  );
};

TransactionListScreen.navigationOptions = () => {
  return {
    title: Strings['TransactionList.Title'],
    headerTintColor: 'white',
  };
};

const styles = StyleSheet.create({
  parentContainerStyle: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default TransactionListScreen;
