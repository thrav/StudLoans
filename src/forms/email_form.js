import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { storeResponse, nextStep } from '../actions/index';
import { EMAIL_FIELDS } from '../constants/form_content';

class EmailForm extends Component {

  componentWillMount() {
    if(!!this.props.hasEmail)
      this.props.nextStep(this.props.step);
  }

  onSubmit() {
    this.props.storeResponse(passed.email, this.props.step);
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
        {_.map(EMAIL_FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(EMAIL_FIELDS, (type, field) => {
    const isValidEmail = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|cc|co|edu|org|net|cat|coop|pro|travel|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(values[field]);

    if(!values[field] || !isValidEmail) {
      errors[field] = `Please enter a valid ${field}`
    }
  });

  return errors;
}

function mapStateToProps(state) {
  return {
    step: state.step.step,
    hasEmail: state.responses.email
  }
}

export default reduxForm({
  form: 'EmailForm',
  fields: _.keys(EMAIL_FIELDS),
  validate
}, mapStateToProps, { storeResponse, nextStep })(EmailForm);
