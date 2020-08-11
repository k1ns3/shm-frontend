import { combineReducers } from 'redux';
import tiresReducer from './tires';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  tires: tiresReducer,
  filters: filtersReducer,
});

export default rootReducer;
