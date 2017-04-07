import React, { Component, PropTypes } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { PAYMENT_FIELDS } from '../constants/form_content';
import { amortization } from '../lib/math_tools';
import { getResults } from '../selectors';
import PaymentResults from './payment_results';

class CurrentPaymentCalc extends Component {

  onSubmit(passed) {
    console.log(passed.loanBalance);
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
    console.log(this.props.test);

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {_.map(PAYMENT_FIELDS, this.renderField.bind(this))}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <PaymentResults results={this.props.results} />
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
    initialValues: state.responses,
    form: state.form,
    results: getResults(state, props)
  }
}

CurrentPaymentCalc = reduxForm({
  form: 'CurrentPaymentCalc',
  fields: _.keys(PAYMENT_FIELDS),
  validate
})(CurrentPaymentCalc);

const selector = formValueSelector('CurrentPaymentCalc');
CurrentPaymentCalc = connect(
  state => {
    const values = selector(state, 'loanBalance', 'interestRate', 'terms');
    return {
      test: values
    }
  }
)(CurrentPaymentCalc);

export default CurrentPaymentCalc;

// handleEmailChange: function(e) {
//    this.setState({email: e.target.value});
// },
// handlePasswordChange: function(e) {
//    this.setState({password: e.target.value});
// },
// render : function() {
//       return (
//         <form>
//           <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
//           <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
//           <button type="button" onClick={this.handleLogin}>Login</button>
//         </form>);
// },
// handleLogin: function() {
//     console.log("EMail: " + this.state.email);
//     console.log("Password: " + this.state.password);
// }
// https://facebook.github.io/react/docs/forms.html
