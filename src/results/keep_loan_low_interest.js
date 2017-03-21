import React, { Component } from 'react';
import Disclosure from './disclosure';

const KeepLoanLowInterest = ({ data }) =>
  <div>
    <h5>Congratulations, you already have a low interest rate!</h5>
    <p>Great job! Keep making your on-time payments!</p>
    <p>Find <a href="https://www.studentloansguy.com/savings-earning/"> ways to earn more money</a> to pay off your loan even faster.</p>

    <Disclosure />
  </div>

export default KeepLoanLowInterest;

//<RefinanceCalc data={data} />
