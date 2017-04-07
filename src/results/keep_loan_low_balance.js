import React, { Component } from 'react';
import Disclosure from './disclosure';

const KeepLoanLowBalance = ({ data }) =>
  <div>
    <h3>You have low loan student loans balance. You&apos;re almost there!</h3>
    <p>Keep up your monthly payment and the loans will be gone in no time!</p>
    <h5>Find <a href="https://www.studentloansguy.com/savings-earning/"> ways to earn more money</a>
          to pay off your loan even faster.</h5>
    <Disclosure />
  </div>

export default KeepLoanLowBalance;

//<PaymentCalc data={data} />
