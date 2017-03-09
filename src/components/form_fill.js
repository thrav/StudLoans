import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FORM } from '../constants/form_content';
import { nextStep, storeResponse } from '../actions/index';
import _ from 'lodash';

class FormFill extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log("inputChange");
  }

  onSelect() {
    console.log("term: " + this.state.term + "| step: " + this.props.step)
    this.props.storeResponse(this.state.term, this.props.step);
    this.setState({ term: '' });
    this.props.nextStep(this.props.step);
  }

  render() {
    const page = _.find(FORM, {id: this.props.step});

    return (
      <div>
        <input
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <button
          type="submit"
          className='btn btn-primary'
          onClick={this.onSelect.bind(this)}>
            {page.submitText}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    step: state.step.step,
    emailValue: state.responses.email,
    zipcodeValue: state.responses.zipcode
  }
}

export default connect (mapStateToProps, { nextStep, storeResponse })(FormFill);
