import React, { Component } from 'react';

const ForgivenessResults = (arg) => {
  
  if(arg.results.eligible || arg.results.title === 'Standard') {
  return (
    <div>
      <h4>{arg.results.title}</h4>
      <div key='firstPayment' className='form-group'>
        <label>First Payment</label>
        <div>{arg.results.firstPayment}</div>
      </div>
      <div key='finalPayment' className='form-group'>
        <label>Final Payment</label>
        <div>{arg.results.finalPayment}</div>
      </div>
      <div key='totalForgiveness' className='form-group'>
        <label>Forgiven Amount</label>
        <div>{arg.results.totalForgiveness}</div>
      </div>
      <div key='repaymentPeriod' className='form-group'>
        <label>Repayment Period</label>
        <div>{arg.results.repaymentPeriod}</div>
      </div>
      <div key='totalPayment' className='form-group'>
        <label>Total Payment</label>
        <div>{arg.results.totalPayment}</div>
      </div>
    </div>)}
    else { return (<div></div>) }
}

export default ForgivenessResults;
