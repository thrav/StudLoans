import React, { Component } from 'react';
import DecisionForm from './decision_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Student Loans Guy</h2>
        <DecisionForm />
      </div>
    );
  }
}
