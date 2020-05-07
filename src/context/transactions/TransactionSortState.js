import * as DateUtils from '../../utils/DateUtils';
import Strings from '../../localization/Strings';

/**
 * This file responsibles to define sorting state we want to achieve in the TransactionListScreen
 *
 * params:
 * - state -> basic string definition.
 * - label -> label to show in the Radiobutton.
 * - value -> value to supply to the Radiobutton.
 * - sortFunction -> function to define what sorting criteria we want to use.
 */

export const DEFAULT_SORT = {
  state: 'DEFAULT_SORT',
  label: Strings['TransactionSort.DefaultLabel'],
  value: 0,
  sortFunction: (a, b) => 0,
};
export const ASC_NAME = {
  state: 'ASC_NAME',
  label: Strings['TransactionSort.AtoZLabel'],
  value: 1,
  sortFunction: (a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name),
};
export const DESC_NAME = {
  state: 'DESC_NAME',
  label: Strings['TransactionSort.ZtoALabel'],
  value: 2,
  sortFunction: (a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name),
};
export const DESC_DATE = {
  state: 'DESC_DATE',
  label: Strings['TransactionSort.DateDescLabel'],
  value: 3,
  sortFunction: (a, b) => {
    try {
      return DateUtils.compare(b.created_at, a.created_at);
    } catch (ex) {
      console.log(ex);
      return 0;
    }
  },
};
export const ASC_DATE = {
  state: 'ASC_DATE',
  label: Strings['TransactionSort.DateAscLabel'],
  value: 4,
  sortFunction: (a, b) => {
    try {
      return DateUtils.compare(a.created_at, b.created_at);
    } catch (ex) {
      console.log(ex);
      return 0;
    }
  },
};

export const SORT_STATES = [
  DEFAULT_SORT,
  ASC_NAME,
  DESC_NAME,
  DESC_DATE,
  ASC_DATE,
];
