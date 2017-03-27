import React, { Component } from 'react';
import Disclosure from './disclosure';
import ForgivenessCalc from '../calculators/forgiveness_calc';

const Forgiveness = ({ data }) =>
  <div>
    <h3>You qualify for Public Service Loan Forgiveness.</h3>
    <p>Student Loan Forgiveness is only available for your Federal Loans. You&apos;re eligible if you work for the government or a non-profit organization, and you make 120 consecutive on-time payments.</p>
    <p>To maximize savings, you should be on an <a href="https://www.rolltoriches.com/income-based-repayment">income-driven-repayment plan</a>.</p>
    <h5>Here&apos;s what to do next.</h5>
    <ol>
      <li>Learn more about <a href="https://www.rolltoriches.com/student-loan-forgiveness">Student Loan Forgiveness</a>.</li>
      <li>Sign up for an <a href="https://studentloans.gov/myDirectLoan/ibrInstructions.action?source=15SPRRPMT">income-driven repayment plan</a>.</li>
      <li>Fill out the <a href="/">Public Service Forgiveness Form</a>.</li>
    </ol>
    <ForgivenessCalc data={data} />
  </div>

export default Forgiveness;
//<ForgivenessCalc data={data} />
