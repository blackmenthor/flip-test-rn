import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../../../utils/ColorPalette';
import * as DateUtils from '../../../utils/DateUtils';
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
        <Text style={styles.transactionIdStyle}>
          ID Transaksi: #{transaction.id}
        </Text>
        <CopyButton />
      </Row>
      <Row style={styles.secondRowStyle}>
        <CapitalText text="DETAIL TRANSAKSI" />
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.closeButtonStyle}>Tutup</Text>
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
        secondTitle="Nominal"
        secondContent={transaction.amount}
      />
      <TwoRowTexts
        firstTitle="Berita Transfer"
        firstContent={transaction.remark ? transaction.remark : '-'}
        secondTitle="Kode Unik"
        secondContent={transaction.unique_code}
      />
      <TwoRowTexts
        firstTitle="Waktu Dibuat"
        firstContent={DateUtils.format(transaction.created_at)}
      />
    </Column>
  );
};

TransactionDetailScreen.navigationOptions = () => {
  return {
    title: 'Detail Transaksi',
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
  transactionIdStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconCopyStyle: {
    transform: [{rotateY: '180deg'}],
  },
  detailTransaksiStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButtonStyle: {
    color: ColorPalette.COLOR_PRIMARY,
  },
});

export default TransactionDetailScreen;
