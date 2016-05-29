import {
  GET_LIST_PURCHASES,
} from 'constants/ActionTypes';

const initialState = {
  listPurchases: [
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

const list = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LIST_PURCHASES:
      if (action.data) {
        return {
          ...state,
          listPurchases: action.data
        };
      }
      return state;

    default:
      return state;
  }
};

export default list;