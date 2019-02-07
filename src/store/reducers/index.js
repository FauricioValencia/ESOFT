import { combineReducers } from 'redux';
import listRandomPets from './pets';

const rootReducer = combineReducers({
  listRandomPets,
});
export default rootReducer;
