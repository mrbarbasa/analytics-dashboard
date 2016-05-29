import {
  GET_LIST_PURCHASES
} from 'constants/ActionTypes';

export const getListPurchases = (data) => {
  return {
    type: GET_LIST_PURCHASES,
    data
  };
}