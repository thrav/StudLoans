import React, { Component } from 'react';
import { lastStep } from '../actions/index';
import Lender from './lender.js';

const LenderTable = ({ listOfLenders, toZipStep }) => {
  if(listOfLenders['empty']) {
    return (<div>
              <h3>We could not find your Zip Code</h3>
              <button onClick={toZipStep}>Back to Zip</button>
            </div>);
  } else if(!listOfLenders) {
    return <div><h3>No Lenders found for your state. Check back if you relocate in the future.</h3></div>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="">Lender</th>
              <th className="">Variable Rates</th>
              <th className="">Fixed Rates</th>
              <th className="">Term</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {_.map(listOfLenders, (lenderKey) =>
              <Lender key={lenderKey} lenderKey={lenderKey} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LenderTable;
