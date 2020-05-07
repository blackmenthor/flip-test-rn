import React from 'react';
import * as Utils from '../utils/UtilsFunction';
import Strings from '../localization/Strings';
import DefaultText from './base/DefaultText';

/**
 * A Text widget template to show currency Strings.
 * @requires {String} amount
 * @param {Style} style (If additional styling is needed)
 *
 * Default configuration:
 * - Currency -> Rp. (Probably will need to add more configs in the future)
 */
const CurrencyText = ({amount, style}) => {
  return (
    <DefaultText
      style={style}
      text={`${Strings['Common.IDR']}${Utils.formatCurrency(amount)}`}
    />
  );
};

export default CurrencyText;
