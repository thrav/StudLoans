//this should be the place where all of those calculated values are written
//into state -- this means that any time one of the form numbers is updated
//the new values flow through the reducer and all of the values are
//updated and redistributed on render
// source: https://wecodetheweb.com/2015/09/29/functionally-managing-state-with-redux/
//Where can I access the state I need to reduce new state from all existing values?
//need to have a reducer flow which updates the values then dispatches another action
//to update the calculated values -- but can we do this without another dispatches
//google cascading reducers -- should be possible like combine reducers

import _ from 'lodash';

const INITIAL_STATE = {
  monthlyPayment:   null,
  totalPayment:     null,
  totalInterest:    null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_PAYMENT_CALC:
      const monthlyPayment = amortization(state.loanBalance, parseFloat(state.interestRate), state.terms / 12);
      const totalPayment = monthlyPayment * state.terms;
      const totalInterest = totalPayment - state.loanBalance;
      return { ...state, monthlyPayment: monthlyPayment, totalPayment: totalPayment, totalInterest: totalInterest }

    case UPDATE_FORGIVENESS_CALC:
      const deduction = 0;
      const calculateIBR = 0;
      const compoundInterest = 0;
      const calculatePayments = 0;
      const 
  }
  return state;
}
