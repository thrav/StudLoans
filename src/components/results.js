import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { toZipStep } from '../actions/index';

import Refinance from '../results/refinance';
import RefinanceOrForgive from '../results/refinance_or_forgive';
import ImproveCredit from '../results/improve_credit';
import KeepLoanLowInterest from '../results/keep_loan_low_interest';
import KeepLoanLowBalance from '../results/keep_loan_low_balance';
import Student from '../results/student';
import IncomeDrivenRepayment from '../results/income_driven_repayment';
import Forgiveness from '../results/forgiveness';

class Results extends Component {

  renderOutcome(data) {
    if
      (data.income > 25000
      && data.loanBalance > 5000
      && data.creditScore > 650
      && data.employment === 'emp_forprofit'
      && data.interestRate > 3
      && data.education !== 'edu_some'
      && !(data.income < 50000 && creditScore < 680))
      { return <Refinance data={data} toZipStep={this.props.toZipStep()} /> }
    else if
      (data.income > 100000
      && (data.employment === 'emp_nonprofit' || data.employment === 'emp_govt')
      && data.loanBalance > 5
      && data.creditScore > 680
      && data.interestRate > 3)
      { return <RefinanceOrForgive data={data} toZipStep={this.props.toZipStep()} /> }
    else if
      (data.employment === 'emp_nonprofit' || data.employment === 'emp_govt')
      { return <Forgiveness data={data} /> }
    else if
      (data.income <= 25000
      || (data.loanBalance >= 75000 && data.income >= 25000))
      { return <IncomeDrivenRepayment data={data} /> }
    else if
      (data.employment === 'emp_student')
      { return <Student /> }
    else if
      (data.loanBalance < 5000)
      { return <KeepLoanLowBalance data={data} /> }
    else if
      (data.interestRate < 3000)
      { return <KeepLoanLowInterest data={data} /> }
    else if
      (data.creditScore < 680)
      { return <ImproveCredit data={data} /> }
    else { return ( <div>nada</div> ) }
  }

  render() {
    return (
      <div>
        <h3>Results</h3>
          {this.renderOutcome(this.props.responses)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    responses: state.responses
  };
}

export default connect(mapStateToProps, { toZipStep })(Results);
