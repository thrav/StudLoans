import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FORM } from '../constants/form_content';
import { nextStep, storeResponse } from '../actions/index';
import _ from 'lodash';

class MultipleChoice extends Component {

  onSelect(optionValue, optionId, step) {
    if(!!this.optionId)
      this.props.storeResponse(optionId, step);
    else
      this.props.storeResponse(optionValue, step);
    this.props.nextStep(step);
  }

  render() {
    const { step } = this.props;
    const options = _.find(FORM, {id: step}).options;

    const items = options.map((option) => {
      return (
        <li className="list-group-item" key={option.value}>
          <button className="btn btn-primary" onClick={this.onSelect.bind(this, option.value, option.id, step)}>{option.label}</button>
        </li>
      );
    });

    return (
      <ul className="list-group">{items}</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    step: state.step.step
  }
}

export default connect (mapStateToProps, { nextStep, storeResponse })(MultipleChoice);
