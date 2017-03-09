import { combineReducers } from 'redux';
import StepsReducer from './reducer_steps';
import ResponsesReducer from './reducer_responses';

const rootReducer = combineReducers({
  step: StepsReducer,
  responses: ResponsesReducer
});

export default rootReducer;
