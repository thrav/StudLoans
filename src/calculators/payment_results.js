import React, { Component } from 'react';

const Disclosure = (loanBalance, interestRate, terms) => {

  const monthlyPayment = amortization(loanBalance, parseFloat(interestRate), terms / 12);
  const totalPayment = monthlyPayment * terms;
  const totalInterest = totalPayment - loanBalance;

  return(
    <div key='monthlyPayment' className='form-group'>
      <label>Monthly Payment</label>
      <div>{monthlyPayment}</div>
    </div>
    <div key='totalInterest' className='form-group'>
      <label>Total Interest</label>
      <div>{totalInterest}</div>
    </div>
    <div key='totalPayment' className='form-group'>
      <label>Total Payment</label>
      <div>{totalPayment}</div>
    </div>
  );
}

export default Disclosure;
