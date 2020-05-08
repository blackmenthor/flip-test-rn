import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../../../utils/ColorPalette';
import * as DateUtils from '../../../utils/DateUtils';
import Strings from '../../../localization/Strings';
import Column from '../../../components/base/Column';
import Row from '../../../components/base/Row';
import Divider from '../../../components/base/Divider';
import BankText from '../../../components/BankText';
import CapitalText from '../../../components/base/CapitalText';
import TwoRowTexts from './components/TwoRowTexts';
import CopyButton from '../../../components/CopyButton';

const TransactionDetailScreen = ({navigation}) => {
  const transaction = navigation.getParam('transaction');

  return (
    <Column style={styles.mainContainerStyle}>
      <Row style={styles.firstRowStyle}>
        <Text style={styles.titleStyle}>
          {Strings['TransactionDetail.TransactionId']}
          {transaction.id}
        </Text>
        <CopyButton textToCopy={transaction.id} />
      </Row>
      <Row style={styles.secondRowStyle}>
        <CapitalText
          style={styles.titleStyle}
          text={Strings['TransactionDetail.DetailTitle']}
        />
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.closeButtonStyle}>{Strings['Common.Close']}</Text>
        </TouchableOpacity>
      </Row>
      <Divider />
      <BankText
        senderBank={transaction.sender_bank}
        beneficiaryBank={transaction.beneficiary_bank}
      />
      <TwoRowTexts
        firstTitle={transaction.beneficiary_name}
        firstContent={transaction.account_number}
        secondTitle={Strings['TransactionDetail.AmountTitle']}
        secondContent={transaction.amount}
        secondRowIsCurrency={true}
      />
      <TwoRowTexts
        firstTitle={Strings['TransactionDetail.RemarkTitle']}
        firstContent={transaction.remark ? transaction.remark : '-'}
        secondTitle={Strings['TransactionDetail.UniqueCode']}
        secondContent={transaction.unique_code}
      />
      <TwoRowTexts
        firstTitle={Strings['TransactionDetail.CreatedDate']}
        firstContent={DateUtils.format(transaction.created_at)}
      />
    </Column>
  );
};

TransactionDetailScreen.navigationOptions = () => {
  return {
    title: Strings['TransactionDetail.Title'],
    headerTintColor: 'white',
  };
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'stretch',
    padding: 16,
  },
  firstRowStyle: {
    marginBottom: 16,
  },
  secondRowStyle: {
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButtonStyle: {
    color: ColorPalette.COLOR_PRIMARY,
  },
});

export default TransactionDetailScreen;
