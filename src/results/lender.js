import React, { Component } from 'react';
import { LENDER_DATA } from '../constants/results_data';

const Lender = ({ lenderKey }) => {

  const ld = LENDER_DATA[lenderKey];

  return (
  <tr key={ld.key}>
    <td><a href={ld.referralURL}></a></td>
    <td>{ld.variableRates[0]}</td>
    <td>{ld.fixedRates[0]}</td>
    <td>{ld.terms[0]} - {ld.terms[ld.terms.length - 1]}</td>
    <td><a href={ld.referralURL}>Visit {ld.name}</a></td>
  </tr> );
}

export default Lender;
