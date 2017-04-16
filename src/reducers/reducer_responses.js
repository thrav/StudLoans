import { STORE_RESPONSE } from '../actions/index';
import { LENDER_DATA } from '../constants/results_data';
import { STATE_ZIPS } from '../constants/state_zips';
import _ from 'lodash';

const INITIAL_STATE = {
  employment:       null,
  income:           null,
  loanBalance:      null,
  loanType:         null,
  interestRate:     null,
  creditScore:      null,
  education:        null,
  age:              null,
  zipcode:          null,
  zipState:         null,
  email:            null,
  terms:            120,
  availableLenders: []
}

const TESTING_STATE = {
  employment:       'emp_govt',
  income:           50000,      //ai_2550
  loanBalance:      90000,      //lb_o80
  loanType:         'lt_fed',
  interestRate:     8,      //ir_o7
  creditScore:      650,      //cs_u650
  education:        'edu_babs',
  publicServant:    1,
  age:              30,      //age_2835
  zipcode:          '78209',
  zipState:         'TX',
  email:            'thravm@gmail.com',
  terms:             120,
  availableLenders: []
}

export default function(state = TESTING_STATE, action) {
  switch(action.type) {
    case STORE_RESPONSE:
      switch(action.payload.step) {
        case 0:
          const publicServant = (action.payload.option === 'emp_govt'
                              || action.payload.option === 'emp_nonprofit') ? 1 : 0;
          return { ...state, employment: action.payload.option, publicServant: publicServant }
        case 1:
          return { ...state, income: action.payload.option }
        case 2:
          return { ...state, loanBalance: action.payload.option }
        case 3:
          return { ...state, loanType: action.payload.option }
        case 4:
          return { ...state, interestRate: action.payload.option }
        case 5:
          return { ...state, creditScore: action.payload.option }
        case 6:
          return { ...state, education: action.payload.option }
        case 7:
          return { ...state, age: action.payload.option }
        case 8:
          const zipState = findZipState(action.payload.option);
          const availableLenders = determineAvailableLenders(
            zipState, state.loanBalance, state.income, state.creditScore);
          return { ...state, zipcode: action.payload.option, zipState: zipState, availableLenders: availableLenders }
        case 9:
          return { ...state, email: action.payload.option }
      }
  }
  return state;
}

const findZipState = (zipcode) => {
  return _.findKey(STATE_ZIPS, (st) => _.indexOf(st, zipcode) !== -1);
}

const determineAvailableLenders = (zipState, loanBalance, income, creditScore) => {
  const allLenders = _.keys(LENDER_DATA);
  var declinedLenders = [];

  if (!zipState) {
    return { empty: 'empty' };
  }
  if (_.indexOf(['AL','DE','KY','MS','NV','RI','SD'], zipState) !== -1 || income === 'ai_u25') {
    declinedLenders.push('earnest');
  }
  if (_.indexOf(['DC','DE','ID','LA','MS','NV','RI','SD','VT'], zipState) !== -1
        || loanBalance === 'lb_u5' || loanBalance === 'lb_510'
        || income === 'ai_u25' || income === 'ai_2550') {
    declinedLenders.push('common_bond');
  }
  if (_.indexOf(['ME','NV','WV'], zipState) !== -1
        || creditScore === 'cs_u650' || creditScore === 'cs_650680') {
    declinedLenders.push('lendkey');
  }
  if (zipState === 'NV' || loanBalance === 'lb_u5' || loanBalance === 'lb_510') {
    declinedLenders.push('sofi');
  }
  if (creditScore === 'cs_u650' || creditScore === 'cs_650680'
        || income === 'ai_u25' || income === 'ai_2550' || income === 'ai_5075') {
    declinedLenders.push('college_ave');
  }

  const availableLenders = allLenders.filter((lender) => {
    return declinedLenders.indexOf(lender) === -1;
  });

  return _.indexBy(availableLenders, (x) => x);
}
