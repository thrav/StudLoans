import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './results';
import MultipleChoice from './multiple_choice';
import FormContainer from '../forms/form_container';
import { FORM } from '../constants/form_content';
import { lastStep } from '../actions/index';
import _ from 'lodash';

class DecisionForm extends Component {

  renderPrompt(step) {
    const style = {
      width: (step / 10 * 100) + '%'
    }

    return (
      <div>
        <progress className="progress" style={style}></progress>
        <div>{step > 7 ? <FormContainer step={step} /> : <MultipleChoice /> }</div>
        {step !== 0 && <button className='btn btn-danger' onClick={this.onBack.bind(this, step)}>Back</button>}
      </div>
    );
  }

  onBack(step) {
    this.props.lastStep(step)
  }

  render() {
    const { step } = this.props;
    const page = _.find(FORM, {id: step});

    if(step < 10) {
      return (
        <div>
          <h3>{page.label}</h3>
          {this.renderPrompt(step)}
          <p>{page.note}</p>
        </div>
      )
    } else { return ( <div><Results /></div> ) }
  }
}

function mapStateToProps(state) {
  return {
    step: state.step.step
  }
}

export default connect(mapStateToProps, { lastStep })(DecisionForm);
