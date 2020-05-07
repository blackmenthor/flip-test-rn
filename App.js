import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TransactionListScreen from './src/scenes/transactions/transaction_list/TransactionListScreen';
import TransactionDetailScreen from './src/scenes/transactions/transaction_detail/TranscationDetailScreen';
import {Provider} from './src/context/TransactionsContext';
import * as ColorPalette from './src/utils/ColorPalette';

const navigator = createStackNavigator(
  {
    TransactionList: TransactionListScreen,
    TransactionDetail: TransactionDetailScreen,
  },
  {
    initialRouteName: 'TransactionList',
    defaultNavigationOptions: {
      title: 'Flip Mock Application',
      headerStyle: {
        backgroundColor: ColorPalette.COLOR_PRIMARY,
      },
    },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
