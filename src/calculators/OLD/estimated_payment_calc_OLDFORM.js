import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { ESTIMATE_FIELDS } from '../constants/form_content';
import { getEstResults } from '../selectors';
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
    const { handleSubmit, results } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {_.map(ESTIMATE_FIELDS, this.renderField.bind(this))}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <PaymentResults results={this.props.estResults} />
      </div>
    );
  }


}

function validate(values) {
  const errors = {};

  //validation

  return errors;
}

function mapStateToProps(state, props) {
  return {
    respones: state.responses,
    estResults: getEstResults(state, props)
  }
}

export default reduxForm({
  form: 'EstimatedPaymentCalc',
  fields: _.keys(ESTIMATE_FIELDS),
  validate
}, mapStateToProps)(EstimatedPaymentCalc);
