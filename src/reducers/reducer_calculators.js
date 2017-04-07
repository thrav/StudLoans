//this should be the place where all of those calculated values are written
//into state -- this means that any time one of the form numbers is updated
//the new values flow through the reducer and all of the values are
//updated and redistributed on render
// source: https://wecodetheweb.com/2015/09/29/functionally-managing-state-with-redux/
//Where can I access the state I need to reduce new state from all existing values?
//need to have a reducer flow which updates the values then dispatches another action
//to update the calculated values -- but can we do this without another dispatches
//google cascading reducers -- should be possible like combine reducers

import { UPDATE_PAYMENT_CALC, UPDATE_ESTIMATE_CALC } from '../actions/index';
import { amortization } from '../lib/math_tools';
import _ from 'lodash';

const INITIAL_STATE = {
  monthlyPayment:   null,
  totalPayment:     null,
  totalInterest:    null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_PAYMENT_CALC:
      const monthlyPayment = amortization(state.form.loanBalance, parseFloat(state.form.interestRate), state.form.terms / 12);
      const totalPayment = monthlyPayment * state.form.terms;
      const totalInterest = totalPayment - state.form.loanBalance;
      return { ...state, monthlyPayment: monthlyPayment, totalPayment: totalPayment, totalInterest: totalInterest }
    case UPDATE_ESTIMATE_CALC:
      const estMonthlyPayment = amortization(state.form.loanBalance, parseFloat(state.form.estInterestRate), state.form.estTerms / 12);
      const estTotalPayment = monthlyPayment * state.form.estTerms;
      const estTotalInterest = totalPayment - state.form.loanBalance;
      return { ...state, estMonthlyPayment: estMonthlyPayment, estTotalPayment: estTotalPayment, estTotalInterest: estTotalInterest }
  }
  return state;
}
