import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PAYMENT_FIELDS } from '../constants/form_content';
import { amortization, compoundInterest } from '../lib/math_tools';
import { IBR_DEDUCTIONS } from '../constants/results_data.js';
import ForgivenessResults from './forgiveness_results';
import _ from 'lodash';

class ForgivenessCalc extends Component {

  constructor(props) {
    super(props);
    const { loanBalance, interestRate, income, zipState, education, publicServant } = props.initalValues;
    const { outcome } = props;
    const gradSchool = education !== 'edu_babs' ? 1 : 0;
    const termCap = outcome === 'ibr' ? 25 : 10;

    this.state = {
      fedLoanBalance: loanBalance,
      annualInterestRate: interestRate,
      adjustedIncome: income,
      annualGrowthRate: 2.5,
      familySize: 1,
      zipState: zipState,
      before2014: 1,
      gradSchool: gradSchool,
      termCap: termCap,
      publicServant: publicServant
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

  getResults(title, loanBalance, income, before2014, gradSchool,
              annualGrowthRate, interestRate, zipState, familySize, publicServant) {
    var termCap = 10;
    if(title === 'IBR') { termCap = 25 }

    const deduction = this.getDeduction(familySize, zipState);
    var percentage = .10;
    var duration = before2014 ? 25 : 20;
    if (duration > termCap) {
      duration = termCap;
    }

    if(title !== 'Standard') {
      if(title === 'IBR') {
        percentage = before2014 ? .15 : .10
        if (publicServant) { duration = 10; }
      }
      else if(title === 'REPAYE') {
        if(duration >= 20) {
          duration = gradSchool ? 25 : 20;
        }
      }

      const schedule = this.calculatePayments(income, annualGrowthRate, loanBalance,
        interestRate, duration, deduction, percentage);
      const totalPayment = _.reduce(schedule.payments, (acc, val) => acc + val, 0);

      return {
        title: title,
        firstPayment: Math.round(_.head(schedule.payments)),
        finalPayment: Math.round(_.last(schedule.payments)),
        totalPayment: Math.round(totalPayment),
        totalForgiveness: Math.round(schedule.remainingBalance),
        repaymentPeriod: schedule.payments.length,
        eligible: (schedule.remainingBalance > 0 && _.head(schedule.payments) > 0)
      };
    }
    else {
      duration = 10;
      const payment = amortization(loanBalance, interestRate, duration, 0);

      return ({
        title: 'Standard',
        firstPayment: payment,
        finalPayment: payment,
        totalPayment: payment * duration * 12,
        totalForgiveness: 0,
        repaymentPeriod: duration * 12
      });
    }
    // get the rest of it
  }

  getDeduction(familySize, zipState) {
    const capFamilySize = Object.keys(IBR_DEDUCTIONS["DEFAULT"]).length;
    if (familySize > capFamilySize) {
      familySize = capFamilySize;
    }

    var stateKey = IBR_DEDUCTIONS[zipState] ? zipState : "DEFAULT";
    return IBR_DEDUCTIONS[stateKey][familySize];
  }

  getIBR(yearlyIncome, deduction, percentage) {
    return (yearlyIncome - deduction) * percentage / 12;
  }

  calculatePayments(income, annualGrowthRate, loanBalance, interestRate, duration, deduction, percentage) {
    var payments = [];
    var principals = [];
    var remainingBalance = loanBalance;

    _.each(_.range(duration), (year) => {
      _.each(_.range(12), (month) => {
        const yearlyIncome = compoundInterest(annualGrowthRate, 1, income, year);
        const totaledPrincipals = _.reduce(principals, (acc, val) => acc + val, 0);
        remainingBalance = loanBalance - totaledPrincipals;
        const payment = this.getIBR(yearlyIncome, deduction, percentage);
        const interest = remainingBalance * Math.pow((1 + interestRate / 100 / 365.75), (365/12)) - remainingBalance;
        const principal = payment - interest;

        if (remainingBalance - payment < 0) {
          payments.push(remainingBalance);
          principals.push(payment - remainingBalance);
          remainingBalance = 0;
          return {
            payments: payments,
            principals: principals,
            remainingBalance: remainingBalance
          }
        } else {
          payments.push(payment);
          principals.push(principal);
        }
      });
    });

    return {
      payments: payments,
      principals: principals,
      remainingBalance: remainingBalance
    };
  }

  render() {
    const { familySize, fedLoanBalance, annualInterestRate, annualGrowthRate, zipState, adjustedIncome, before2014, gradSchool, publicServant, termCap } = this.state;

    const IBRresults = this.getResults('IBR',fedLoanBalance, adjustedIncome, before2014, gradSchool,
                annualGrowthRate, annualInterestRate, zipState, familySize, publicServant);
    const PAYEresults = this.getResults('PAYE',fedLoanBalance, adjustedIncome, before2014, gradSchool,
                annualGrowthRate, annualInterestRate, zipState, familySize, publicServant);
    const REPAYEresults = this.getResults('REPAYE',fedLoanBalance, adjustedIncome, before2014, gradSchool,
                annualGrowthRate, annualInterestRate, zipState, familySize, publicServant);
    const Standardresults = this.getResults('Standard',fedLoanBalance, adjustedIncome, before2014, gradSchool,
                annualGrowthRate, annualInterestRate, zipState, familySize, publicServant);

    return (
      <div>
      <form>
        <div className='form-group'>
        <label>
          Federal Student Loan Balance:
          <input name='fedLoanBalance' type='number'
            value={this.state.fedLoanBalance} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Annual Interest Rate (%):
          <input name='annualInterestRate' type='number'
            value={this.state.annualInterestRate} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Annual Adjusted Gross Income:
          <input name='adjustedIncome' type='number'
            value={this.state.adjustedIncome} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Annual Income Growth (%):
          <input name='annualGrowthRate' type='number'
            value={this.state.annualGrowthRate} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Family Size:
          <input name='familySize' type='picklist'
            value={this.state.familySize} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          State of Residence:
          <input name='zipState' type='picklist'
            value={this.state.zipState} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          First Loan before July 2014?
          <input name='before2014' type='picklist'
            value={this.state.before2014} onChange={this.onInputChange} />
        </label>
        </div>
        <div className='form-group'>
        <label>
          Did you attend Grad School?
          <input name='gradSchool' type='picklist'
            value={this.state.gradSchool} onChange={this.onInputChange} />
        </label>
        </div>
      </form>
      <div>
        <table>
          <tbody>
          <tr>
            <td><ForgivenessResults results={IBRresults} /></td>
            <td><ForgivenessResults results={PAYEresults} /></td>
            <td><ForgivenessResults results={REPAYEresults} /></td>
            <td><ForgivenessResults results={Standardresults} /></td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default ForgivenessCalc;
