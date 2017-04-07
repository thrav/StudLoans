import React, { Component } from 'react';
import LenderTable from './lender_table';
import Disclosure from './disclosure';
import EstimatedPaymentCalc from '../calculators/estimated_payment_calc';
import CurrentPaymentCalc from '../calculators/current_payment_calc';

console.log("in refi");

const Refinance = ({ data, toZipStep }) => {
  console.log(data.availableLenders);
  return (
  <div>
    <h3>You qualify for Student Loan Refinancing!</h3>
    <p>The average savings from refinancing is more than $17,000. Compare refinance lenders below!</p>
    <LenderTable listOfLenders={data.availableLenders} toZipStep={toZipStep} />
    <CurrentPaymentCalc />
    <EstimatedPaymentCalc />
    <Disclosure />
  </div>
);}

export default Refinance;

//<RefinanceCalc data={data} />
