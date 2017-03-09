export const FORM = {
  employment: {
    id: 0,
    label: 'Type of Employment',
    note: 'If still in school, choose "Current Student".',
    options: [
      {value: 'emp_forprofit',  label: 'For-Profit Company'},
      {value: 'emp_govt',       label: 'Government'},
      {value: 'emp_nonprofit',  label: 'Non-Profit'},
      {value: 'emp_student',    label: 'Current Student'}
    ],
    type: 'picker'
  },
  income: {
    id: 1,
    label: 'Annual Income',
    options: [
      {value: 'ai_u25',   label:'< $25k'},
      {value: 'ai_2550',  label: '$25k - $50k'},
      {value: 'ai_5075',  label: '$50k - $75k'},
      {value: 'ai_75100', label: '$75k - $100k'},
      {value: 'ai_o100',  label: '$100k+'}
    ],
    type: 'picker'
  },
  loanBalance: {
    id: 2,
    label: 'Student Loan Balance',
    options: [
      {value: 'lb_u5',    label: '< $5k'},
      {value: 'lb_510',   label: '$5k - $10k'},
      {value: 'lb_1020',  label: '$10k - $20k'},
      {value: 'lb_2040',  label: '$20k - $40k'},
      {value: 'lb_4080',  label: '$40k - $80k'},
      {value: 'lb_o80',   label: '$80k+'}
    ],
    type: 'picker'
  },
  loanType: {
    id: 3,
    label: 'Loan Type',
    options: [
      {value: 'lt_fed',     label: 'Federal'},
      {value: 'lt_private', label: 'Private'},
      {value: 'lt_both',    label: 'Both'}
    ],
    type: 'picker'
  },
  interestRate: {
    id: 4,
    label: 'Interest Rate',
    note: 'If you have multiple loans, use the weighted average.',
    options: [
      {value: 'ir_u3', label: '< 3%'},
      {value: 'ir_35', label: '3-5%'},
      {value: 'ir_57', label: '5-7%'},
      {value: 'ir_o7', label: '7%+'}
    ],
    type: 'picker'
  },
  creditScore: {
    id: 5,
    label: 'Credit Score',
    options: [
      {value: 'cs_u650',    label: '< 650'},
      {value: 'cs_650680',  label: '650 - 680'},
      {value: 'cs_680720',  label: '680 - 720'},
      {value: 'cs_720760',  label: '720 - 760'},
      {value: 'cs_o760',    label: '760+'}
    ],
    type: 'picker'
  },
  education: {
    id: 6,
    label: 'Highest Level of Education',
    options: [
      {value: 'edu_some',     label: 'Some College'},
      {value: 'edu_babs',     label: 'BA / BS'},
      {value: 'edu_mamsphd',  label: 'MA / MS / PhD'},
      {value: 'edu_mba',      label: 'MBA'},
      {value: 'edu_jd',       label: 'JD'},
      {value: 'edu_mddds',    label: 'MD / DDS'}
    ],
    type: 'picker'
  },
  age: {
    id: 7,
    label: 'Age',
    options: [
      {value: 'age_u22',  label: '< 22'},
      {value: 'age_2228', label: '22 - 28'},
      {value: 'age_2835', label: '28 - 35'},
      {value: 'age_o35',  label: '35+'}
    ],
    type: 'picker'
  },
  zipcode: {
    id: 8,
    formName: 'Zipcode',
    label: 'Zipcode',
    fields: {
      zipcode: { type: 'input', label: 'Zipcode' }
    },
    type: 'form',
    submitText: 'Continue'
  },
  email: {
    id: 9,
    formName: 'Email',
    label: 'Email Address',
    fields: {
      email: { type: 'input', label: 'Email Address' }
    },
    type: 'form',
    submitText: 'See Your Recommendation'
  }
};
