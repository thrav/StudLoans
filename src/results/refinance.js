import React, { Component } from 'react';
import LenderTable from './lender_table';
import Disclosure from './disclosure';

const Refinance = ({ data, toZipStep }) => {
  console.log(data.availableLenders);
  return (
  <div>
    <h3>You qualify for Student Loan Refinancing!</h3>
    <p>The average savings from refinancing is more than $17,000. Compare refinance lenders below!</p>
    <LenderTable listOfLenders={data.availableLenders} toZipStep={toZipStep} />


    <Disclosure />
  </div>
);}

export default Refinance;

//<RefinanceCalc data={data} />
