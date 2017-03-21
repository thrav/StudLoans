export const NEXT_STEP = 'NEXT_STEP';
export const LAST_STEP = 'LAST_STEP';
export const TO_ZIP_STEP = 'TO_ZIP_STEP';
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

export function toZipStep() {
  return {
    type: TO_ZIP_STEP,
    payload: {
      step: 8
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
