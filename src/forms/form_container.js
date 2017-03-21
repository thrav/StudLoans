import React, { Component } from 'react';
import ZipcodeForm from './zipcode_form';
import EmailForm from './email_form';

export default class FormContainer extends Component {
  render() {
    return (
      <div>
        {this.props.step === 8 ? <ZipcodeForm /> : <EmailForm /> }
      </div>
    );
  }
}
