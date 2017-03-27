import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FORGIVENESS_FIELDS } from '../constants/form_content';
import PaymentResults from './payment_results';

class EstimatedPaymentCalc extends Component {

  onSubmit(passed) {
    console.log("submitted");
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div key={field} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type='text' className='form-control' {...fieldHelper} />
        <div className='text-help'>
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <form>
        {_.map(REFINANCE_FIELDS, this.renderField.bind(this))}
        <PaymentResults loanBalance={this.props.fields.loanBalance}
          interestRate={this.props.fields.interestRate} terms={this.props.fields.terms} />
      </form>
    );
  }


}

function validate(values) {
  const errors = {};

  //validation

  return errors;
}

function mapStateToProps(state) {
  return {
    responeses: state.responses
  }
}

export default reduxForm({
  form: 'EstimatedPaymentCalc',
  fields: _.keys(REFINANCE_FIELDS),
  validate
}, mapStateToProps)(ForgivenessCalc);
