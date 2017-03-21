import React, { Component } from 'react';
import Disclosure from './disclosure';

const ImproveCredit = ({ data }) =>
  <div>
    <h5>Your credit score is too low for refinancing.</h5>
    <p>Improving your credit score to 680 or above could help you save thousands of dollars.</p>
    <p>Check out <a href="https://www.studentloansguy.com/creditkarma">Credit Karma</a> to learn more about your credit score.</p>

    <Disclosure />
  </div>

export default ImproveCredit;

//<RefinanceCalc data={data} />
