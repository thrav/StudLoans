import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Results extends Component {

  renderData(data) {
    console.log(data);
    return (
      <ul>
      <li>{data.employment}</li>
      <li>{data.income}</li>
      <li>{data.loanBalance}</li>
      <li>{data.loanType}</li>
      <li>{data.interestRate}</li>
      <li>{data.creditScore}</li>
      <li>{data.education}</li>
      <li>{data.age}</li>
      <li>{data.zipcode}</li>
      <li>{data.email}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Results</h3>

          {this.renderData(this.props.responses)}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    responses: state.responses
  };
}

export default connect(mapStateToProps)(Results);
