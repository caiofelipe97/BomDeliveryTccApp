import {combineReducers} from 'redux';
import {restaurantsReducer} from './reducers';
const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

export default createStore(rootReducer);
