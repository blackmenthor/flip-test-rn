import * as DateUtils from '../../utils/DateUtils';

export const DEFAULT_SORT = {
  state: 'DEFAULT_SORT',
  label: 'URUTKAN',
  value: 0,
  sortFunction: (a, b) => 0,
};
export const ASC_NAME = {
  state: 'ASC_NAME',
  label: 'Nama A-Z',
  value: 1,
  sortFunction: (a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name),
};
export const DESC_NAME = {
  state: 'DESC_NAME',
  label: 'Nama Z-A',
  value: 2,
  sortFunction: (a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name),
};
export const DESC_DATE = {
  state: 'DESC_DATE',
  label: 'Tanggal Terbaru',
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
  label: 'Tanggal Terlama',
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
