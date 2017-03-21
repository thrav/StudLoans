// call with assumed values and allow the user to fill in additional details

// fields: income, family size, interest rate, state of residence,
// annual growth rate, predates_2014?, attended grad school, public servent
// balance, decision

// we should be working out what the state is based on the zip code earlier
// also pull income, interest rate, balanace, attended grad school, public servent

// calc deduction based on family size
// calc cost of each payment
// calc total interest paid
// calc payments

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { storeResponse, nextStep } from '../actions/index';
import { FORGIVENESS_FIELDS } from '../constants/form_content';

class ForgivenessCalc extends Component {

  onSubmit(passed) {
    console.log("submitted");
    //this.props.storeResponse(passed.email, this.props.step);
    //this.props.nextStep(this.props.step);
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
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {_.map(EMAIL_FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // _.each(EMAIL_FIELDS, (type, field) => {
  //   const isValidEmail = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|cc|co|edu|org|net|cat|coop|pro|travel|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(values[field]);
  //
  //   if(!values[field] || !isValidEmail) {
  //     errors[field] = `Please enter a valid ${field}`
  //   }
  // });

  return errors;
}

function mapStateToProps(state) {
  return {
    responeses: state.responses
  }
}

export default reduxForm({
  form: 'ForgivenessCalc',
  fields: _.keys(FORGIVENESS_FIELDS),
  validate
}, mapStateToProps, { storeResponse, nextStep })(ForgivenessCalc);
