export const NEXT_STEP = 'NEXT_STEP';
export const LAST_STEP = 'LAST_STEP';
export const STORE_RESPONSE = 'STORE_RESPONSE';

export function nextStep(step) {
  return {
    type: NEXT_STEP,
    payload: {
      step: step
    }
  };
}

export function lastStep(step) {
  return {
    type: LAST_STEP,
    payload: {
      step: step
    }
  };
}

export function storeResponse(optionValue, step) {
  return {
    type: STORE_RESPONSE,
    payload: {
      option: optionValue,
      step: step
    }
  };
}
