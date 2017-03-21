import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { storeResponse, nextStep } from '../actions/index';
import { ZIP_FIELDS } from '../constants/form_content';
import { STATE_ZIPS } from '../constants/state_zips';

class ZipcodeForm extends Component {

  onSubmit(passed) {
    this.props.storeResponse(passed.zipcode, this.props.step);
    this.props.nextStep(this.props.step);
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
        {_.map(ZIP_FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(ZIP_FIELDS, (type, field) => {
    const zipState = _.findKey(STATE_ZIPS, (st) => _.indexOf(st, values[field]) !== -1);

    if(!zipState) {
      errors[field] = `Please enter a valid ${field}`
    }
  });

  return errors;
}

function mapStateToProps(state) {
  return {
    step: state.step.step
  }
}

export default reduxForm({
  form: 'ZipcodeForm',
  fields: _.keys(ZIP_FIELDS),
  validate
}, mapStateToProps, { storeResponse, nextStep })(ZipcodeForm);
