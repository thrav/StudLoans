export const LENDER_DATA = {
  sofi: {
    name: 'SoFi',
    variableRates: [
      '2.34% - 5.27%',
      '2.64% - 5.39%',
      '3.14% - 5.64%',
      '3.52% - 6.27%'
    ],
    fixedRates: [
      '3.37% - 5.99%',
      '3.87% - 6.49%',
      '4.49% - 6.74%',
      '5.00% - 6.74%'
    ],
    terms: [
      '5',
      '7',
      '10',
      '15, 20'
    ],
    uniqueFeatures: [
      'Loan size: $10k to unlimited',
      '12-month unemployment protection',
      'Career assistance and networking events',
      'Also provides mortgages and personal loans'
    ],
    referralURL: 'https://studentloansguy.com/sofi',
    logoURL: '../images/sofi.png',
    abbr: 'SoFi',
    key: 'sofi'
  },
  lendkey: {
    name: 'LendKey',
    variableRates: [
      '2.21% - 5.03%',
      '2.77% - 5.38%',
      '3.03% - 5.41%',
      '3.41% - 6.92%'
    ],
    fixedRates: [
      '3.25% - 5.99%',
      '3.82% - 6.43%',
      '4.25% - 6.93%',
      '4.97% - 8.22%'
    ],
    terms: [
      '5',
      '7',
      '10',
      '15, 20'
    ],
    uniqueFeatures: [
      'Loan size: $7.5k to $175k',
      '18-month unemployment protection',
      '$24k minimum income',
      'Loans funded by community lenders'
    ],
    referralURL: 'https://studentloansguy.com/lendkey',
    logoURL: '../images/lendkey.png',
    abbr: 'LK',
    key: 'lendkey'
  },
  common_bond: {
    name: 'CommonBond',
    variableRates: [
      '2.32% - 5.18%',
      '2.68% - 5.31%',
      '3.18% - 5.56%',
      '3.56% - 6.18%'
    ],
    fixedRates: [
      '3.37% - 5.99%',
      '4.00% - 6.49%',
      '4.61% - 7.00%',
      '5.12% - 7.74%'
    ],
    terms: [
      '5',
      '7',
      '10',
      '15, 20'
    ],
    uniqueFeatures: [
      'Loan size: $10k to $500k',
      'Deferment options',
      '$50k minimum income',
      'Partners with Pencils for Promise'
    ],
    referralURL: 'https://studentloansguy.com/commonbond',
    logoURL: '../images/commonbond.png',
    abbr: 'CB',
    key: 'common_bond'
  },
  earnest: {
    name: 'Earnest',
    variableRates: [
      '2.34% - 5.07%',
      '2.96% - 5.52%',
      '3.34% - 6.02%'
    ],
    fixedRates: [
      '3.43% - 6.20%',
      '4.61% - 6.74%',
      '5.21% - 6.74%'
    ],
    terms: [
      '5',
      '10',
      '15'
    ],
    uniqueFeatures: [
      'Loan size: $5k to $300k',
      '$45k minimum income',
      'Choose your own term length'
    ],
    referralURL: 'https://studentloansguy.com/earnest',
    logoURL: '../images/earnest.png',
    abbr: 'ERN',
    key: 'earnest'
  },
  college_ave: {
    name: 'College Ave',
    variableRates: [
      '2.75% - 5.62%',
      '3.50% - 5.75%',
      '3.80% - 6.00%'
    ],
    fixedRates: [
      '4.75% - 6,65%',
      '4.90% - 6.75%',
      '5.45% - 7.35%'
    ],
    terms: [
      '5',
      '10',
      '15'
    ],
    uniqueFeatures: [
      'Loan size: $5k to $250k',
      '$75k min income w/o cosigner',
      'Easy application process - no forms to upload'
    ],
    referralURL: 'https://studentloansguy.com/collegeave',
    logoURL: '../images/collegeave.png',
    abbr: 'CA',
    key: 'college_ave'
  }
}

export const IBR_DEDUCTIONS = {
  "AK": {
    1: 20505,
    2: 27645,
    3: 34785,
    4: 41925,
    5: 49065,
    6: 56205,
    7: 63345,
    8: 70515
  },
  "HI": {
    1: 22260,
    2: 30030,
    3: 37800,
    4: 45570,
    5: 53340,
    6: 61110,
    7: 68880,
    8: 76680
  },
  "DEFAULT": {
    1: 17820,
    2: 24030,
    3: 30240,
    4: 36450,
    5: 42660,
    6: 48870,
    7: 55095,
    8: 61335
  }
}
