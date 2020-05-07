export const LOADING = {state: LOADING_STATE};
export const SUCCESS = {state: SUCCESS_STATE};
export const FAILED = message => {
  return {state: FAILED_STATE, message};
};

export const LOADING_STATE = 'LOADING';
export const SUCCESS_STATE = 'SUCCESS';
export const FAILED_STATE = 'FAILED';
