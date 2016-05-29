import {
  GET_CHART_PURCHASES,
} from 'constants/ActionTypes';

export const getChartPurchases = (data) => {
  return {
    type: GET_CHART_PURCHASES,
    data
  };
}