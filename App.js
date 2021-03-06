import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TransactionListScreen from './src/scenes/transactions/transaction_list/TransactionListScreen';
import TransactionDetailScreen from './src/scenes/transactions/transaction_detail/TransactionDetailScreen';
import {Provider} from './src/context/TransactionsContext';
import * as ColorPalette from './src/utils/ColorPalette';
import Strings from './src/localization/Strings';

const navigator = createStackNavigator(
  {
    TransactionList: TransactionListScreen,
    TransactionDetail: TransactionDetailScreen,
  },
  {
    initialRouteName: 'TransactionList',
    defaultNavigationOptions: {
      title: Strings['App.Title'],
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
