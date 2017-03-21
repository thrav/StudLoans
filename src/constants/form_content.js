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
      {val: 20, value: 'ai_u25',   label:'< $25k',         estimate: 20000},
      {val: 37, value: 'ai_2550',  label: '$25k - $50k',   estimate: 37500},
      {val: 62, value: 'ai_5075',  label: '$50k - $75k',   estimate: 62500},
      {val: 87, value: 'ai_75100', label: '$75k - $100k',  estimate: 87500},
      {val: 110, value: 'ai_o100',  label: '$100k+',        estimate: 100000}
    ],
    type: 'picker'
  },
  loanBalance: {
    id: 2,
    label: 'Student Loan Balance',
    options: [
      {val: 4, value: 'lb_u5',    label: '< $5k',         estimate: 2500},
      {val: 8, value: 'lb_510',   label: '$5k - $10k',    estimate: 7500},
      {val: 15, value: 'lb_1020',  label: '$10k - $20k',   estimate: 15000},
      {val: 30, value: 'lb_2040',  label: '$20k - $40k',   estimate: 30000},
      {val: 60, value: 'lb_4080',  label: '$40k - $80k',   estimate: 60000},
      {val: 90, value: 'lb_o80',   label: '$80k+',         estimate: 90000}
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
      {val: 2, value: 'ir_u3', label: '< 3%', estimate: 2},
      {val: 4, value: 'ir_35', label: '3-5%', estimate: 4},
      {val: 6, value: 'ir_57', label: '5-7%', estimate: 6},
      {val: 8, value: 'ir_o7', label: '7%+',  estimate: 8}
    ],
    type: 'picker'
  },
  creditScore: {
    id: 5,
    label: 'Credit Score',
    options: [
      {val: 630, value: 'cs_u650',    label: '< 650'},
      {val: 670, value: 'cs_650680',  label: '650 - 680'},
      {val: 700, value: 'cs_680720',  label: '680 - 720'},
      {val: 740, value: 'cs_720760',  label: '720 - 760'},
      {val: 780, value: 'cs_o760',    label: '760+'}
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
      {val: 21, value: 'age_u22',  label: '< 22'},
      {val: 25, value: 'age_2228', label: '22 - 28'},
      {val: 30, value: 'age_2835', label: '28 - 35'},
      {val: 38, value: 'age_o35',  label: '35+'}
    ],
    type: 'picker'
  },
  zipcode: {
    id: 8,
    formName: 'Zipcode',
    label: 'Zipcode',
    fields: ZIP_FIELDS,
    type: 'form',
    submitText: 'Continue'
  },
  email: {
    id: 9,
    formName: 'Email',
    label: 'Email Address',
    fields: EMAIL_FIELDS,
    type: 'form',
    submitText: 'See Your Recommendation'
  }
};

export const ZIP_FIELDS = {
  zipcode:              { type: 'input',    label: 'Zipcode'                }
}

export const EMAIL_FIELDS = {
  email:                { type: 'input',    label: 'Email Address'          }
}

export const FORGIVENESS_FIELDS = {
  income:               { type: 'input',    label: 'Annual Income'          },
  annualGrowthRate:     { type: 'input',    label: 'Annual Growth Rate (%)' },
  balance:              { type: 'input',    label: 'Loan Balance'           },
  interestRate:         { type: 'input',    label: 'Interest Rate (%)'      },
  predates2014:         { type: 'checkbox', label: 'Pre-2014 Loan?'         },
  familySize:           { type: 'input',    label: 'Family Size'            },
  stateOfResidence:     { type: 'selector', label: 'State of Residence'     },
  attendedGradSchool:   { type: 'checkbox', label: 'Attended Grad School?'  },
  publicServent:        { type: 'checkbox', label: 'Public Servent?'        },
  decision:             { type: 'input',    label: 'Decision'               }
}

export const PAYMENT_FIELDS = {
  balance:              { type: 'input',    label: 'Loan Balance'           },
  interestRate:         { type: 'input',    label: 'Interest Rate (%)'      },
  term:                 { type: 'input',    label: 'Term Length (Months)'   }
}

export const REFINANCE_FIELDS = {
  reFiBalance:          { type: 'input',    label: 'Loan Balance'           },
  reFiInterestRate:     { type: 'input',    label: 'Interest Rate (%)'      },
  reFiTerm:             { type: 'input',    label: 'Term Length (Months)'   }
}
