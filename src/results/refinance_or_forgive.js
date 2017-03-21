import React, { Component } from 'react';
import LenderTable from './lender_table';
import Disclosure from './disclosure';

const RefinanceOrForgive = ({ data, toZipStep }) =>
<div>
  <h3>You qualify for Student Loan Refinancing and for Public Service Loan Forgiveness!</h3>
  <p>The average savings from refinancing is more than $17,000.
      Note that Forgiveness is only available on your Federal Loans.
      Find more information and compare refinance lenders below.</p>
  <LenderTable listOfLenders={data.availableLenders} toZipStep={toZipStep} />

  <h2>Public Service Loan Forgiveness is only available for Federal Loans</h2>
  <ol>
    <li>Learn more about <a href="https://www.studentloansguy.com/student-loan-forgiveness">
        Student Loan Forgiveness</a>.</li>
    <li>Sign up for an <a href="https://studentloans.gov/myDirectLoan/ibrInstructions.action?source=15SPRRPMT">
        income-driven repayment plan</a>.</li>
    <li>Fill out the <a href="/forgiveness.html">Public Service Loan Forgiveness Form</a>.</li>
  </ol>
  <Disclosure />
</div>

export default RefinanceOrForgive;

//<RefinanceCalc data={data} />
