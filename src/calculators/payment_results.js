import React, { Component } from 'react';

const PaymentResults = (arg) => {
  console.log(arg);
  return (
    <div>
      <div key='monthlyPayment' className='form-group'>
        <label>Monthly Payment</label>
        <div>{arg.results.monthlyPayment}</div>
      </div>
      <div key='totalInterest' className='form-group'>
        <label>Total Interest</label>
        <div>{arg.results.totalInterest}</div>
      </div>
      <div key='totalPayment' className='form-group'>
        <label>Total Payment</label>
        <div>{arg.results.totalPayment}</div>
      </div>
    </div>)}

export default PaymentResults;
