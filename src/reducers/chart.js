import {
  GET_CHART_PURCHASES,
} from 'constants/ActionTypes';

const initialState = {
  chartPurchases: [
    {
      store: 'Safeway',
      category: 'groceries',
      spent: 57.21
    },
    {
      store: 'Old Navy',
      category: 'clothes',
      spent: 42.37
    }
  ]
};

const chart = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CHART_PURCHASES:
      if (action.data) {
        return {
          ...state,
          chartPurchases: action.data
        };
      }
      return state;

    default:
      return state;
  }
};

export default chart;