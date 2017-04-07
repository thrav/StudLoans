import React, { Component } from 'react';

const PaymentResults = (results) =>
    <div>
      <div key='monthlyPayment' className='form-group'>
        <label>Monthly Payment</label>
        <div>{results.monthlyPayment}</div>
      </div>
      <div key='totalInterest' className='form-group'>
        <label>Total Interest</label>
        <div>{results.totalInterest}</div>
      </div>
      <div key='totalPayment' className='form-group'>
        <label>Total Payment</label>
        <div>{results.totalPayment}</div>
      </div>
    </div>

export default PaymentResults;
