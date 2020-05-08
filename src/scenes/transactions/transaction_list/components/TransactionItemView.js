import React from 'react';
import {Text, StyleSheet} from 'react-native';
import * as ColorPalette from '../../../../utils/ColorPalette';
import * as DateUtils from '../../../../utils/DateUtils';
import Column from '../../../../components/base/Column';
import Row from '../../../../components/base/Row';
import CapitalText from '../../../../components/base/CapitalText';
import StatusBadge from './StatusBadge';
import BankText from '../../../../components/BankText';
import CurrencyText from '../../../../components/CurrencyText';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Octicons';

const TransactionItemView = ({transaction, onClick}) => {
  return (
    <Ripple onPress={onClick}>
      <Row style={styles(transaction.itemColor).rowStyle}>
        <Column style={styles().leftContentContainerStyle}>
          <BankText
            senderBank={transaction.sender_bank}
            beneficiaryBank={transaction.beneficiary_bank}
          />
          <CapitalText text={transaction.beneficiary_name} />
          <Row>
            <CurrencyText amount={transaction.amount} />
            <Icon name="primitive-dot" style={styles().dotIconStyle} />
            <Text>{`${DateUtils.format(transaction.created_at)}`}</Text>
          </Row>
        </Column>
        <StatusBadge
          status={transaction.status}
          additionalStyle={styles.statusStyle}
        />
      </Row>
    </Ripple>
  );
};

const styles = (itemColor = ColorPalette.COLOR_PRIMARY) =>
  StyleSheet.create({
    rowStyle: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      marginHorizontal: 8,
      marginVertical: 4,
      padding: 8,
      borderLeftColor: itemColor,
      borderLeftWidth: 4,
      borderRadius: 4,
    },
    statusStyle: {
      flex: 1,
    },
    leftContentContainerStyle: {
      alignItems: 'flex-start',
      flex: 1,
    },
    dotIconStyle: {
      marginHorizontal: 4,
    },
  });

export default TransactionItemView;
