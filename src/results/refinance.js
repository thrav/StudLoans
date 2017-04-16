import React, { Component } from 'react';
import LenderTable from './lender_table';
import Disclosure from './disclosure';
import PaymentCalc from '../calculators/payment_calc';

console.log("in refi");

const Refinance = ({ data, toZipStep }) => {
  console.log(data);
  const estimate = {
    loanBalance: data.loanBalance,
    interestRate: 3,
    terms: 120
  }
  return (
  <div>
    <h3>You qualify for Student Loan Refinancing!</h3>
    <p>The average savings from refinancing is more than $17,000. Compare refinance lenders below!</p>
    <LenderTable listOfLenders={data.availableLenders} toZipStep={toZipStep} />
    <PaymentCalc initalValues={data} />
    <PaymentCalc initalValues={estimate}/>
    <Disclosure />
  </div>
);}

export default Refinance;

//<RefinanceCalc data={data} />
