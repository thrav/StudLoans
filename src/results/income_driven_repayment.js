import React, { Component } from 'react';
import Disclosure from './disclosure';
import ForgivenessCalc from '../calculators/forgiveness_calc';

const IncomeDrivenRepayment = ({ data }) =>
  <div>
    <h3>You qualify for an Income-Driven Repayment Plan.</h3>
    <p>Income-Driven Repayment plans are only available for your Federal Loans.</p>
    <h5>Here&apos;s what to do next.</h5>
    <ol>
      <li>Learn more about the <a href="https://www.studentloansguy.com/income-based-repayment">income-driven repayment plans</a>.</li>
      <li>Sign up for an <a href="https://studentloans.gov/myDirectLoan/ibrInstructions.action?source=15SPRRPMT">income-driven repayment plan</a> through the federal government.</li>
    </ol>
  </div>

export default IncomeDrivenRepayment;

//<ForgivenessCalc data={data} />
