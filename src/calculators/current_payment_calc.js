import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { storeResponse, nextStep } from '../actions/index';
import { FORGIVENESS_FIELDS } from '../constants/form_content';

class CurrentPaymentCalc extends Component {

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
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {_.map(PAYMENT_FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
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
  form: 'CurrentPaymentCalc',
  fields: _.keys(PAYMENT_FIELDS),
  validate
}, mapStateToProps, { storeResponse, nextStep })(ForgivenessCalc);
