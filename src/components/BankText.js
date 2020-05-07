import React from 'react';
import {StyleSheet} from 'react-native';
import Row from './base/Row';
import CapitalText from './base/CapitalText';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BankText = ({senderBank, beneficiaryBank}) => {
  return (
    <Row>
      <CapitalText style={styles.textStyle} text={senderBank.toUpperCase()} />
      <Icon name="arrow-right" size={18} style={styles.iconStyle} />
      <CapitalText
        style={styles.textStyle}
        text={beneficiaryBank.toUpperCase()}
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
  },
  iconStyle: {
    marginHorizontal: 4,
  },
});

export default BankText;
