import { createSelector } from 'reselect';
import { amortization } from '../lib/math_tools';

const getLoanBalance =      (state) => state.form.loanBalance
const getInterestRate =     (state) => state.form.interestRate
const getTerms =            (state) => state.form.terms
const getEstInterestRate =  (state) => state.form.estInterestRate
const getEstTerms =         (state) => state.form.estTerms

export const getResults = createSelector(
  [ getLoanBalance, getInterestRate, getTerms ],
  (loanBalance, interestRate, terms) => {
    console.log("got results");
    const monthlyPayment  = amortization(loanBalance, parseFloat(interestRate), terms / 12);
    const totalPayment    = monthlyPayment * terms;
    const totalInterest   = totalPayment - loanBalance;
    return {
      results:
      {
        monthlyPayment: monthlyPayment,
        totalPayment:   totalPayment,
        totalInterest:  totalInterest
      }
    }
  }
)

export const getEstResults = createSelector(
  [ getLoanBalance, getEstInterestRate, getEstTerms ],
  (loanBalance, estInterestRate, estTerms) => {
    const estMonthlyPayment  = amortization(loanBalance, parseFloat(estInterestRate), estTerms / 12);
    const estTotalPayment    = estMonthlyPayment * estTerms;
    const estTotalInterest   = estTotalPayment - loanBalance;
    return {
      estResults:
      {
        monthlyPayment: estMonthlyPayment,
        totalPayment:   estTotalPayment,
        totalInterest:  estTotalInterest
      }
    }
  }
)

// export const getMonthlyPayment = createSelector(
//   [ getLoanBalance, getInterestRate, getTerms ],
//   (loanBalance, interestRate, terms) =>
//     amortization(loanBalance, parseFloat(interestRate), terms / 12)
// )
//
// export const getTotalPayment = createSelector(
//   [ getTerms, getMonthlyPayment ],
//   (terms, monthlyPayment) =>
//     monthlyPayment * terms
// )
//
// export const getTotalInterest = createSelector(
//   [ getLoanBalance, getTotalPayment ],
//   (loanBalance, totalPayment) =>
//     totalPayment - loanBalance
// )
//
// export const getEstMonthlyPayment = createSelector(
//   [ getLoanBalance, getEstInterestRate, getEstTerms ],
//   (loanBalance, interestRate, terms) =>
//     amortization(loanBalance, parseFloat(interestRate), terms / 12)
// )
//
// export const getEstTotalPayment = createSelector(
//   [ getEstTerms, getEstMonthlyPayment ],
//   (terms, monthlyPayment) =>
//     monthlyPayment * terms
// )
//
// export const getEstTotalInterest = createSelector(
//   [ getLoanBalance, getEstTotalPayment ]
//   (loanBalance, totalPayment) =>
//     totalPayment - loanBalance
// )
