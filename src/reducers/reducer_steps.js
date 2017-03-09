import { NEXT_STEP, LAST_STEP } from '../actions/index';

const INITIAL_STATE = {
  step: 0
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NEXT_STEP:
      return { ...state, step: action.payload.step + 1 }
    case LAST_STEP:
      if(action.payload.step !== 0)
        return { ...state, step: action.payload.step - 1 }
  }
  return state;
}
