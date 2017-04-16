import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PAYMENT_FIELDS } from '../constants/form_content';
import { amortization } from '../lib/math_tools';
import PaymentResults from './payment_results';

class PaymentCalc extends Component {

  constructor(props) {
    super(props);
    const { loanBalance, interestRate, terms } = props.initalValues;

    this.state = {
      loanBalance: loanBalance,
      interestRate: interestRate,
      terms: terms
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  getResults(loanBalance, interestRate, terms) {
    const monthlyPayment = amortization(loanBalance, parseFloat(interestRate), terms / 12);
    const totalPayment   = monthlyPayment * terms;
    const totalInterest  = totalPayment - loanBalance;

    return ({
      monthlyPayment: monthlyPayment,
      totalPayment: totalPayment,
      totalInterest: totalInterest
    });
  }

  render() {
    // console.log(this.state.results);
    const { loanBalance, interestRate, terms } = this.state;
    const results = this.getResults(loanBalance, interestRate, terms);

    return (
      <div>
      <form>
        <div className='form-group'>
        <label>
          Loan Balance:
          <input name='loanBalance' type='number'
            value={this.state.loanBalance} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Interest Rate:
          <input name='interestRate' type='number'
            value={this.state.interestRate} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Term (Months):
          <input name='terms' type='number'
            value={this.state.terms} onChange={this.onInputChange} />
        </label>
        </div>
      </form>
      <PaymentResults results={results} />
      </div>
    );
  }
}

export default PaymentCalc;
