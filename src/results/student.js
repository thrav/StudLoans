import React, { Component } from 'react';
import Disclosure from './disclosure';

const Student = () =>
<div>
  <h3>Looks like you&apos;re currently a student.</h3>
  <p>Check back after you graduate and have a job lined up.</p>
  <h5>It&apos;s never too early to start thinking about savings on your student loans.</h5>
  <ol>
    <li>Look for <a href="https://www.studentloansguy.com/scholarships/">scholarships</a> to lower the amount of student loans you take out.</li>
    <li>Check out <a href="https://www.studentloansguy.com/creditkarma">Credit Karma</a> to learn more about your credit score.</li>
  </ol>
  <Disclosure />
</div>

export default Student;
