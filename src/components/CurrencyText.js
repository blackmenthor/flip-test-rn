import React from 'react';
import * as Utils from '../utils/UtilsFunction';
import DefaultText from './base/DefaultText';

const CurrencyText = ({amount, style}) => {
  return (
    <DefaultText style={style} text={`Rp.${Utils.formatCurrency(amount)}`} />
  );
};

export default CurrencyText;
