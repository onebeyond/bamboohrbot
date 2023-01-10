const AddBenefitGroup = {
  body: {
    title: 'Benefit Group',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      payPeriod: { description: '', type: 'string' },
      startDate: { description: '', type: 'string' },
      endDate: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddBenefitGroupEmployee = {
  body: {
    title: 'Benefit Group Employee',
    type: 'object',
    properties: {
      benefitGroupId: { description: '', type: 'string' },
      employeeId: { description: '', type: 'string' },
      startDate: { description: '', type: 'string' },
      endDate: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddBenefitGroupPlan = {
  body: {
    title: 'Benefit Group Plan',
    type: 'object',
    properties: {
      benefitGroupId: { description: '', type: 'string' },
      benefitPlanId: { description: '', type: 'string' },
      eligibility: { description: '', type: 'string' },
      waitPeriod: { description: '', type: 'string' },
      waitPeriodType: { description: '', type: 'string' },
      startDate: { description: '', type: 'string' },
      endDate: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddBenefitGroupPlanCost = {
  body: {
    title: 'Benefit Group Plan Cost',
    type: 'object',
    properties: {
      benefitGroupPlanId: { description: '', type: 'string' },
      benefitPlanCoverageId: { description: '', type: 'string' },
      employeeCost: { description: '', type: 'string' },
      companyCost: { description: '', type: 'string' },
      startDate: { description: '', type: 'string' },
      endDate: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddBenefitPlan = {
  body: {
    title: 'Benefit Plan',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      type: { description: '', type: 'string' },
      deductionTypeId: { description: '', type: 'string' },
      startYmd: { description: '', type: 'string' },
      endYmd: { description: '', type: 'string' },
      url: { description: '', type: 'string' },
      meetAcaMin: { description: '', type: 'string' },
      description: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddBenefitPlanCoverage = {
  body: {
    title: 'Benefit Plan Coverage',
    type: 'object',
    properties: {
      benefitPlanId: { description: '', type: 'string' },
      benefitCoverageId: { description: '', type: 'string' },
      totalCost: { description: '', type: 'string' },
      currencyType: { description: '', type: 'string' },
      startYmd: { description: '', type: 'string' },
      endYmd: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddCompanyFileCategory = {
  body: {
    title: 'New Company File Category',
    type: 'array',
    items: { type: 'string' },
    examples: ['A new category'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddEmployee = {
  body: {
    title: 'New Employee',
    type: 'object',
    properties: {
      firstName: { description: '', type: 'string', maximum: 255, examples: ['Panda'] },
      lastName: { description: '', type: 'string', maximum: 255, examples: ['Bear'] },
    },
    additionalProperties: true,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        Location: {
          type: 'string',
          description:
            'The URL to view the employee in the web app. The ID of the employee will be included.',
        },
      },
    },
  },
} as const;
const AddEmployeeDependent = {
  body: {
    title: 'Employee Dependent',
    type: 'object',
    properties: {
      employeeId: { description: '', type: 'string' },
      firstName: { description: '', type: 'string' },
      middleName: { description: '', type: 'string' },
      lastName: { description: '', type: 'string' },
      relationship: { description: '', type: 'string' },
      gender: { description: '', type: 'string' },
      ssn: { description: '', type: 'string' },
      dateOfBirth: { description: '', type: 'string' },
      addressLine1: { description: '', type: 'string' },
      addressLine2: { description: '', type: 'string' },
      city: { description: '', type: 'string' },
      state: { description: '', type: 'string' },
      zipCode: { description: '', type: 'string' },
      homePhone: { description: '', type: 'string' },
      country: { description: '', type: 'string' },
      isUsCitizen: { description: '', type: 'string' },
      isStudent: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddEmployeeDeposit = {
  body: {
    title: 'Employee Deposit',
    type: 'object',
    properties: {
      accounts: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            accountType: { type: 'string' },
            maskedAccountNumber: { type: 'string' },
            bankName: { type: 'string' },
            depositOrder: { type: 'string' },
            ruleType: { type: 'string' },
            ruleAmount: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee id.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const AddEmployeeFileCategory = {
  body: {
    title: 'New Employee File Category',
    type: 'array',
    items: { type: 'string' },
    examples: ['A new category'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddEmployeePaystub = {
  body: {
    title: 'Employee Paystub',
    type: 'object',
    properties: {
      employeeId: { description: '', type: 'string' },
      externalRecordId: { description: '', type: 'string' },
      payPeriodFrom: { description: '', type: 'string' },
      payPeriodTo: { description: '', type: 'string' },
      payDate: { description: '', type: 'string' },
      payorName: { description: '', type: 'string' },
      payorAdd1: { description: '', type: 'string' },
      payorAdd2: { description: '', type: 'string' },
      payorCity: { description: '', type: 'string' },
      payorState: { description: '', type: 'string' },
      payorZip: { description: '', type: 'string' },
      payeeName: { description: '', type: 'string' },
      currencyCode: { description: '', type: 'string' },
      net: { description: '', type: 'string' },
      gross: { description: '', type: 'string' },
      totalTaxes: { description: '', type: 'string' },
      totalDeductions: { description: '', type: 'string' },
      ytdNet: { description: '', type: 'string' },
      ytdGross: { description: '', type: 'string' },
      ytdTaxes: { description: '', type: 'string' },
      ytdDeductions: { description: '', type: 'string' },
      fedWitholding: { description: '', type: 'string' },
      federalType: {
        description: 'must be 2020_w4, pre_2020_w4, or null',
        type: 'string',
        enum: ['2020_w4', 'pre_2020_w4'],
      },
      twoJobs: { description: 'boolean value', type: 'string' },
      dependentsAmount: { description: 'float value', type: 'string' },
      otherIncome: { description: 'float value', type: 'string' },
      deductionsAmount: { description: 'float value', type: 'string' },
      stateWithholding: { description: '', type: 'string' },
      localWithholding: { description: '', type: 'string' },
      additionalFed: { description: '', type: 'string' },
      additionalState: { description: '', type: 'string' },
      additionalLocal: { description: '', type: 'string' },
      taxState: { description: '', type: 'string' },
      taxLocal: { description: '', type: 'string' },
      wages: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            externalWageId: { type: 'string' },
            wageDescription: { type: 'string' },
            wageAmount: { type: 'string' },
            ytdWageAmount: { type: 'string' },
            wageRate: { type: 'string' },
            hours: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
      taxes: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            externalTaxId: { type: 'string' },
            taxDescription: { type: 'string' },
            taxAmount: { type: 'string' },
            ytdTaxAmount: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
      deductions: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            externalDeductionId: { type: 'string' },
            deductionDescription: { type: 'string' },
            deductionAmount: { type: 'string' },
            ytdDeductionAmount: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
      deposits: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            depositOrder: { type: 'string' },
            depositAmount: { type: 'string' },
            maskedAccountNumber: { type: 'string' },
            accountType: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddEmployeeTableRow = {
  body: {
    title: 'Table Row Update',
    type: 'object',
    properties: {
      date: { description: '', type: 'string' },
      location: { description: '', type: 'string' },
      division: { description: '', type: 'string' },
      department: { description: '', type: 'string' },
      jobTitle: { description: '', type: 'string' },
      reportsTo: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
        },
        required: ['companyDomain', 'id', 'table'],
      },
    ],
  },
} as const;
const AddEmployeeTableRowV1 = {
  body: {
    title: 'Table Row Update',
    type: 'object',
    properties: {
      date: { description: '', type: 'string' },
      location: { description: '', type: 'string' },
      division: { description: '', type: 'string' },
      department: { description: '', type: 'string' },
      jobTitle: { description: '', type: 'string' },
      reportsTo: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
        },
        required: ['companyDomain', 'id', 'table'],
      },
    ],
  },
} as const;
const AddEmployeeUnpaidPaystubs = {
  body: {
    title: 'Employee Unpaid Paystub',
    type: 'object',
    properties: {
      employeeId: { description: '', type: 'string' },
      unpaidPeriods: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: { payDate: { type: 'string' } },
          additionalProperties: false,
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddEmployeeWithholding = {
  body: {
    title: 'Employee Withholding',
    type: 'object',
    properties: {
      fedWithholding: { description: '', type: 'string' },
      stateWithholding: { description: '', type: 'string' },
      localWithholding: { description: '', type: 'string' },
      additionalFed: { description: '', type: 'string' },
      additionalState: { description: '', type: 'string' },
      additionalLocal: { description: '', type: 'string' },
      taxState: { description: '', type: 'string' },
      taxLocal: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee id.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const AddNewCompanyBenefit = {
  formData: {
    title: 'Company Benefit Request',
    type: 'object',
    required: [
      'benefitType',
      'deductionTypeId',
      'startDate',
      'meetAcaMin',
      'minEssentialCoverage',
      'endDate',
    ],
    properties: {
      companyBenefitName: { description: 'Name', type: 'string' },
      benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
      benefitType: {
        description: 'Benefit type',
        type: 'string',
        enum: [
          'health',
          'dental',
          'vision',
          'retirement',
          'hsa',
          'flex',
          'life',
          'disability',
          'reimbursement',
          'supplemental',
          'other',
        ],
      },
      deductionTypeId: { description: 'Deduction type ID', type: 'string' },
      startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
      endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
      description: { description: 'Description', type: 'string' },
      planUrl: { description: 'Plan url', type: 'string' },
      ssoLoginUrl: { description: 'SSO login url', type: 'string' },
      ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
      safeHarbor: { description: 'Is a safe harbor', type: 'boolean' },
      meetAcaMin: { description: 'Meets ACA minimum requirements', type: 'boolean' },
      reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
      reimbursementFrequency: {
        description: 'Reimbursement frequency',
        type: 'string',
        enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
      },
      reimbursementCurrencyCode: { description: 'Reimbursement currency code', type: 'string' },
      minEssentialCoverage: { description: 'Provides minimum essential coverage', type: 'boolean' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      title: 'Company Benefit',
      type: 'object',
      properties: {
        name: { description: 'Name', type: 'string' },
        benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
        benefitType: {
          description:
            'Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`',
          type: 'string',
          enum: [
            'health',
            'dental',
            'vision',
            'retirement',
            'hsa',
            'flex',
            'life',
            'disability',
            'reimbursement',
            'supplemental',
            'other',
          ],
        },
        deductionTypeId: { description: 'Deduction type ID', type: 'integer' },
        startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
        endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
        description: { description: 'Description', type: 'string' },
        planUrl: { description: 'Plan url', type: 'string' },
        ssoLoginUrl: { description: 'SSO login url', type: 'string' },
        ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
        safeHarbor: {
          description: 'Is a safe harbor\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        meetAcaMin: {
          description: 'Meets ACA minimum requirements\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
        reimbursementFrequency: {
          description:
            'Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`',
          type: 'string',
          enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
        },
        minEssentialCoverage: {
          description: 'Provides minimum essential coverage\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AddNewEmployeeTrainingRecord = {
  body: {
    type: 'object',
    required: ['completed', 'type'],
    properties: {
      completed: {
        description: 'Completed is a required field and must be in yyyy-mm-dd format.',
        type: 'string',
        format: 'date',
        pattern: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
        examples: ['2016-05-25'],
      },
      cost: {
        properties: { currency: { type: 'string', examples: ['USD'] }, cost: { type: 'number' } },
        type: 'object',
      },
      instructor: { type: 'string', examples: ['Bob Jones'] },
      hours: { type: 'number', examples: ['16'] },
      credits: { type: 'number', examples: ['4'] },
      notes: { type: 'string', examples: ['sample note'] },
      type: {
        description: 'This must be an existing training type id.',
        type: 'integer',
        default: 0,
        examples: ['4'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the employee to add a training record to.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        id: { description: 'The ID of the training record.', type: 'integer' },
        employeeId: {
          description: 'The ID of the employee associated with the training.',
          type: 'integer',
        },
        completed: { description: 'Completed is a date in the format yyyy-mm-dd.', type: 'string' },
        notes: { description: 'Notes left on the training record.', type: 'string' },
        instructor: { description: 'Name of the instructor.', type: 'string' },
        credits: { description: 'What was credited for the training record.', type: 'number' },
        hours: { description: 'Hours associated with the training record.', type: 'number' },
        cost: { description: 'The currency and cost for the training record.', type: 'string' },
        type: { description: 'The training type ID.', type: 'integer' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AddTimetracking = {
  body: {
    title: 'Time Tracking Record',
    type: 'object',
    properties: {
      timeTrackingId: {
        description:
          'A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).',
        type: 'string',
        maximum: 36,
      },
      employeeId: { description: 'The ID of the employee.', type: 'integer' },
      divisionId: {
        description: '[Optional] The ID of the division for the employee.',
        type: 'integer',
      },
      departmentId: {
        description: '[Optional] The ID of the department for the employee.',
        type: 'integer',
      },
      jobTitleId: {
        description: '[Optional] The ID of the job title for the employee.',
        type: 'integer',
      },
      payCode: {
        description: '[Optional] Only necessary if the payroll provider requires a pay code',
        type: 'string',
        maximum: 50,
      },
      dateHoursWorked: {
        description:
          'The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.',
        type: 'string',
      },
      payRate: {
        description:
          '[Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.',
        type: 'number',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      rateType: {
        description:
          'The type of hours - regular or overtime. Please use either "REG" or "OT" here.',
        type: 'string',
      },
      hoursWorked: {
        description: 'The number of hours worked.',
        type: 'number',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      jobCode: { description: '[Optional] A job code.', type: 'integer' },
      jobData: {
        description:
          '[Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.',
        type: 'string',
      },
    },
    required: ['timeTrackingId', 'employeeId', 'dateHoursWorked', 'rateType', 'hoursWorked'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const AddTrainingCategory = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: {
        description: 'Name of the new training category.',
        type: 'string',
        examples: ['My New Training Category'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '201': {
      description: 'The category ID and name',
      type: 'object',
      properties: { id: { type: 'integer' }, name: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AddTrainingType = {
  body: {
    type: 'object',
    required: ['name', 'required'],
    properties: {
      name: {
        description: 'Name of the new training type.',
        type: 'string',
        examples: ['My New Training'],
      },
      frequency: {
        description:
          'The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.',
        type: 'integer',
        default: '12',
        examples: ['12'],
      },
      renewable: {
        description:
          'Renewable is optional but if you are setting it to true you must pass a frequency which is the months between renewals.',
        type: 'boolean',
        examples: [true],
      },
      category: {
        type: 'object',
        description:
          'The category is optional and you can pass either a category id or a category name.',
        properties: {
          id: { type: 'integer', description: 'Category ID', examples: [3] },
          name: { type: 'string', description: 'Category Name', examples: ['First Aid Trainings'] },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock in location',
            examples: [2],
          },
          address: { type: 'string', description: 'Address...', examples: ['123 Main'] },
        },
      },
      required: { description: 'Is this a required training?', type: 'boolean' },
      dueFromHireDate: {
        description:
          'Number of days before the training is due for new hires. Not valid unless training is required.',
        type: 'integer',
        default: '30',
      },
      linkUrl: {
        description: 'Optional URL that can be included with a training.',
        type: 'string',
      },
      description: { description: 'Description for the training.', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        id: { description: 'The ID of the training', type: 'integer' },
        name: { description: 'Name of the training type.', type: 'string' },
        renewable: {
          description: 'If true, training will be renewed based off of frequency.',
          type: 'boolean',
        },
        frequency: {
          description:
            'The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.',
          type: 'integer',
        },
        dueFromHireDate: {
          description:
            'Number of days before the training is due for new hires. Not valid if training is not required.',
          type: 'integer',
        },
        required: { description: 'Is this a required training?', type: 'integer' },
        category: {
          description: 'The category ID and name',
          type: 'object',
          properties: { id: { type: 'integer' }, name: { type: 'string' } },
        },
        linkUrl: {
          description: 'Optional URL that can be included with a training.',
          type: 'string',
        },
        description: { description: 'Description for the training.', type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdjustTimetracking = {
  body: {
    type: 'object',
    properties: {
      timeTrackingId: {
        type: 'string',
        description:
          'A unique identifier for the record. Use this ID to adjust or delete these hours.',
      },
      hoursWorked: {
        type: 'number',
        format: 'float',
        description:
          'The updated number of hours worked. e.g. if Employee A worked 8.0 hours originally and decided they only worked 6.0, please send 6.0 here not -2.0.',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
    },
    required: ['timeTrackingId', 'hoursWorked'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const ApproveEmployeeTimesheets = {
  body: {
    type: 'object',
    required: ['lastChanged', 'timesheets'],
    properties: {
      lastChanged: {
        type: 'integer',
        description: 'UNIX timestamp for last change to timesheet',
        examples: [1624485787],
      },
      timesheets: {
        type: 'array',
        description: 'Array of timesheet objects that contain the timesheet id',
        items: {
          type: 'object',
          properties: {
            timesheetId: {
              type: 'integer',
              description: 'The id of the timesheet',
              examples: [100],
            },
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const BulkRecordTimetracking = {
  body: {
    title: 'Time Tracking Record Bulk',
    type: 'array',
    items: {
      title: 'Time Tracking Record',
      type: 'object',
      properties: {
        timeTrackingId: {
          description:
            'A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).',
          type: 'string',
          maximum: 36,
        },
        employeeId: { description: 'The ID of the employee.', type: 'integer' },
        divisionId: {
          description: '[Optional] The ID of the division for the employee.',
          type: 'integer',
        },
        departmentId: {
          description: '[Optional] The ID of the department for the employee.',
          type: 'integer',
        },
        jobTitleId: {
          description: '[Optional] The ID of the job title for the employee.',
          type: 'integer',
        },
        payCode: {
          description: '[Optional] Only necessary if the payroll provider requires a pay code',
          type: 'string',
          maximum: 50,
        },
        dateHoursWorked: {
          description:
            'The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.',
          type: 'string',
        },
        payRate: {
          description:
            '[Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.',
          type: 'number',
          format: 'float',
          minimum: -3.402823669209385e38,
          maximum: 3.402823669209385e38,
        },
        rateType: {
          description:
            'The type of hours - regular or overtime. Please use either "REG" or "OT" here.',
          type: 'string',
        },
        hoursWorked: {
          description: 'The number of hours worked.',
          type: 'number',
          format: 'float',
          minimum: -3.402823669209385e38,
          maximum: 3.402823669209385e38,
        },
        jobCode: { description: '[Optional] A job code.', type: 'integer' },
        jobData: {
          description:
            '[Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.',
          type: 'string',
        },
      },
      required: ['timeTrackingId', 'employeeId', 'dateHoursWorked', 'rateType', 'hoursWorked'],
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const ClearEmployeeDeposit = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const ClearEmployeePaystub = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the paystub (record) ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const ClearEmployeeUnpaidPaystubs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee id.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        'X-BambooHR-Message': {
          type: 'string',
          description: 'Human readable error to help when debugging, suitable for logging',
        },
      },
    },
    '403': {
      type: 'object',
      properties: {
        'X-BambooHR-Message': {
          type: 'string',
          description: 'Human readable error to help when debugging, suitable for logging',
        },
      },
    },
  },
} as const;
const ClearEmployeeWithholding = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee id.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const ClockIn = {
  body: {
    type: 'object',
    properties: {
      start: {
        type: 'string',
        description: 'The start time for the clock in. In 24 hour format HH:MM',
        examples: ['13:00'],
      },
      timezone: {
        type: 'string',
        description: 'The timezone associated with the clock in.',
        examples: ['America/Denver'],
      },
      note: {
        type: 'string',
        description: 'The note associated with the clock in',
        examples: ['Back from lunch.'],
      },
      projectId: {
        type: 'integer',
        description: 'The id of the project associated with the clock in',
        examples: ['3'],
      },
      taskId: {
        type: 'integer',
        description: 'The id of the task associated with the clock in',
        examples: ['2'],
      },
      clockInLocation: {
        type: 'object',
        properties: {
          latitude: {
            type: 'number',
            format: 'double',
            examples: [40.332729],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          longitude: {
            type: 'number',
            format: 'double',
            examples: [-111.729235],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock in location',
            examples: [2],
          },
          address: { type: 'string', examples: ['123 Main'] },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{employeeId} is id of the employee clocking out',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const ClockInData = {
  body: {
    type: 'object',
    properties: {
      start: {
        type: 'string',
        description: 'The start time for the clock in. In 24 hour format HH:MM',
        examples: ['13:00'],
      },
      timezone: {
        type: 'string',
        description: 'The timezone associated with the clock in.',
        examples: ['America/Denver'],
      },
      note: {
        type: 'string',
        description: 'The note associated with the clock in',
        examples: ['Back from lunch.'],
      },
      projectId: {
        type: 'integer',
        description: 'The id of the project associated with the clock in',
        examples: ['3'],
      },
      taskId: {
        type: 'integer',
        description: 'The id of the task associated with the clock in',
        examples: ['2'],
      },
      clockInLocation: {
        type: 'object',
        properties: {
          latitude: {
            type: 'number',
            format: 'double',
            examples: [40.332729],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          longitude: {
            type: 'number',
            format: 'double',
            examples: [-111.729235],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock in location',
            examples: [2],
          },
          address: { type: 'string', examples: ['123 Main'] },
        },
      },
      clockOutLocation: {
        type: 'object',
        properties: {
          latitude: {
            type: 'number',
            format: 'double',
            examples: [40.332729],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          longitude: {
            type: 'number',
            format: 'double',
            examples: [-111.729235],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock in location',
            examples: [2],
          },
          address: { type: 'string', examples: ['123 Main'] },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of the employee to whom the projects belong.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const ClockOut = {
  body: {
    type: 'object',
    properties: {
      clockOutLocation: {
        type: 'object',
        properties: {
          latitude: {
            type: 'number',
            format: 'double',
            examples: [40.332729],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          longitude: {
            type: 'number',
            format: 'double',
            examples: [-111.729235],
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
          },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock out location',
            examples: [2],
          },
          address: { type: 'string', examples: ['123 Main'] },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{employeeId} is id of the employee clocking out',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const ClockOutAndApproveEmployeeTimesheets = {
  body: {
    type: 'object',
    properties: {
      clockOuts: {
        type: 'array',
        description: 'Array of clock out information',
        items: {
          type: 'object',
          required: ['timesheetId', 'end', 'date'],
          properties: {
            timesheetId: {
              type: 'integer',
              description: 'The id of the timesheet',
              examples: [100],
            },
            end: {
              type: 'string',
              description: '24 hour format (hh:mm) for clock out time',
              examples: ['17:30'],
            },
            date: {
              type: 'string',
              description: 'Date of the clock out. Date string format (YYYY-MM-DD)',
              examples: ['2021-04-23'],
            },
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const ClockOutEmployeeAtSpecificTime = {
  body: {
    type: 'object',
    properties: {
      datetime: {
        type: 'string',
        description: 'Date time for clock out in atom format. ',
        examples: ['2020-12-16T17:28:00-05:00'],
      },
      timezone: {
        type: 'string',
        description: 'Timezone of the time entry',
        examples: ['America/Denver'],
      },
      employeeId: {
        type: 'integer',
        description: 'The employeeId for the time entry.',
        examples: [40342],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of the employee to whom the projects belong.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const DeleteClockEntries = {
  body: {
    type: 'object',
    properties: {
      clockEntryIds: { type: 'array', items: { type: 'integer' }, examples: [10, 11, 12] },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const DeleteCompanyBenefit = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the company benefit ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const DeleteCompanyFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the company file being deleted.',
          },
        },
        required: ['companyDomain', 'fileId'],
      },
    ],
  },
} as const;
const DeleteEmployeeFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the employee file being deleted.',
          },
        },
        required: ['companyDomain', 'id', 'fileId'],
      },
    ],
  },
} as const;
const DeleteEmployeeTableRowV1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
          rowId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Row ID',
          },
        },
        required: ['companyDomain', 'id', 'table', 'rowId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { sucess: { type: 'boolean' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteEmployeeTrainingRecord = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeTrainingRecordId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training record to delete.',
          },
        },
        required: ['companyDomain', 'employeeTrainingRecordId'],
      },
    ],
  },
} as const;
const DeleteGoal = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
} as const;
const DeleteGoalComment = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
          commentId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'commentId is the ID of a specific comment for the specified goal.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId', 'commentId'],
      },
    ],
  },
} as const;
const DeleteTimetracking = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the time tracking ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const DeleteTrainingCategory = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          trainingCategoryId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training category to delete.',
          },
        },
        required: ['companyDomain', 'trainingCategoryId'],
      },
    ],
  },
} as const;
const DeleteTrainingType = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          trainingTypeId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training type to delete.',
          },
        },
        required: ['companyDomain', 'trainingTypeId'],
      },
    ],
  },
} as const;
const DeleteWebhook = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is an webhook ID that is associated with the User API key.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '403': {
      title: 'Webhook 403 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['You do not have access to webhook ID: 5'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      title: 'Webhook 404 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['No webhook was found with ID: 7.'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const EstimateFutureTimeOffBalances = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
      {
        type: 'object',
        properties: {
          end: {
            type: 'string',
            format: 'date-time',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['end'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetAListOfUsers = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const GetAListOfWhoSOut = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          start: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A date in the form YYYY-MM-DD - defaults to the current date.',
          },
          end: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A date in the form YYYY-MM-DD - defaults to 14 days from the start date.',
          },
        },
        required: [],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetApplicationDetails = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          applicationId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the application to look up details.',
          },
        },
        required: ['companyDomain', 'applicationId'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const GetApplications = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          page: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The page number',
          },
          jobId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A Job Id to limit results to',
          },
          applicationStatusId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Application status id to filter by.',
          },
          applicationStatus: {
            type: 'string',
            enum: ['ALL', 'ALL_ACTIVE', 'NEW', 'ACTIVE', 'INACTIVE', 'HIRED'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A list of application status groups to filter by.',
          },
          jobStatusGroups: {
            type: 'string',
            enum: [
              'ALL',
              'DRAFT_AND_OPEN',
              'Open',
              'Filled',
              'Draft',
              'Deleted',
              'On Hold',
              'Canceled',
            ],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A list of position status groups to filter by.',
          },
          searchString: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A general search criteria by which to find applications.',
          },
          sortBy: {
            type: 'string',
            enum: [
              'first_name',
              'job_title',
              'rating',
              'phone',
              'status',
              'last_updated',
              'created_date',
            ],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A specific field to sort the results by.',
          },
          sortOrder: {
            type: 'string',
            enum: ['ASC', 'DESC'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Order by which to sort results.',
          },
        },
        required: [],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const GetBenefitCoverage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit coverage ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitCoverages = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitDeductionTypes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const GetBenefitGroup = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit group ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit group employee ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupEmployees = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupPlan = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit group plan ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupPlanCost = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit group plan cost ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupPlanCosts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroupPlans = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitGroups = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitPlan = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit plan ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitPlanCoverage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit plan coverage ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitPlanCoverages = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetBenefitPlans = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetCanCreateGoal = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const GetChangedEmployeeIds = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          since: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'URL encoded iso8601 timestamp',
          },
          type: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Use one of these in the {type} variable in the URL: "inserted", "updated", "deleted"',
          },
        },
        required: ['since'],
      },
    ],
  },
} as const;
const GetChangedEmployeeTableData = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
        },
        required: ['companyDomain', 'table'],
      },
      {
        type: 'object',
        properties: {
          since: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'URL encoded iso8601 timestamp',
          },
        },
        required: ['since'],
      },
    ],
  },
} as const;
const GetClockEntry = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of employee to whom the clock entry belongs.',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'the id to whom the clock entry belongs.',
          },
        },
        required: ['companyDomain', 'employeeId', 'id'],
      },
    ],
  },
} as const;
const GetCompanyBenefit = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the company benefit ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '200': {
      title: 'Company Benefit',
      type: 'object',
      properties: {
        name: { description: 'Name', type: 'string' },
        benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
        benefitType: {
          description:
            'Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`',
          type: 'string',
          enum: [
            'health',
            'dental',
            'vision',
            'retirement',
            'hsa',
            'flex',
            'life',
            'disability',
            'reimbursement',
            'supplemental',
            'other',
          ],
        },
        deductionTypeId: { description: 'Deduction type ID', type: 'integer' },
        startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
        endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
        description: { description: 'Description', type: 'string' },
        planUrl: { description: 'Plan url', type: 'string' },
        ssoLoginUrl: { description: 'SSO login url', type: 'string' },
        ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
        safeHarbor: {
          description: 'Is a safe harbor\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        meetAcaMin: {
          description: 'Meets ACA minimum requirements\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
        reimbursementFrequency: {
          description:
            'Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`',
          type: 'string',
          enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
        },
        minEssentialCoverage: {
          description: 'Provides minimum essential coverage\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetCompanyBenefitTypes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        title: 'Company Benefit Type',
        type: 'object',
        properties: {
          name: { description: 'The name of the company benefit plan.', type: 'string' },
          slug: {
            description: 'The unique identifier for the company benefit plan.',
            type: 'string',
          },
          canBeAcaPlan: {
            description: 'Can the company benefit plan be an ACA plan.',
            type: 'boolean',
          },
          canCoExistEnrollment: {
            description: 'Can the company benefit plan co-exist with an enrollment plan.',
            type: 'boolean',
          },
          isReimbursementPlan: {
            description: 'Is the company benefit plan a reimbursement plan.',
            type: 'boolean',
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetCompanyBenefits = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        title: 'Company Benefit',
        type: 'object',
        properties: {
          name: { description: 'Name', type: 'string' },
          benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
          benefitType: {
            description:
              'Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`',
            type: 'string',
            enum: [
              'health',
              'dental',
              'vision',
              'retirement',
              'hsa',
              'flex',
              'life',
              'disability',
              'reimbursement',
              'supplemental',
              'other',
            ],
          },
          deductionTypeId: { description: 'Deduction type ID', type: 'integer' },
          startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
          endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
          description: { description: 'Description', type: 'string' },
          planUrl: { description: 'Plan url', type: 'string' },
          ssoLoginUrl: { description: 'SSO login url', type: 'string' },
          ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
          safeHarbor: {
            description: 'Is a safe harbor\n\n`yes` `no`',
            type: 'string',
            enum: ['yes', 'no', null],
          },
          meetAcaMin: {
            description: 'Meets ACA minimum requirements\n\n`yes` `no`',
            type: 'string',
            enum: ['yes', 'no', null],
          },
          reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
          reimbursementFrequency: {
            description:
              'Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`',
            type: 'string',
            enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
          },
          minEssentialCoverage: {
            description: 'Provides minimum essential coverage\n\n`yes` `no`',
            type: 'string',
            enum: ['yes', 'no', null],
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetCompanyFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the company file being retrieved.',
          },
        },
        required: ['companyDomain', 'fileId'],
      },
    ],
  },
} as const;
const GetCompanyReport = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is a report ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON',
          },
          fd: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'yes=apply standard duplicate field filtering, no=return the raw results with no duplicate filtering. Default value is "yes"',
          },
          onlyCurrent: {
            type: 'boolean',
            default: true,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Limits the report to only current employees. Setting to false will include future-dated employees in the report.',
          },
        },
        required: ['format'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetDailyEntry = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of employee to whom the daily entry belongs.',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'the id to whom the daily entry belongs.',
          },
        },
        required: ['companyDomain', 'employeeId', 'id'],
      },
    ],
  },
} as const;
const GetEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          fields: {
            type: 'string',
            default: 'firstName,lastName',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{fields} is a comma separated list of values taken from the official list of field names. ',
          },
          onlyCurrent: {
            type: 'boolean',
            default: true,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Setting to false will return future dated values from history table fields.',
          },
        },
        required: ['fields'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { id: { type: 'string', description: 'The ID of the employee' } },
      additionalProperties: true,
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetEmployeeBenefit = {
  body: {
    title: 'Employee Benefit Filters',
    type: 'object',
    properties: {
      filters: {
        type: 'object',
        description: 'At least one filter is required',
        properties: {
          employeeId: { description: 'Employee Id', type: 'integer' },
          companyBenefitId: { description: 'Company Benefit Id', type: 'integer' },
          enrollmentStatusEffectiveDate: {
            description: 'Enrollment Status Effective Date',
            type: 'string',
            format: 'date',
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        title: 'Employee Benefit',
        type: 'object',
        properties: {
          employeeId: { description: 'Employee ID', type: 'integer' },
          companyBenefitId: { description: 'Company benefit ID', type: 'integer' },
          companyBenefitName: { description: 'Company benefit name', type: 'string' },
          coverageLevel: { description: 'Coverage level', type: 'string' },
          deductionEndDate: { description: 'Deduction end date', type: 'string', format: 'date' },
          deductionStartDate: {
            description: 'Deduction start date',
            type: 'string',
            format: 'date',
          },
          enrollmentStatus: {
            description:
              'Enrollment status\n\n`Eligible` `Enrolled` `Waived` `Withdrawn` `Terminated` `Ineligible`',
            type: 'string',
            enum: ['Eligible', 'Enrolled', 'Waived', 'Withdrawn', 'Terminated', 'Ineligible'],
          },
          effectiveDate: {
            description: 'Enrollment status effective date',
            type: 'string',
            format: 'date',
          },
          currencyCode: { description: 'Currency code', type: 'string' },
          employeeAmount: { description: 'Employee amount', type: 'number' },
          employeeAmountType: { description: 'Employee amount type', type: 'string' },
          employeePercentBasedOn: { description: 'Employee percent based on', type: 'string' },
          employeeCapAmount: { description: 'Employee cap amount', type: 'number' },
          employeeCapAmountType: { description: 'Employee cap amount type', type: 'string' },
          employeeAnnualMax: { description: 'Employee annual max', type: 'number' },
          companyAmount: { description: 'Company amount', type: 'number' },
          companyAmountType: { description: 'Company amount type', type: 'string' },
          companyPercentBasedOn: { description: 'Company percent based on', type: 'string' },
          companyCapAmount: { description: 'Company cap amount', type: 'number' },
          companyCapAmountType: { description: 'Company cap amount type', type: 'string' },
          companyAnnualMax: { description: 'Company annual max', type: 'number' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetEmployeeDeductionsByPlan = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit plan ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetEmployeeDependent = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee dependent ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetEmployeeDependents = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          employeeid: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{employeeid} is the employee ID. Supplying this ID limits the response to the specific employee.',
          },
        },
        required: ['employeeid'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetEmployeeDepositAccounts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const GetEmployeeFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the employee file being retrieved.',
          },
        },
        required: ['companyDomain', 'id', 'fileId'],
      },
    ],
  },
} as const;
const GetEmployeePaystub = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the paystub (record) ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const GetEmployeePhoto = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID for the employee you are getting the photo for.',
          },
          size: {
            type: 'string',
            enum: ['original', 'large', 'medium', 'xs', 'tiny'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Photo size',
          },
        },
        required: ['companyDomain', 'employeeId', 'size'],
      },
    ],
  },
} as const;
const GetEmployeeTableRow = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
        },
        required: ['companyDomain', 'id', 'table'],
      },
    ],
  },
} as const;
const GetEmployeeTimesheet = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of employee to whom the timesheet belongs.',
          },
          timesheetId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'timesheetId is the id to whom the timesheet belongs.',
          },
        },
        required: ['companyDomain', 'employeeId', 'timesheetId'],
      },
    ],
  },
} as const;
const GetEmployeeUnpaidPaystubs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const GetEmployeeWithholdings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const GetEmployeesDirectory = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { id: { type: 'string', description: 'The ID of the employee' } },
      additionalProperties: true,
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalAggregate = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the Goal ID used to generate the aggregate information.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        goal: {
          type: 'object',
          description: 'The selected goal object',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
        canAlign: {
          type: 'boolean',
          description: 'The selected user can align goals with other users.',
          examples: ['false'],
        },
        canCreateGoals: {
          type: 'boolean',
          description: 'The selected user can create a goal.',
          examples: ['true'],
        },
        alignsWithOptions: {
          type: 'array',
          description: 'All possible goals that this goal could be aligned with.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                description: 'Id of the goal that the selected goal could be aligned with.',
                examples: ['8'],
              },
              title: {
                type: 'string',
                description: 'Title of the goal that the selected goal could be aligned with.',
                examples: ['Get all team goals for January complete.'],
              },
            },
          },
        },
        comments: {
          type: 'array',
          description: 'Comments linked to selected goal.',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', description: 'Id of the comment.', examples: ['2'] },
              authorUserId: {
                type: 'integer',
                description: 'Id of the author of the comment.',
                examples: ['1534'],
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time that the comment was created.',
                examples: ['2022-05-23T17:32:42Z'],
              },
              text: {
                type: 'string',
                description: 'The actual text of the comment.',
                examples: ['This goal is taking longer than I thought.'],
              },
              canEdit: {
                type: 'boolean',
                description: 'Can the comment be edited.',
                examples: ['ture'],
              },
              canDelete: {
                type: 'boolean',
                description: 'Can the comment be deleted.',
                examples: ['ture'],
              },
            },
          },
        },
        persons: {
          type: 'array',
          description: 'A list of people with access to the goal.',
          items: {
            type: 'object',
            properties: {
              employeeId: {
                type: 'integer',
                description: 'The id of this employee.',
                examples: ['4353'],
              },
              userId: {
                type: 'integer',
                description: 'The user id of the person if applicable.',
                examples: ['45'],
              },
              displayFirstName: {
                type: 'string',
                description: 'First name of the person.',
                examples: ['Tim'],
              },
              lastName: {
                type: 'string',
                description: 'Last name of the person.',
                examples: ['Johnson'],
              },
              photoUrl: {
                type: 'string',
                description: 'url of the user profile image.',
                examples: ['https://tim.johnson.jpg'],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalComments = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
} as const;
const GetGoals = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID to whom the goals are assigned.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
      {
        type: 'object',
        properties: {
          filter: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'A filter that can be applied to only show the goals that are in a certain state.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        goals: {
          type: 'array',
          description: 'All goals of the selected employee',
          items: {
            type: 'object',
            description: 'An individual goal',
            properties: {
              id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
              title: {
                type: 'string',
                description: 'Title of the goal.',
                examples: ['Complete Documentation Epic'],
              },
              description: {
                type: 'string',
                description: 'A description of the goal.',
                examples: ['Document every endpoint for the goals API.'],
              },
              percentComplete: {
                type: 'integer',
                description: 'A percentage (1-100) that denotes how complete the goal is.',
                examples: ['100'],
              },
              alignsWithOptionId: { type: 'integer' },
              sharedWithEmployeeIds: {
                type: 'array',
                description: 'Ids of the employees that have access to this goal.',
                items: { type: 'integer', examples: ['89'] },
              },
              dueDate: {
                type: 'string',
                format: 'date',
                description: 'The due date of the goal.',
                examples: ['2021-12-17'],
              },
              completionDate: {
                type: 'string',
                format: 'date',
                description: 'The date the goal was completed.',
                examples: ['2021-12-16'],
              },
              status: {
                type: 'string',
                description: 'The status of the goal.',
                examples: ['in_progress'],
              },
              milestones: {
                type: 'array',
                description:
                  'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
                items: {
                  type: 'object',
                  description: 'An individual milestone.',
                  properties: {
                    id: {
                      type: 'integer',
                      description: 'The id of the milestone.',
                      examples: ['2'],
                    },
                    employeeGoalId: {
                      type: 'integer',
                      description: 'The id of the goal which encompasses this milestone.',
                      examples: ['12'],
                    },
                    title: {
                      type: 'string',
                      description: 'The title of the milestone.',
                      examples: ['Sell 15 Doohickeys'],
                    },
                    currentValue: {
                      type: 'number',
                      description:
                        'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['7'],
                    },
                    startValue: {
                      type: 'number',
                      description:
                        'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['0'],
                    },
                    endValue: {
                      type: 'number',
                      description:
                        'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['15'],
                    },
                    completedDateTime: {
                      type: 'string',
                      format: 'Date-Time',
                      description:
                        'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                      examples: ['2024-07-12T14:50:46Z'],
                    },
                    lastUpdateDateDateTime: {
                      type: 'string',
                      format: 'Date-Time',
                      description: 'The date and time in which the goal was last updated.',
                      examples: ['2023-07-12T14:50:46Z'],
                    },
                    lastUpdateUserId: {
                      type: 'integer',
                      description: 'The ID of the user who last updated this milestone.',
                      examples: ['24'],
                    },
                  },
                },
              },
              actions: {
                type: 'object',
                description:
                  'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
                properties: {
                  canEditGoalProgressBar: {
                    type: 'boolean',
                    description: 'Can the user edit the progress bar of this goal.',
                    examples: ['false'],
                  },
                  canEditGoalMilestoneProgressBar: {
                    type: 'boolean',
                    description: 'can the user edit the progress of a milestone in this goal.',
                    examples: ['true'],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsAggregateV1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'employeeId is the employee ID used to generate the aggregate information.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        canAlign: {
          description: 'The selected user can align goals with other users.',
          type: 'boolean',
          examples: ['false'],
        },
        canCreateGoals: {
          description: 'The selected user can create a goal.',
          type: 'boolean',
          examples: ['true'],
        },
        filters: {
          type: 'array',
          description: 'All the goals of the user seperated by filter.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of the filter.',
                examples: ['status-inProgress'],
              },
              name: {
                type: 'string',
                description: 'The name of the filter.',
                examples: ['In Progress'],
              },
              count: {
                type: 'integer',
                description: 'Count of the goals with that filter.',
                examples: ['3'],
              },
            },
          },
        },
        selectedFilter: {
          type: 'string',
          description: 'The id of the current selected filter.',
          examples: ['status-inProgress'],
        },
        goals: {
          type: 'array',
          description: 'All goals in selected filter.',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
              title: {
                type: 'string',
                description: 'Title of the goal.',
                examples: ['Complete Documentation Epic'],
              },
              description: {
                type: 'string',
                description: 'A description of the goal.',
                examples: ['Document every endpoint for the goals API.'],
              },
              percentComplete: {
                type: 'integer',
                description: 'A percentage (1-100) that denotes how complete the goal is.',
                examples: ['100'],
              },
              alignsWithOptionId: { type: 'integer' },
              sharedWithEmployeeIds: {
                type: 'array',
                description: 'Ids of the employees that have access to this goal.',
                items: { type: 'integer', examples: ['89'] },
              },
              dueDate: {
                type: 'string',
                format: 'date',
                description: 'The due date of the goal.',
                examples: ['2021-12-17'],
              },
              completionDate: {
                type: 'string',
                format: 'date',
                description: 'The date the goal was completed.',
                examples: ['2021-12-16'],
              },
              status: {
                type: 'string',
                description: 'The status of the goal.',
                examples: ['in_progress'],
              },
            },
          },
        },
        persons: {
          type: 'array',
          description: 'A list of people with access to the goal.',
          items: {
            type: 'object',
            properties: {
              employeeId: {
                type: 'integer',
                description: 'The id of this employee.',
                examples: ['4353'],
              },
              userId: {
                type: 'integer',
                description: 'The user id of the person if applicable.',
                examples: ['45'],
              },
              displayFirstName: {
                type: 'string',
                description: 'First name of the person.',
                examples: ['Tim'],
              },
              lastName: {
                type: 'string',
                description: 'Last name of the person.',
                examples: ['Johnson'],
              },
              photoUrl: {
                type: 'string',
                description: 'url of the user profile image.',
                examples: ['https://tim.johnson.jpg'],
              },
            },
          },
        },
        comments: {
          type: 'array',
          description: 'A list of how many comments belong to each goal.',
          items: {
            type: 'object',
            properties: {
              goalId: {
                type: 'integer',
                description: 'The goalId that the comments are linked to.',
                examples: ['25'],
              },
              commentCount: {
                type: 'integer',
                description: 'How many comments are linked to the goal',
                examples: ['2'],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsAggregateV11 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'employeeId is the employee ID used to generate the aggregate information.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        canAlign: {
          description: 'The selected user can align goals with other users.',
          type: 'boolean',
          examples: ['false'],
        },
        canCreateGoals: {
          description: 'The selected user can create a goal.',
          type: 'boolean',
          examples: ['true'],
        },
        filters: {
          type: 'array',
          description: 'All the goals of the user seperated by filter.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of the filter.',
                examples: ['status-inProgress'],
              },
              name: {
                type: 'string',
                description: 'The name of the filter.',
                examples: ['In Progress'],
              },
              count: {
                type: 'integer',
                description: 'Count of the goals with that filter.',
                examples: ['3'],
              },
              actions: {
                type: 'object',
                description: 'What actions a user can preform on this kind of goal.',
                properties: {
                  canCloseGoal: {
                    type: 'boolean',
                    description: 'Can a goal be closed in this state.',
                    examples: ['true'],
                  },
                  canEditGoal: {
                    type: 'boolean',
                    description: 'Can a goal be edited in this state.',
                    examples: ['true'],
                  },
                  canEditGoalProgressBar: {
                    type: 'boolean',
                    description: 'Can a goal progress bar be edited in this state.',
                    examples: ['true'],
                  },
                  canReopenGoal: {
                    type: 'boolean',
                    description: 'Can a goal be reopened in this state.',
                    examples: ['true'],
                  },
                  canShareGoal: {
                    type: 'boolean',
                    description: 'Can a goal be shared in this state.',
                    examples: ['true'],
                  },
                },
              },
            },
          },
        },
        selectedFilter: {
          type: 'string',
          description: 'The id of the current selected filter.',
          examples: ['status-inProgress'],
        },
        goals: {
          type: 'array',
          description: 'All goals in selected filter.',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
              title: {
                type: 'string',
                description: 'Title of the goal.',
                examples: ['Complete Documentation Epic'],
              },
              description: {
                type: 'string',
                description: 'A description of the goal.',
                examples: ['Document every endpoint for the goals API.'],
              },
              percentComplete: {
                type: 'integer',
                description: 'A percentage (1-100) that denotes how complete the goal is.',
                examples: ['100'],
              },
              alignsWithOptionId: { type: 'integer' },
              sharedWithEmployeeIds: {
                type: 'array',
                description: 'Ids of the employees that have access to this goal.',
                items: { type: 'integer', examples: ['89'] },
              },
              dueDate: {
                type: 'string',
                format: 'date',
                description: 'The due date of the goal.',
                examples: ['2021-12-17'],
              },
              completionDate: {
                type: 'string',
                format: 'date',
                description: 'The date the goal was completed.',
                examples: ['2021-12-16'],
              },
              status: {
                type: 'string',
                description: 'The status of the goal.',
                examples: ['in_progress'],
              },
            },
          },
        },
        persons: {
          type: 'array',
          description: 'A list of people with access to the goal.',
          items: {
            type: 'object',
            properties: {
              employeeId: {
                type: 'integer',
                description: 'The id of this employee.',
                examples: ['4353'],
              },
              userId: {
                type: 'integer',
                description: 'The user id of the person if applicable.',
                examples: ['45'],
              },
              displayFirstName: {
                type: 'string',
                description: 'First name of the person.',
                examples: ['Tim'],
              },
              lastName: {
                type: 'string',
                description: 'Last name of the person.',
                examples: ['Johnson'],
              },
              photoUrl: {
                type: 'string',
                description: 'url of the user profile image.',
                examples: ['https://tim.johnson.jpg'],
              },
            },
          },
        },
        comments: {
          type: 'array',
          description: 'A list of how many comments belong to each goal.',
          items: {
            type: 'object',
            properties: {
              goalId: {
                type: 'integer',
                description: 'The goalId that the comments are linked to.',
                examples: ['25'],
              },
              commentCount: {
                type: 'integer',
                description: 'How many comments are linked to the goal',
                examples: ['2'],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsAggregateV12 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'employeeId is the employee ID used to generate the aggregate information.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        canAlign: {
          description: 'The selected user can align goals with other users.',
          type: 'boolean',
          examples: ['false'],
        },
        canCreateGoals: {
          description: 'The selected user can create a goal.',
          type: 'boolean',
          examples: ['true'],
        },
        filters: {
          type: 'array',
          description: 'All the goals of the user seperated by filter.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of the filter.',
                examples: ['status-inProgress'],
              },
              name: {
                type: 'string',
                description: 'The name of the filter.',
                examples: ['In Progress'],
              },
              count: {
                type: 'integer',
                description: 'Count of the goals with that filter.',
                examples: ['3'],
              },
              actions: {
                type: 'object',
                description: 'What actions a user can preform on this kind of goal.',
                properties: {
                  canCloseGoal: {
                    type: 'boolean',
                    description: 'Can a goal be closed in this state.',
                    examples: ['true'],
                  },
                  canEditGoal: {
                    type: 'boolean',
                    description: 'Can a goal be edited in this state.',
                    examples: ['true'],
                  },
                  canEditGoalProgressBar: {
                    type: 'boolean',
                    description: 'Can a goal progress bar be edited in this state.',
                    examples: ['true'],
                  },
                  canReopenGoal: {
                    type: 'boolean',
                    description: 'Can a goal be reopened in this state.',
                    examples: ['true'],
                  },
                  canShareGoal: {
                    type: 'boolean',
                    description: 'Can a goal be shared in this state.',
                    examples: ['true'],
                  },
                },
              },
            },
          },
        },
        selectedFilter: {
          type: 'string',
          description: 'The id of the current selected filter.',
          examples: ['status-inProgress'],
        },
        goals: {
          type: 'array',
          description: 'All goals in selected filter.',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
              title: {
                type: 'string',
                description: 'Title of the goal.',
                examples: ['Complete Documentation Epic'],
              },
              description: {
                type: 'string',
                description: 'A description of the goal.',
                examples: ['Document every endpoint for the goals API.'],
              },
              percentComplete: {
                type: 'integer',
                description: 'A percentage (1-100) that denotes how complete the goal is.',
                examples: ['100'],
              },
              alignsWithOptionId: { type: 'integer' },
              sharedWithEmployeeIds: {
                type: 'array',
                description: 'Ids of the employees that have access to this goal.',
                items: { type: 'integer', examples: ['89'] },
              },
              dueDate: {
                type: 'string',
                format: 'date',
                description: 'The due date of the goal.',
                examples: ['2021-12-17'],
              },
              completionDate: {
                type: 'string',
                format: 'date',
                description: 'The date the goal was completed.',
                examples: ['2021-12-16'],
              },
              status: {
                type: 'string',
                description: 'The status of the goal.',
                examples: ['in_progress'],
              },
              milestones: {
                type: 'array',
                description:
                  'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
                items: {
                  type: 'object',
                  description: 'An individual milestone.',
                  properties: {
                    id: {
                      type: 'integer',
                      description: 'The id of the milestone.',
                      examples: ['2'],
                    },
                    employeeGoalId: {
                      type: 'integer',
                      description: 'The id of the goal which encompasses this milestone.',
                      examples: ['12'],
                    },
                    title: {
                      type: 'string',
                      description: 'The title of the milestone.',
                      examples: ['Sell 15 Doohickeys'],
                    },
                    currentValue: {
                      type: 'number',
                      description:
                        'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['7'],
                    },
                    startValue: {
                      type: 'number',
                      description:
                        'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['0'],
                    },
                    endValue: {
                      type: 'number',
                      description:
                        'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                      examples: ['15'],
                    },
                    completedDateTime: {
                      type: 'string',
                      format: 'Date-Time',
                      description:
                        'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                      examples: ['2024-07-12T14:50:46Z'],
                    },
                    lastUpdateDateDateTime: {
                      type: 'string',
                      format: 'Date-Time',
                      description: 'The date and time in which the goal was last updated.',
                      examples: ['2023-07-12T14:50:46Z'],
                    },
                    lastUpdateUserId: {
                      type: 'integer',
                      description: 'The ID of the user who last updated this milestone.',
                      examples: ['24'],
                    },
                  },
                },
              },
              actions: {
                type: 'object',
                description:
                  'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
                properties: {
                  canEditGoalProgressBar: {
                    type: 'boolean',
                    description: 'Can the user edit the progress bar of this goal.',
                    examples: ['false'],
                  },
                  canEditGoalMilestoneProgressBar: {
                    type: 'boolean',
                    description: 'can the user edit the progress of a milestone in this goal.',
                    examples: ['true'],
                  },
                },
              },
            },
          },
        },
        persons: {
          type: 'array',
          description: 'A list of people with access to the goal.',
          items: {
            type: 'object',
            properties: {
              employeeId: {
                type: 'integer',
                description: 'The id of this employee.',
                examples: ['4353'],
              },
              userId: {
                type: 'integer',
                description: 'The user id of the person if applicable.',
                examples: ['45'],
              },
              displayFirstName: {
                type: 'string',
                description: 'First name of the person.',
                examples: ['Tim'],
              },
              lastName: {
                type: 'string',
                description: 'Last name of the person.',
                examples: ['Johnson'],
              },
              photoUrl: {
                type: 'string',
                description: 'url of the user profile image.',
                examples: ['https://tim.johnson.jpg'],
              },
            },
          },
        },
        comments: {
          type: 'array',
          description: 'A list of how many comments belong to each goal.',
          items: {
            type: 'object',
            properties: {
              goalId: {
                type: 'integer',
                description: 'The goalId that the comments are linked to.',
                examples: ['25'],
              },
              commentCount: {
                type: 'integer',
                description: 'How many comments are linked to the goal',
                examples: ['2'],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsAlignmentOptions = {
  body: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID to get alignable goal options for.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const GetGoalsFiltersV1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID to whom the goals are assigned.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        filters: {
          type: 'array',
          description: 'All the goals of the user seperated by filter.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of the filter.',
                examples: ['status-inProgress'],
              },
              name: {
                type: 'string',
                description: 'The name of the filter.',
                examples: ['In Progress'],
              },
              count: {
                type: 'integer',
                description: 'Count of the goals with that filter.',
                examples: ['3'],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsFiltersV11 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID to whom the goals are assigned.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        filters: {
          type: 'array',
          description: 'All the goals of the user seperated by filter.',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of the filter.',
                examples: ['status-inProgress'],
              },
              name: {
                type: 'string',
                description: 'The name of the filter.',
                examples: ['In Progress'],
              },
              count: {
                type: 'integer',
                description: 'Count of the goals with that filter.',
                examples: ['3'],
              },
              actions: {
                type: 'object',
                description: 'What actions a user can preform on this kind of goal.',
                properties: {
                  canCloseGoal: {
                    type: 'boolean',
                    description: 'Can a goal be closed in this state.',
                    examples: ['true'],
                  },
                  canEditGoal: {
                    type: 'boolean',
                    description: 'Can a goal be edited in this state.',
                    examples: ['true'],
                  },
                  canEditGoalProgressBar: {
                    type: 'boolean',
                    description: 'Can a goal progress bar be edited in this state.',
                    examples: ['true'],
                  },
                  canReopenGoal: {
                    type: 'boolean',
                    description: 'Can a goal be reopened in this state.',
                    examples: ['true'],
                  },
                  canShareGoal: {
                    type: 'boolean',
                    description: 'Can a goal be shared in this state.',
                    examples: ['true'],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetGoalsShareOptions = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID to get sharing options for.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
      {
        type: 'object',
        properties: {
          search: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The search term used to filter employees returned. Will search name, employee ID and email.',
          },
          limit: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Limit will restrict results to specified number.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetJobSummaries = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          statusGroups: {
            type: 'string',
            enum: [
              'ALL',
              'DRAFT_AND_OPEN',
              'Open',
              'Filled',
              'Draft',
              'Deleted',
              'On Hold',
              'Canceled',
            ],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A list of status groups to filter positions by.',
          },
          sortBy: {
            type: 'string',
            enum: ['count', 'title', 'lead', 'created', 'status'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A specific field to sort the results by.',
          },
          sortOrder: {
            type: 'string',
            enum: ['ASC', 'DESC'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Order by which to sort results.',
          },
        },
        required: [],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const GetMonitorFields = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fields: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              alias: { type: 'string' },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetPayrollDeductionsForEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetPlanDeductionsByEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetStatuses = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const GetTimeOffPolicies = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetTimeOffTypes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          mode: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "set to 'request' to get a list of all time off types with which this user can create a time off request. The default is to return the list of time off types the user has permissions on. This distinction is important, as employees can request time off for types that they don't have permission to view balances and requests for.",
          },
        },
        required: [],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const GetTimesheets = {
  body: {
    type: 'object',
    required: ['timesheets'],
    properties: {
      timesheets: {
        type: 'string',
        description: 'Comma separated list of timesheet ids',
        examples: ['10, 11, 12'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const GetTimetrackingRecord = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the time tracking ID used to originally create the record.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const GetWebhook = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The webhook ID to display details about.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '200': {
      title: 'Add Webhook Response',
      type: 'object',
      properties: {
        id: { description: 'The id of the webhook.', type: 'integer', examples: ['4'] },
        name: {
          description: 'The name of the webhook.',
          type: 'string',
          maxLength: 1024,
          examples: ['Example Webhook'],
        },
        created: {
          description: 'timestamp of creation',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        lastSent: {
          description: 'timestamp of last webhook sent',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        monitorFields: {
          description: 'A list of fields to monitor.',
          type: 'array',
          items: { type: 'string' },
          examples: ['firstName', 'lastName'],
        },
        postFields: {
          description:
            'A list of fields to post to the webhook url. Field ID or alias: external name',
          type: 'object',
          additionalProperties: { description: 'External name to post field to', type: 'string' },
        },
        url: {
          description: 'The url the webhook should send data to.',
          type: 'string',
          examples: ['https://www.example.com'],
        },
        format: {
          description: 'The format the webhook should use (json, form-encoded).',
          type: 'string',
          examples: ['json'],
        },
        frequency: {
          description: 'How often the webhook could fire.',
          type: 'object',
          properties: {
            hour: { description: 'The hour to potentially fire.', type: 'integer', examples: [12] },
            minute: {
              description: 'The minute to potentially fire',
              type: 'integer',
              examples: [56],
            },
            day: { description: 'The day to potentially fire', type: 'integer', examples: [24] },
            month: { description: 'The month to potentially fire' },
          },
        },
        limit: {
          description:
            'To limit how often to potentially fire a webhook, and maximum amount of records to send',
          type: 'object',
          properties: {
            times: {
              description: 'The amount of records to send',
              type: 'integer',
              examples: [15],
            },
            seconds: {
              description: 'The minimum amount of seconds between requests',
              type: 'integer',
              examples: [500],
            },
          },
        },
        includeCompanyDomain: {
          description: 'If set to true, the company domain will be added to the header.',
          type: 'boolean',
          examples: [true],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      title: 'Webhook 403 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['You do not have access to webhook ID: 5'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      title: 'Webhook 404 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['No webhook was found with ID: 7.'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetWebhookList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        webhooks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', description: 'The ID of the webhook.', examples: ['1'] },
              name: { type: 'string', description: 'The name of the webhook.' },
              created: {
                type: 'string',
                format: 'date-time',
                description: 'The creation date of the webhook.',
                examples: ['2021-09-20 22:58:01'],
              },
              lastSent: {
                type: 'string',
                format: 'date-time',
                description: 'The date the webhook was last sent.',
                examples: ['2021-09-21 12:00:00'],
              },
              url: { type: 'string', description: 'The url of the webhook.' },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetWebhookLogs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The webhook ID to get logs about.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '200': {
      title: 'Webhook Log Response',
      type: 'object',
      properties: {
        webhookId: { description: 'The id of the webhook.', type: 'integer', examples: ['5'] },
        url: {
          description: 'The URL of the webhook.',
          type: 'string',
          examples: ['https://exmaple.com'],
        },
        lastAttempted: {
          description: 'timestamp of last time the webhook was sent',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        lastSuccess: {
          description: 'timestamp of last time the webhook was sent successfully',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        failureCount: {
          description: 'Count of how many times this call failed since last success',
          type: 'integer',
          examples: [0],
        },
        status: { description: 'Status code of last request', type: 'integer', examples: [200] },
        employeeIds: {
          description: 'A list of employee ids that were changed.',
          type: 'array',
          items: { type: 'integer' },
          examples: [1, 2],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      title: 'Webhook 403 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['You do not have access to webhook ID: 5'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      title: 'Webhook 404 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['No webhook was found with ID: 7.'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const IsEmployeeClockedIn = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of employee to whom the clock entry belongs.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const ListCompanyFiles = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const ListEmployeeFiles = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const ListEmployeeTrainings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the employee to get a list of trainings for.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
      {
        type: 'object',
        properties: {
          trainingTypeId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The training type id is optional. Not supplying a training type id will return the collection of all training records for the employee.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          trainingId: {
            type: 'object',
            properties: {
              id: { description: 'The ID of the training record.', type: 'integer' },
              employeeId: {
                description: 'The ID of the employee associated with the training.',
                type: 'integer',
              },
              completed: {
                description: 'Completed is a date in the format yyyy-mm-dd.',
                type: 'string',
              },
              notes: { description: 'Notes left on the training record.', type: 'string' },
              instructor: { description: 'Name of the instructor.', type: 'string' },
              credits: {
                description: 'What was credited for the training record.',
                type: 'number',
              },
              hours: { description: 'Hours associated with the training record.', type: 'number' },
              cost: {
                description: 'The currency and cost for the training record.',
                type: 'string',
              },
              type: { description: 'The training type ID.', type: 'integer' },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListTrainingCategories = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          categoryId: {
            description: 'The category ID and name',
            type: 'object',
            properties: { id: { type: 'integer' }, name: { type: 'string' } },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListTrainingTypes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          trainingId: {
            type: 'object',
            properties: {
              id: { description: 'The ID of the training', type: 'integer' },
              name: { description: 'Name of the training type.', type: 'string' },
              renewable: {
                description: 'If true, training will be renewed based off of frequency.',
                type: 'boolean',
              },
              frequency: {
                description:
                  'The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.',
                type: 'integer',
              },
              dueFromHireDate: {
                description:
                  'Number of days before the training is due for new hires. Not valid if training is not required.',
                type: 'integer',
              },
              required: { description: 'Is this a required training?', type: 'integer' },
              category: {
                description: 'The category ID and name',
                type: 'object',
                properties: { id: { type: 'integer' }, name: { type: 'string' } },
              },
              linkUrl: {
                description: 'Optional URL that can be included with a training.',
                type: 'string',
              },
              description: { description: 'Description for the training.', type: 'string' },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const Login = {
  formData: {
    title: 'Login',
    type: 'object',
    properties: {
      applicationKey: { description: '', type: 'string' },
      user: { description: '', type: 'string' },
      password: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const MetadataAddOrUpdateValuesForListFields = {
  body: {
    title: 'Add or Update Values for List Fields',
    type: 'object',
    properties: {
      options: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { description: '', type: 'integer' },
            value: { description: '', type: 'string', maximum: 255 },
            archived: { description: '', type: 'string', maximum: 255 },
            adpCode: { description: '', type: 'string', maximum: 255 },
          },
        },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          listFieldId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'listFieldId'],
      },
    ],
  },
} as const;
const MetadataGetAListOfFields = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const MetadataGetAListOfTabularFields = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const MetadataGetDetailsForListFields = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const PostApplicantStatus = {
  body: {
    type: 'object',
    required: ['status'],
    properties: {
      status: {
        description: 'Associates a status id with an application',
        type: 'integer',
        examples: ['2'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          applicationId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the application to add a comment to.',
          },
        },
        required: ['companyDomain', 'applicationId'],
      },
    ],
  },
} as const;
const PostApplicationComment = {
  body: {
    type: 'object',
    required: ['type', 'comment'],
    properties: {
      type: {
        description: 'Always the value "comment".',
        type: 'string',
        default: 'comment',
        pattern: '^comment$',
        examples: ['comment'],
      },
      comment: {
        description: 'The comment being posted.',
        type: 'string',
        examples: ['I really like this applicant'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          applicationId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the application to add a comment to.',
          },
        },
        required: ['companyDomain', 'applicationId'],
      },
    ],
  },
} as const;
const PostCloseGoal = {
  body: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        goal: {
          type: 'object',
          description: 'An individual goal',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PostEmployeeBenefit = {
  body: {
    title: 'Employee Benefit',
    type: 'object',
    required: [
      'employeeId',
      'companyBenefitId',
      'enrollmentStatus',
      'effectiveDate',
      'companyBenefitName',
      'startDate',
      'benefitType',
    ],
    properties: {
      employeeId: { description: 'Employee ID', type: 'integer' },
      companyBenefitId: { description: 'Company benefit ID', type: 'integer' },
      companyBenefitName: { description: 'Company benefit name', type: 'string' },
      coverageLevel: { description: 'Coverage level', type: 'string' },
      deductionEndDate: { description: 'Deduction end date', type: 'string', format: 'date' },
      deductionStartDate: { description: 'Deduction start date', type: 'string', format: 'date' },
      enrollmentStatus: {
        description: 'Enrollment status',
        type: 'string',
        enum: ['Eligible', 'Enrolled', 'Waived', 'Withdrawn', 'Terminated', 'Ineligible'],
      },
      effectiveDate: {
        description: 'Enrollment status effective date',
        type: 'string',
        format: 'date',
      },
      currencyCode: { description: 'Currency code', type: 'string' },
      employeeAmount: { description: 'Employee amount', type: 'number' },
      employeeAmountType: { description: 'Employee amount type', type: 'string' },
      employeePercentBasedOn: { description: 'Employee percent based on', type: 'string' },
      employeeCapAmount: { description: 'Employee cap amount', type: 'number' },
      employeeCapAmountType: { description: 'Employee cap amount type', type: 'string' },
      employeeAnnualMax: { description: 'Employee annual max', type: 'number' },
      companyAmount: { description: 'Company amount', type: 'number' },
      companyAmountType: { description: 'Company amount type', type: 'string' },
      companyPercentBasedOn: { description: 'Company percent based on', type: 'string' },
      companyCapAmount: { description: 'Company cap amount', type: 'number' },
      companyCapAmountType: { description: 'Company cap amount type', type: 'string' },
      companyAnnualMax: { description: 'Company annual max', type: 'number' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        title: 'Employee Benefit',
        type: 'object',
        properties: {
          employeeId: { description: 'Employee ID', type: 'integer' },
          companyBenefitId: { description: 'Company benefit ID', type: 'integer' },
          companyBenefitName: { description: 'Company benefit name', type: 'string' },
          coverageLevel: { description: 'Coverage level', type: 'string' },
          deductionEndDate: { description: 'Deduction end date', type: 'string', format: 'date' },
          deductionStartDate: {
            description: 'Deduction start date',
            type: 'string',
            format: 'date',
          },
          enrollmentStatus: {
            description:
              'Enrollment status\n\n`Eligible` `Enrolled` `Waived` `Withdrawn` `Terminated` `Ineligible`',
            type: 'string',
            enum: ['Eligible', 'Enrolled', 'Waived', 'Withdrawn', 'Terminated', 'Ineligible'],
          },
          effectiveDate: {
            description: 'Enrollment status effective date',
            type: 'string',
            format: 'date',
          },
          currencyCode: { description: 'Currency code', type: 'string' },
          employeeAmount: { description: 'Employee amount', type: 'number' },
          employeeAmountType: { description: 'Employee amount type', type: 'string' },
          employeePercentBasedOn: { description: 'Employee percent based on', type: 'string' },
          employeeCapAmount: { description: 'Employee cap amount', type: 'number' },
          employeeCapAmountType: { description: 'Employee cap amount type', type: 'string' },
          employeeAnnualMax: { description: 'Employee annual max', type: 'number' },
          companyAmount: { description: 'Company amount', type: 'number' },
          companyAmountType: { description: 'Company amount type', type: 'string' },
          companyPercentBasedOn: { description: 'Company percent based on', type: 'string' },
          companyCapAmount: { description: 'Company cap amount', type: 'number' },
          companyCapAmountType: { description: 'Company cap amount type', type: 'string' },
          companyAnnualMax: { description: 'Company annual max', type: 'number' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PostGoal = {
  body: {
    title: 'Add Employee Goal',
    type: 'object',
    properties: {
      title: { description: '[Required] The goal title.', type: 'string', maxLength: 1024 },
      description: {
        description: '[Required] The goal description.',
        type: 'string',
        maxLength: 65535,
      },
      percentComplete: {
        description:
          '[Optional] The goal completion percentage (0 - 100). If completionDate is set, this value must be 100.',
        type: 'integer',
      },
      alignsWithOptionId: {
        description: '[Optional] The option ID that aligns with this goal.',
        type: 'string',
      },
      sharedWithEmployeeIds: {
        description:
          '[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with". This must include the employee for whom the goal is created.',
        type: 'array',
        items: { type: 'integer' },
        maximum: 50,
      },
      dueDate: {
        description: '[Required] The goal due date in YYYY-mm-dd format.',
        type: 'string',
      },
      completionDate: {
        description:
          '[Optional] The date the goal was completed. If date is set, and no milestones are contained within this goal, percentComplete must be set to 100. If this goal does contain milestones, completion date cannot be set.',
        type: 'number',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      milestones: {
        description: '[Optional] Milestones for the goal.',
        type: 'array',
        items: {
          title: 'Goal Milestone',
          type: 'object',
          properties: {
            title: { description: '[Required] The title of the milestone.', type: 'string' },
            startValue: {
              description:
                '[Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.',
              type: 'number',
              format: 'float',
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
            endValue: {
              description:
                '[Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.',
              type: 'number',
              format: 'float',
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
          },
          required: ['title'],
        },
      },
    },
    required: ['title', 'dueDate', 'sharedWithEmployeeIds', 'description'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
  response: {
    '201': {
      properties: {
        goal: {
          type: 'object',
          description: 'An individual goal',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
      },
      type: 'object',
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PostGoalComment = {
  body: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
} as const;
const PostReopenGoal = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '201': {
      properties: {
        goal: {
          type: 'object',
          description: 'An individual goal',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
      },
      type: 'object',
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PostWebhook = {
  body: {
    title: 'Add Webhook',
    type: 'object',
    properties: {
      name: {
        description: 'The name of the webhook.',
        type: 'string',
        maxLength: 1024,
        examples: ['My new webhook'],
      },
      monitorFields: {
        description: 'A list of fields to monitor.',
        type: 'array',
        items: { type: 'string' },
        examples: ['firstName', 'lastName'],
      },
      postFields: {
        description:
          'A list of fields to post to the webhook url. Field ID or alias: external name',
        type: 'object',
        additionalProperties: { description: 'External name to post field to', type: 'string' },
      },
      url: {
        description: 'The url the webhook should send data to (must begin with https://).',
        pattern: '^http://',
        type: 'string',
      },
      format: {
        description: 'The format the webhook should use (json - default, form-encoded).',
        enum: ['json', 'form-encoded'],
        type: 'string',
      },
      frequency: {
        description: 'How often the webhook could fire.',
        type: 'object',
        properties: {
          hour: {
            description: 'The hour to potentially fire (0-23, null to potentially fire every hour)',
            minimum: 0,
            maximum: 23,
            type: 'integer',
          },
          minute: {
            description:
              'The minute to potentially fire (0-59, null to potentially fire every minute)',
            minimum: 0,
            maximum: 59,
            type: 'integer',
          },
          day: {
            description: 'The day to potentially fire (1-31, null to potentially fire every day)',
            minimum: 1,
            maximum: 31,
            type: 'integer',
          },
          month: {
            description:
              'The month to potentially fire (1-12, null to potentially fire every month)',
            minimum: 1,
            maximum: 12,
            type: 'integer',
          },
        },
      },
      limit: {
        description:
          'To limit how often to potentially fire a webhook, and maximum amount of records to send',
        type: 'object',
        properties: {
          times: { description: 'The amount of records to send', type: 'integer' },
          seconds: {
            description: 'The minimum amount of seconds between requests',
            type: 'integer',
          },
        },
      },
      includeCompanyDomain: {
        description: 'If set to true, the company domain will be added to the header.',
        type: 'boolean',
        examples: [true],
      },
    },
    required: ['name', 'monitorFields', 'postFields', 'url'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        id: { description: 'The id of the webhook.', type: 'integer', examples: ['4'] },
        name: {
          description: 'The name of the webhook.',
          type: 'string',
          maxLength: 1024,
          examples: ['Example Webhook'],
        },
        created: {
          description: 'timestamp of creation',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        lastSent: {
          description: 'timestamp of last webhook sent',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        monitorFields: {
          description: 'A list of fields to monitor.',
          type: 'array',
          items: { type: 'string' },
          examples: ['firstName', 'lastName'],
        },
        postFields: {
          description:
            'A list of fields to post to the webhook url. Field ID or alias: external name',
          type: 'object',
          additionalProperties: { description: 'External name to post field to', type: 'string' },
        },
        url: {
          description: 'The url the webhook should send data to.',
          type: 'string',
          examples: ['https://www.example.com'],
        },
        format: {
          description: 'The format the webhook should use (json, form-encoded).',
          type: 'string',
          examples: ['json'],
        },
        frequency: {
          description: 'How often the webhook could fire.',
          type: 'object',
          properties: {
            hour: { description: 'The hour to potentially fire.', type: 'integer', examples: [12] },
            minute: {
              description: 'The minute to potentially fire',
              type: 'integer',
              examples: [56],
            },
            day: { description: 'The day to potentially fire', type: 'integer', examples: [24] },
            month: { description: 'The month to potentially fire' },
          },
        },
        limit: {
          description:
            'To limit how often to potentially fire a webhook, and maximum amount of records to send',
          type: 'object',
          properties: {
            times: {
              description: 'The amount of records to send',
              type: 'integer',
              examples: [15],
            },
            seconds: {
              description: 'The minimum amount of seconds between requests',
              type: 'integer',
              examples: [500],
            },
          },
        },
        privateKey: {
          description:
            'The private key which can be used to verify that the webhook is secure (uses HMAC-SHA256)',
          type: 'string',
        },
        includeCompanyDomain: {
          description: 'If set to true, the company domain will be added to the header.',
          type: 'boolean',
          examples: [true],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      title: 'Webhook 403 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: { error: { type: 'string', examples: ['Invalid request body'] } },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['Permission denied to the following fields'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PutGoalComment = {
  body: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
          commentId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'commentId is the comment ID for the specified goal.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId', 'commentId'],
      },
    ],
  },
} as const;
const PutGoalProgress = {
  body: { type: 'integer', $schema: 'http://json-schema.org/draft-04/schema#' },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        goal: {
          type: 'object',
          description: 'The selected goal object',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PutGoalSharedWith = {
  body: {
    type: 'object',
    properties: { sharedWithEmployeeIds: { type: 'array', items: { type: 'integer' } } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        goal: {
          type: 'object',
          description: 'The selected goal object',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PutGoalV1 = {
  body: {
    title: 'Employee Goal',
    type: 'object',
    properties: {
      id: {
        description: 'A unique identifier for the record. Use this ID to reference this goal.',
        type: 'integer',
      },
      title: { description: 'The goal title.', type: 'string', maxLength: 1024 },
      description: { description: 'The goal description.', type: 'string', maxLength: 65535 },
      percentComplete: {
        description: 'The goal completion percentage (0 - 100).',
        type: 'integer',
      },
      alignsWithOptionId: {
        description: 'The option ID that aligns with this goal.',
        type: 'string',
      },
      sharedWithEmployeeIds: {
        description:
          'Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with".',
        type: 'array',
        items: { type: 'integer' },
        maximum: 50,
      },
      dueDate: { description: 'The goal due date in YYYY-mm-dd format.', type: 'string' },
      completionDate: {
        description: 'The date the goal was completed.',
        type: 'number',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
    },
    required: ['id', 'title'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '200': {
      properties: {
        goal: {
          type: 'object',
          description: 'An individual goal',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
      },
      type: 'object',
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PutGoalV11 = {
  body: {
    title: 'Update Employee Goal With Milestones',
    type: 'object',
    properties: {
      title: { description: '[Required] The goal title.', type: 'string', maxLength: 1024 },
      description: {
        description: '[Required] The goal description.',
        type: 'string',
        maxLength: 65535,
      },
      alignsWithOptionId: {
        description: '[Optional] The option ID that aligns with this goal.',
        type: 'string',
      },
      sharedWithEmployeeIds: {
        description:
          '[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with". This must include the employee for whom the goal is created.',
        type: 'array',
        items: { type: 'integer' },
        maximum: 50,
      },
      dueDate: {
        description: '[Required] The goal due date in YYYY-mm-dd format.',
        type: 'string',
      },
      milestonesEnabled: {
        description:
          '[Optional] A flag indicating whether or not milestones are enabled for this goal. Setting this flag to false will delete all existing milestones for this goal.',
        type: 'boolean',
      },
      deletedMilestoneIds: {
        description: '[Optional] Ids of all the milestones to be deleted with the update.',
        type: 'array',
        items: { type: 'integer' },
      },
      milestones: {
        description: '[Optional] All milestones to be added to the goal with this update.',
        type: 'array',
        items: {
          title: 'Goal Milestone',
          type: 'object',
          properties: {
            title: { description: '[Required] The title of the milestone.', type: 'string' },
            startValue: {
              description:
                '[Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.',
              type: 'number',
              format: 'float',
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
            endValue: {
              description:
                '[Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.',
              type: 'number',
              format: 'float',
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
          },
          required: ['title'],
        },
      },
    },
    required: ['title', 'dueDate', 'sharedWithEmployeeIds', 'description'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'employeeId is the employee ID with whom the goal is associated.',
          },
          goalId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'goalId is the goal ID for the specified employee.',
          },
        },
        required: ['companyDomain', 'employeeId', 'goalId'],
      },
    ],
  },
  response: {
    '200': {
      properties: {
        goal: {
          type: 'object',
          description: 'An individual goal',
          properties: {
            id: { type: 'integer', description: 'The id of the goal.', examples: ['4'] },
            title: {
              type: 'string',
              description: 'Title of the goal.',
              examples: ['Complete Documentation Epic'],
            },
            description: {
              type: 'string',
              description: 'A description of the goal.',
              examples: ['Document every endpoint for the goals API.'],
            },
            percentComplete: {
              type: 'integer',
              description: 'A percentage (1-100) that denotes how complete the goal is.',
              examples: ['100'],
            },
            alignsWithOptionId: { type: 'integer' },
            sharedWithEmployeeIds: {
              type: 'array',
              description: 'Ids of the employees that have access to this goal.',
              items: { type: 'integer', examples: ['89'] },
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the goal.',
              examples: ['2021-12-17'],
            },
            completionDate: {
              type: 'string',
              format: 'date',
              description: 'The date the goal was completed.',
              examples: ['2021-12-16'],
            },
            status: {
              type: 'string',
              description: 'The status of the goal.',
              examples: ['in_progress'],
            },
            milestones: {
              type: 'array',
              description:
                'All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.',
              items: {
                type: 'object',
                description: 'An individual milestone.',
                properties: {
                  id: { type: 'integer', description: 'The id of the milestone.', examples: ['2'] },
                  employeeGoalId: {
                    type: 'integer',
                    description: 'The id of the goal which encompasses this milestone.',
                    examples: ['12'],
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the milestone.',
                    examples: ['Sell 15 Doohickeys'],
                  },
                  currentValue: {
                    type: 'number',
                    description:
                      'The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['7'],
                  },
                  startValue: {
                    type: 'number',
                    description:
                      'The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['0'],
                  },
                  endValue: {
                    type: 'number',
                    description:
                      'The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.',
                    examples: ['15'],
                  },
                  completedDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description:
                      'The date and time in which the goal has been completed. If the goal is not completed the value will be null.',
                    examples: ['2024-07-12T14:50:46Z'],
                  },
                  lastUpdateDateDateTime: {
                    type: 'string',
                    format: 'Date-Time',
                    description: 'The date and time in which the goal was last updated.',
                    examples: ['2023-07-12T14:50:46Z'],
                  },
                  lastUpdateUserId: {
                    type: 'integer',
                    description: 'The ID of the user who last updated this milestone.',
                    examples: ['24'],
                  },
                },
              },
            },
            actions: {
              type: 'object',
              description:
                'Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.',
              properties: {
                canEditGoalProgressBar: {
                  type: 'boolean',
                  description: 'Can the user edit the progress bar of this goal.',
                  examples: ['false'],
                },
                canEditGoalMilestoneProgressBar: {
                  type: 'boolean',
                  description: 'can the user edit the progress of a milestone in this goal.',
                  examples: ['true'],
                },
              },
            },
          },
        },
      },
      type: 'object',
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PutWebhook = {
  body: {
    title: 'Add Webhook',
    type: 'object',
    properties: {
      name: {
        description: 'The name of the webhook.',
        type: 'string',
        maxLength: 1024,
        examples: ['My new webhook'],
      },
      monitorFields: {
        description: 'A list of fields to monitor.',
        type: 'array',
        items: { type: 'string' },
        examples: ['firstName', 'lastName'],
      },
      postFields: {
        description:
          'A list of fields to post to the webhook url. Field ID or alias: external name',
        type: 'object',
        additionalProperties: { description: 'External name to post field to', type: 'string' },
      },
      url: {
        description: 'The url the webhook should send data to (must begin with https://).',
        pattern: '^http://',
        type: 'string',
      },
      format: {
        description: 'The format the webhook should use (json - default, form-encoded).',
        enum: ['json', 'form-encoded'],
        type: 'string',
      },
      frequency: {
        description: 'How often the webhook could fire.',
        type: 'object',
        properties: {
          hour: {
            description: 'The hour to potentially fire (0-23, null to potentially fire every hour)',
            minimum: 0,
            maximum: 23,
            type: 'integer',
          },
          minute: {
            description:
              'The minute to potentially fire (0-59, null to potentially fire every minute)',
            minimum: 0,
            maximum: 59,
            type: 'integer',
          },
          day: {
            description: 'The day to potentially fire (1-31, null to potentially fire every day)',
            minimum: 1,
            maximum: 31,
            type: 'integer',
          },
          month: {
            description:
              'The month to potentially fire (1-12, null to potentially fire every month)',
            minimum: 1,
            maximum: 12,
            type: 'integer',
          },
        },
      },
      limit: {
        description:
          'To limit how often to potentially fire a webhook, and maximum amount of records to send',
        type: 'object',
        properties: {
          times: { description: 'The amount of records to send', type: 'integer' },
          seconds: {
            description: 'The minimum amount of seconds between requests',
            type: 'integer',
          },
        },
      },
      includeCompanyDomain: {
        description: 'If set to true, the company domain will be added to the header.',
        type: 'boolean',
        examples: [true],
      },
    },
    required: ['name', 'monitorFields', 'postFields', 'url'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is a webhook ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '200': {
      title: 'Add Webhook Response',
      type: 'object',
      properties: {
        id: { description: 'The id of the webhook.', type: 'integer', examples: ['4'] },
        name: {
          description: 'The name of the webhook.',
          type: 'string',
          maxLength: 1024,
          examples: ['Example Webhook'],
        },
        created: {
          description: 'timestamp of creation',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        lastSent: {
          description: 'timestamp of last webhook sent',
          type: 'string',
          examples: ['2021-09-20 22:58:01'],
        },
        monitorFields: {
          description: 'A list of fields to monitor.',
          type: 'array',
          items: { type: 'string' },
          examples: ['firstName', 'lastName'],
        },
        postFields: {
          description:
            'A list of fields to post to the webhook url. Field ID or alias: external name',
          type: 'object',
          additionalProperties: { description: 'External name to post field to', type: 'string' },
        },
        url: {
          description: 'The url the webhook should send data to.',
          type: 'string',
          examples: ['https://www.example.com'],
        },
        format: {
          description: 'The format the webhook should use (json, form-encoded).',
          type: 'string',
          examples: ['json'],
        },
        frequency: {
          description: 'How often the webhook could fire.',
          type: 'object',
          properties: {
            hour: { description: 'The hour to potentially fire.', type: 'integer', examples: [12] },
            minute: {
              description: 'The minute to potentially fire',
              type: 'integer',
              examples: [56],
            },
            day: { description: 'The day to potentially fire', type: 'integer', examples: [24] },
            month: { description: 'The month to potentially fire' },
          },
        },
        limit: {
          description:
            'To limit how often to potentially fire a webhook, and maximum amount of records to send',
          type: 'object',
          properties: {
            times: {
              description: 'The amount of records to send',
              type: 'integer',
              examples: [15],
            },
            seconds: {
              description: 'The minimum amount of seconds between requests',
              type: 'integer',
              examples: [500],
            },
          },
        },
        includeCompanyDomain: {
          description: 'If set to true, the company domain will be added to the header.',
          type: 'boolean',
          examples: [true],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      title: 'Webhook 403 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: { error: { type: 'string', examples: ['Invalid request body'] } },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['Permission denied to the following fields'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      title: 'Webhook 404 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: { type: 'string', examples: ['No webhook was found with ID: 7.'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      title: 'Webhook 500 error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                examples: [
                  'Sorry for the inconvenience, please try again later or contact BambooHR.',
                ],
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const RequestCustomReport = {
  body: {
    title: 'Request Custom Report',
    type: 'object',
    properties: {
      title: { description: '', type: 'string' },
      filters: {
        description: '',
        type: 'object',
        properties: {
          lastChanged: {
            description: '',
            type: 'object',
            properties: {
              includeNull: { description: 'yes|no', type: 'string' },
              value: { description: 'Date last changed', type: 'string' },
            },
          },
        },
      },
      fields: { description: '', type: 'array', items: { description: '', type: 'string' } },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON',
          },
          onlyCurrent: {
            type: 'boolean',
            default: true,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Limits the report to only current employees. Setting to false will include future-dated employees in the report.',
          },
        },
        required: ['format'],
      },
    ],
  },
} as const;
const StoreClockEntries = {
  body: {
    type: 'object',
    properties: {
      entries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            employeeId: {
              type: 'integer',
              description: 'employee id for the time entry',
              examples: [40342],
            },
            date: {
              type: 'string',
              description: 'date of the time entry',
              examples: ['2021-06-25'],
            },
            start: {
              type: 'string',
              description: '24 hour format (hh:mm) for start time',
              examples: ['13:00'],
            },
            end: {
              type: 'string',
              description: '24 hour format (hh:mm) for end time',
              examples: ['17:00'],
            },
            clockEntryId: {
              type: 'integer',
              description: 'id of existing time entry. used when updating time entry',
              examples: [101],
            },
            projectId: {
              type: 'integer',
              description: 'The id of the project associated with the time entry',
              examples: [1],
            },
            taskId: {
              type: 'integer',
              description: 'The id of the task associated with the time entry',
              examples: [2],
            },
            note: { type: 'string', examples: ['Note for time entry'] },
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const StoreDailyEntries = {
  body: {
    type: 'object',
    properties: {
      entries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            employeeId: {
              type: 'integer',
              description: 'employee id for the time entry',
              examples: [40342],
            },
            date: {
              type: 'string',
              description: 'date of the time entry',
              examples: ['2021-06-25'],
            },
            hours: {
              type: 'number',
              description: 'The number of hours for the time entry.',
              format: 'float',
              examples: [7.5],
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
            dailyEntryId: {
              type: 'integer',
              description: 'The id of the daily entry if updating an existing entry',
              examples: [1],
            },
            projectId: {
              type: 'integer',
              description: 'The id of the project associated with the time entry',
              examples: [1],
            },
            taskId: {
              type: 'integer',
              description: 'The id of the task associated with the time entry',
              examples: [2],
            },
            note: { type: 'string' },
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const TimeOffAddATimeOffHistoryItemForTimeOffRequest = {
  body: {
    type: 'object',
    properties: {
      date: {
        description:
          'The date the request should be added in history. This will usually be the first date of the request. Should be in ISO8601 date format (YYYY-MM-DD).',
        type: 'string',
      },
      timeOffRequestId: { description: 'The ID of the time off request.', type: 'integer' },
      note: {
        description: 'This is an optional note to show in history.',
        type: 'string',
        maximum: 255,
      },
    },
    required: ['date', 'timeOffRequestId'],
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the employee.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffAddATimeOffRequest = {
  body: {
    title: 'Add time off request',
    type: 'object',
    properties: {
      status: { description: '', type: 'string', maximum: 255 },
      start: { description: '', type: 'string', maximum: 255 },
      end: { description: '', type: 'string', maximum: 255 },
      timeOffTypeId: { description: '', type: 'integer' },
      amount: { description: '', type: 'integer' },
      notes: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: { from: { type: 'string' }, note: { type: 'string' } },
        },
      },
      dates: {
        description: '',
        type: 'array',
        items: {
          type: 'object',
          properties: { ymd: { type: 'string' }, amount: { type: 'integer' } },
        },
      },
      previousRequest: { description: '', type: 'integer' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffAdjustTimeOffBalance = {
  body: {
    type: 'object',
    properties: {
      date: {
        description:
          'The date the adjustment should be added in history. Should be in ISO8601 date format (YYYY-MM-DD).',
        type: 'string',
      },
      timeOffTypeId: {
        description: 'The ID of the time off type to add a balance adjustment for.',
        type: 'integer',
      },
      amount: {
        description: 'The number of hours/days to adjust the balance by.',
        type: 'number',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      note: {
        description: 'This is an optional note to show in history.',
        type: 'string',
        maximum: 255,
      },
    },
    required: ['date', 'timeOffTypeId', 'amount'],
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the employee.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffAssignTimeOffPoliciesForAnEmployee = {
  body: {
    title: 'Time Off Policies',
    type: 'array',
    items: {
      type: 'object',
      properties: { timeOffPolicyId: { type: 'integer' }, accrualStartDate: { type: 'string' } },
      additionalProperties: false,
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffChangeARequestStatus = {
  body: {
    title: 'Request Status',
    type: 'object',
    properties: {
      status: {
        description: 'One of approved, cancelled, denied',
        type: 'string',
        maximum: 20,
        examples: ['Approved'],
      },
      note: {
        description: 'A note to attach to the change in status',
        type: 'string',
        maximum: 255,
        examples: ['Note!'],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          requestId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'requestId'],
      },
    ],
  },
} as const;
const TimeOffGetTimeOffRequests = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A particular request ID to limit the response to.',
          },
          action: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Limit to requests that the user has a particular level of access to. Legal values are: "view" or "approve". Defaults to view.',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'A particular employee ID to limit the response to.',
          },
          start: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'YYYY-MM-DD. Only show time off that occurs on/after the specified start date.',
          },
          end: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'YYYY-MM-DD. Only show time off that occurs on/before the specified end date.',
          },
          type: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included.',
          },
          status: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are "approved", "denied", "superceded", "requested", "canceled".',
          },
        },
        required: ['start', 'end'],
      },
      {
        type: 'object',
        properties: {
          Accept: {
            type: 'string',
            enum: ['application/xml', 'application/json'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'This endpoint can produce either JSON or XML.',
          },
        },
        required: [],
      },
    ],
  },
} as const;
const TimeOffListTimeOffPoliciesForEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffV11AssignTimeOffPoliciesForAnEmployee = {
  body: {
    title: 'Time Off Policies',
    type: 'array',
    items: {
      type: 'object',
      properties: { timeOffPolicyId: { type: 'integer' }, accrualStartDate: { type: 'string' } },
      additionalProperties: false,
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeOffV11ListTimeOffPoliciesForEmployee = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeTrackingEmployeeProjects = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of the employee to whom the projects belong.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
const TimeTrackingProjectTasks = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of the employee to whom the projects belong.',
          },
          projectId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'id of the project to which the tasks belong.',
          },
        },
        required: ['companyDomain', 'employeeId', 'projectId'],
      },
    ],
  },
} as const;
const UpdateBenefitGroup = {
  body: {
    title: 'Benefit Group',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      payPeriod: { description: '', type: 'string' },
      startDate: { description: '', type: 'string' },
      endDate: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit group ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UpdateBenefitPlan = {
  body: {
    title: 'Benefit Plan',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      type: { description: '', type: 'string' },
      deductionTypeId: { description: '', type: 'string' },
      startYmd: { description: '', type: 'string' },
      endYmd: { description: '', type: 'string' },
      url: { description: '', type: 'string' },
      meetAcaMin: { description: '', type: 'string' },
      description: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit plan ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UpdateBenefitPlanCoverage = {
  body: {
    title: 'Benefit Plan Coverage',
    type: 'object',
    properties: {
      benefitPlanId: { description: '', type: 'string' },
      benefitCoverageId: { description: '', type: 'string' },
      totalCost: { description: '', type: 'string' },
      currencyType: { description: '', type: 'string' },
      startYmd: { description: '', type: 'string' },
      endYmd: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the benefit plan ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UpdateCompanyBenefit = {
  body: {
    title: 'Company Benefit Request',
    type: 'object',
    required: ['companyBenefitName', 'startDate', 'benefitType'],
    properties: {
      companyBenefitName: { description: 'Name', type: 'string' },
      benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
      benefitType: {
        description: 'Benefit type',
        type: 'string',
        enum: [
          'health',
          'dental',
          'vision',
          'retirement',
          'hsa',
          'flex',
          'life',
          'disability',
          'reimbursement',
          'supplemental',
          'other',
        ],
      },
      deductionTypeId: { description: 'Deduction type ID', type: 'string' },
      startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
      endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
      description: { description: 'Description', type: 'string' },
      planUrl: { description: 'Plan url', type: 'string' },
      ssoLoginUrl: { description: 'SSO login url', type: 'string' },
      ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
      safeHarbor: { description: 'Is a safe harbor', type: 'boolean' },
      meetAcaMin: { description: 'Meets ACA minimum requirements', type: 'boolean' },
      reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
      reimbursementFrequency: {
        description: 'Reimbursement frequency',
        type: 'string',
        enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
      },
      reimbursementCurrencyCode: { description: 'Reimbursement currency code', type: 'string' },
      minEssentialCoverage: { description: 'Provides minimum essential coverage', type: 'boolean' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the company benefit ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
  response: {
    '200': {
      title: 'Company Benefit',
      type: 'object',
      properties: {
        name: { description: 'Name', type: 'string' },
        benefitVendorId: { description: 'Benefit vendor ID', type: 'string' },
        benefitType: {
          description:
            'Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`',
          type: 'string',
          enum: [
            'health',
            'dental',
            'vision',
            'retirement',
            'hsa',
            'flex',
            'life',
            'disability',
            'reimbursement',
            'supplemental',
            'other',
          ],
        },
        deductionTypeId: { description: 'Deduction type ID', type: 'integer' },
        startDate: { description: 'Benefit start date', type: 'string', format: 'date' },
        endDate: { description: 'Benefit end date', type: 'string', format: 'date' },
        description: { description: 'Description', type: 'string' },
        planUrl: { description: 'Plan url', type: 'string' },
        ssoLoginUrl: { description: 'SSO login url', type: 'string' },
        ssoLoginUrlLinkText: { description: 'SSO login link text', type: 'string' },
        safeHarbor: {
          description: 'Is a safe harbor\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        meetAcaMin: {
          description: 'Meets ACA minimum requirements\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
        reimbursementAmount: { description: 'Reimbursement amount', type: 'number' },
        reimbursementFrequency: {
          description:
            'Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`',
          type: 'string',
          enum: ['pay period', 'month', 'quarter', 'year', 'one time', null],
        },
        minEssentialCoverage: {
          description: 'Provides minimum essential coverage\n\n`yes` `no`',
          type: 'string',
          enum: ['yes', 'no', null],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateCompanyFile = {
  body: {
    title: 'Company File Update',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      categoryId: { description: '', type: 'string' },
      shareWithEmployee: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the employee file being updated.',
          },
        },
        required: ['companyDomain', 'fileId'],
      },
    ],
  },
} as const;
const UpdateEmployee = {
  body: {
    title: 'Employee when updating',
    type: 'object',
    properties: {
      firstName: { description: '', type: 'string', maximum: 255, examples: ['Panda'] },
      lastName: { description: '', type: 'string', maximum: 255, examples: ['Bear'] },
    },
    additionalProperties: true,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is an employee ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UpdateEmployeeDependent = {
  body: {
    title: 'Employee Dependent',
    type: 'object',
    properties: {
      employeeId: { description: '', type: 'string' },
      firstName: { description: '', type: 'string' },
      middleName: { description: '', type: 'string' },
      lastName: { description: '', type: 'string' },
      relationship: { description: '', type: 'string' },
      gender: { description: '', type: 'string' },
      ssn: { description: '', type: 'string' },
      dateOfBirth: { description: '', type: 'string' },
      addressLine1: { description: '', type: 'string' },
      addressLine2: { description: '', type: 'string' },
      city: { description: '', type: 'string' },
      state: { description: '', type: 'string' },
      zipCode: { description: '', type: 'string' },
      homePhone: { description: '', type: 'string' },
      country: { description: '', type: 'string' },
      isUsCitizen: { description: '', type: 'string' },
      isStudent: { description: '', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee dependent ID.',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UpdateEmployeeFile = {
  body: {
    title: 'Employee File Update',
    type: 'object',
    properties: {
      name: { description: '', type: 'string' },
      categoryId: { description: '', type: 'string' },
      shareWithEmployee: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
          fileId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{fileId} is the ID of the employee file being updated.',
          },
        },
        required: ['companyDomain', 'id', 'fileId'],
      },
    ],
  },
} as const;
const UpdateEmployeeTableRow = {
  body: {
    title: 'Table Row Update',
    type: 'object',
    properties: {
      date: { description: '', type: 'string' },
      location: { description: '', type: 'string' },
      division: { description: '', type: 'string' },
      department: { description: '', type: 'string' },
      jobTitle: { description: '', type: 'string' },
      reportsTo: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
          rowId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Row ID',
          },
        },
        required: ['companyDomain', 'id', 'table', 'rowId'],
      },
    ],
  },
} as const;
const UpdateEmployeeTableRowV = {
  body: {
    title: 'Table Row Update',
    type: 'object',
    properties: {
      date: { description: '', type: 'string' },
      location: { description: '', type: 'string' },
      division: { description: '', type: 'string' },
      department: { description: '', type: 'string' },
      jobTitle: { description: '', type: 'string' },
      reportsTo: { description: '', type: 'string' },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: '{id} is the employee ID.',
          },
          table: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Table name',
          },
          rowId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Row ID',
          },
        },
        required: ['companyDomain', 'id', 'table', 'rowId'],
      },
    ],
  },
} as const;
const UpdateEmployeeTrainingRecord = {
  body: {
    type: 'object',
    required: ['completed'],
    properties: {
      completed: {
        description:
          'Completed is the only required field and must be in yyyy-mm-dd format. The other parameters are optional.',
        type: 'string',
        pattern: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
        examples: ['2016-05-25'],
      },
      cost: {
        properties: { currency: { type: 'string', examples: ['USD'] }, cost: { type: 'number' } },
        type: 'object',
      },
      instructor: { type: 'string', examples: ['Bob Jones'] },
      hours: { type: 'number', examples: ['16'] },
      credits: { type: 'number', examples: ['4'] },
      notes: { type: 'number', examples: ['sample note'] },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeTrainingRecordId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training record to update.',
          },
        },
        required: ['companyDomain', 'employeeTrainingRecordId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { description: 'The ID of the training record.', type: 'integer' },
        employeeId: {
          description: 'The ID of the employee associated with the training.',
          type: 'integer',
        },
        completed: { description: 'Completed is a date in the format yyyy-mm-dd.', type: 'string' },
        notes: { description: 'Notes left on the training record.', type: 'string' },
        instructor: { description: 'Name of the instructor.', type: 'string' },
        credits: { description: 'What was credited for the training record.', type: 'number' },
        hours: { description: 'Hours associated with the training record.', type: 'number' },
        cost: { description: 'The currency and cost for the training record.', type: 'string' },
        type: { description: 'The training type ID.', type: 'integer' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateTrainingCategory = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: {
        description: 'Name of the training category.',
        type: 'string',
        examples: ['My Training Category'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          trainingCategoryId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training category to update.',
          },
        },
        required: ['companyDomain', 'trainingCategoryId'],
      },
    ],
  },
  response: {
    '200': {
      description: 'The category ID and name',
      type: 'object',
      properties: { id: { type: 'integer' }, name: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateTrainingType = {
  body: {
    type: 'object',
    required: ['name', 'required'],
    properties: {
      name: {
        description: 'Name of the training type.',
        type: 'string',
        examples: ['My Edited Training'],
      },
      frequency: {
        description:
          'The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.',
        type: 'integer',
        default: '12',
        examples: ['12'],
      },
      renewable: {
        description:
          'Renewable is optional but if you are setting it to true you must pass a frequency.',
        type: 'boolean',
        examples: [true],
      },
      category: {
        type: 'object',
        description:
          'Category is optional and passing an empty value will remove the category from the training type. Passing a name will assign the training type to the new training category.',
        properties: {
          id: { type: 'integer', description: 'Category ID', examples: [3] },
          name: {
            type: 'string',
            description: 'Category Name',
            examples: ['CustomApiCategoryName2'],
          },
          accuracy: {
            type: 'integer',
            description: 'Accuracy in meters of the clock in location',
            examples: [2],
          },
          address: { type: 'string', description: 'Address...', examples: ['123 Main'] },
        },
      },
      required: { description: 'Is this a required training?', type: 'boolean' },
      dueFromHireDate: {
        description:
          'Number of days before the training is due for new hires. Not valid unless training is required.',
        type: 'integer',
        default: '30',
      },
      linkUrl: {
        description: 'Optional URL that can be included with a training.',
        type: 'string',
      },
      description: { description: 'Description for the training.', type: 'string' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          trainingTypeId: {
            type: 'integer',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the training type to update.',
          },
        },
        required: ['companyDomain', 'trainingTypeId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { description: 'The ID of the training', type: 'integer' },
        name: { description: 'Name of the training type.', type: 'string' },
        renewable: {
          description: 'If true, training will be renewed based off of frequency.',
          type: 'boolean',
        },
        frequency: {
          description:
            'The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.',
          type: 'integer',
        },
        dueFromHireDate: {
          description:
            'Number of days before the training is due for new hires. Not valid if training is not required.',
          type: 'integer',
        },
        required: { description: 'Is this a required training?', type: 'integer' },
        category: {
          description: 'The category ID and name',
          type: 'object',
          properties: { id: { type: 'integer' }, name: { type: 'string' } },
        },
        linkUrl: {
          description: 'Optional URL that can be included with a training.',
          type: 'string',
        },
        description: { description: 'Description for the training.', type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UploadCompanyFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
        },
        required: ['companyDomain'],
      },
    ],
  },
} as const;
const UploadEmployeeFile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          id: {
            type: 'string',
            default: 0,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              '{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).',
          },
        },
        required: ['companyDomain', 'id'],
      },
    ],
  },
} as const;
const UploadEmployeePhoto = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyDomain: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"',
          },
          employeeId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID for the employee you are setting the photo for.',
          },
        },
        required: ['companyDomain', 'employeeId'],
      },
    ],
  },
} as const;
export {
  AddBenefitGroup,
  AddBenefitGroupEmployee,
  AddBenefitGroupPlan,
  AddBenefitGroupPlanCost,
  AddBenefitPlan,
  AddBenefitPlanCoverage,
  AddCompanyFileCategory,
  AddEmployee,
  AddEmployeeDependent,
  AddEmployeeDeposit,
  AddEmployeeFileCategory,
  AddEmployeePaystub,
  AddEmployeeTableRow,
  AddEmployeeTableRowV1,
  AddEmployeeUnpaidPaystubs,
  AddEmployeeWithholding,
  AddNewCompanyBenefit,
  AddNewEmployeeTrainingRecord,
  AddTimetracking,
  AddTrainingCategory,
  AddTrainingType,
  AdjustTimetracking,
  ApproveEmployeeTimesheets,
  BulkRecordTimetracking,
  ClearEmployeeDeposit,
  ClearEmployeePaystub,
  ClearEmployeeUnpaidPaystubs,
  ClearEmployeeWithholding,
  ClockIn,
  ClockInData,
  ClockOut,
  ClockOutAndApproveEmployeeTimesheets,
  ClockOutEmployeeAtSpecificTime,
  DeleteClockEntries,
  DeleteCompanyBenefit,
  DeleteCompanyFile,
  DeleteEmployeeFile,
  DeleteEmployeeTableRowV1,
  DeleteEmployeeTrainingRecord,
  DeleteGoal,
  DeleteGoalComment,
  DeleteTimetracking,
  DeleteTrainingCategory,
  DeleteTrainingType,
  DeleteWebhook,
  EstimateFutureTimeOffBalances,
  GetAListOfUsers,
  GetAListOfWhoSOut,
  GetApplicationDetails,
  GetApplications,
  GetBenefitCoverage,
  GetBenefitCoverages,
  GetBenefitDeductionTypes,
  GetBenefitGroup,
  GetBenefitGroupEmployee,
  GetBenefitGroupEmployees,
  GetBenefitGroupPlan,
  GetBenefitGroupPlanCost,
  GetBenefitGroupPlanCosts,
  GetBenefitGroupPlans,
  GetBenefitGroups,
  GetBenefitPlan,
  GetBenefitPlanCoverage,
  GetBenefitPlanCoverages,
  GetBenefitPlans,
  GetCanCreateGoal,
  GetChangedEmployeeIds,
  GetChangedEmployeeTableData,
  GetClockEntry,
  GetCompanyBenefit,
  GetCompanyBenefitTypes,
  GetCompanyBenefits,
  GetCompanyFile,
  GetCompanyReport,
  GetDailyEntry,
  GetEmployee,
  GetEmployeeBenefit,
  GetEmployeeDeductionsByPlan,
  GetEmployeeDependent,
  GetEmployeeDependents,
  GetEmployeeDepositAccounts,
  GetEmployeeFile,
  GetEmployeePaystub,
  GetEmployeePhoto,
  GetEmployeeTableRow,
  GetEmployeeTimesheet,
  GetEmployeeUnpaidPaystubs,
  GetEmployeeWithholdings,
  GetEmployeesDirectory,
  GetGoalAggregate,
  GetGoalComments,
  GetGoals,
  GetGoalsAggregateV1,
  GetGoalsAggregateV11,
  GetGoalsAggregateV12,
  GetGoalsAlignmentOptions,
  GetGoalsFiltersV1,
  GetGoalsFiltersV11,
  GetGoalsShareOptions,
  GetJobSummaries,
  GetMonitorFields,
  GetPayrollDeductionsForEmployee,
  GetPlanDeductionsByEmployee,
  GetStatuses,
  GetTimeOffPolicies,
  GetTimeOffTypes,
  GetTimesheets,
  GetTimetrackingRecord,
  GetWebhook,
  GetWebhookList,
  GetWebhookLogs,
  IsEmployeeClockedIn,
  ListCompanyFiles,
  ListEmployeeFiles,
  ListEmployeeTrainings,
  ListTrainingCategories,
  ListTrainingTypes,
  Login,
  MetadataAddOrUpdateValuesForListFields,
  MetadataGetAListOfFields,
  MetadataGetAListOfTabularFields,
  MetadataGetDetailsForListFields,
  PostApplicantStatus,
  PostApplicationComment,
  PostCloseGoal,
  PostEmployeeBenefit,
  PostGoal,
  PostGoalComment,
  PostReopenGoal,
  PostWebhook,
  PutGoalComment,
  PutGoalProgress,
  PutGoalSharedWith,
  PutGoalV1,
  PutGoalV11,
  PutWebhook,
  RequestCustomReport,
  StoreClockEntries,
  StoreDailyEntries,
  TimeOffAddATimeOffHistoryItemForTimeOffRequest,
  TimeOffAddATimeOffRequest,
  TimeOffAdjustTimeOffBalance,
  TimeOffAssignTimeOffPoliciesForAnEmployee,
  TimeOffChangeARequestStatus,
  TimeOffGetTimeOffRequests,
  TimeOffListTimeOffPoliciesForEmployee,
  TimeOffV11AssignTimeOffPoliciesForAnEmployee,
  TimeOffV11ListTimeOffPoliciesForEmployee,
  TimeTrackingEmployeeProjects,
  TimeTrackingProjectTasks,
  UpdateBenefitGroup,
  UpdateBenefitPlan,
  UpdateBenefitPlanCoverage,
  UpdateCompanyBenefit,
  UpdateCompanyFile,
  UpdateEmployee,
  UpdateEmployeeDependent,
  UpdateEmployeeFile,
  UpdateEmployeeTableRow,
  UpdateEmployeeTableRowV,
  UpdateEmployeeTrainingRecord,
  UpdateTrainingCategory,
  UpdateTrainingType,
  UploadCompanyFile,
  UploadEmployeeFile,
  UploadEmployeePhoto,
};
