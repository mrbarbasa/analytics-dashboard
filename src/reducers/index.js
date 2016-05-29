import { combineReducers } from 'redux';
import chart from 'reducers/chart';
import list from 'reducers/list';

const rootReducer = combineReducers({
  chart,
  list
});

export default rootReducer;