import { combineReducers } from 'redux';
import StepsReducer from './reducer_steps';
import ResponsesReducer from './reducer_responses';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  step: StepsReducer,
  responses: ResponsesReducer
});

export default rootReducer;
