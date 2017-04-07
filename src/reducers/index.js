import { combineReducers } from 'redux';
import StepsReducer from './reducer_steps';
import ResponsesReducer from './reducer_responses';
import CalculatorsReducer from './reducer_calculators';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  step: StepsReducer,
  responses: ResponsesReducer,
  calculatorResults: CalculatorsReducer
});

export default rootReducer;
