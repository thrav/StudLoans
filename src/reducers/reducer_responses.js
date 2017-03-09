import { STORE_RESPONSE } from '../actions/index';

const INITIAL_STATE = {
  employment:   null,
  income:       null,
  loanBalance:  null,
  loanType:     null,
  interestRate: null,
  creditScore:  null,
  education:    null,
  age:          null,
  zipcode:      null,
  email:        null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STORE_RESPONSE:
      switch(action.payload.step) {
        case 0:
          return { ...state, employment: action.payload.option }
        case 1:
          return { ...state, income: action.payload.option }
        case 2:
          return { ...state, loanBalance: action.payload.option }
        case 3:
          return { ...state, loanType: action.payload.option }
        case 4:
          return { ...state, interestRate: action.payload.option }
        case 5:
          return { ...state, creditScore: action.payload.option }
        case 6:
          return { ...state, education: action.payload.option }
        case 7:
          return { ...state, age: action.payload.option }
        case 8:
          return { ...state, zipcode: action.payload.option }
        case 9:
          return { ...state, email: action.payload.option }
      }
  }
  return state;
}
