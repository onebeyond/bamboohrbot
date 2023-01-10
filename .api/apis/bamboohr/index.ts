import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'bamboohr/v1 (api/5.0.5)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get employee data by specifying a set of fields. This is suitable for getting basic
   * employee information, including current values for fields that are part of a historical
   * table, like job title, or compensation information. See the
   * [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
   *
   * @summary Get Employee
   */
  getEmployee(
    metadata: types.GetEmployeeMetadataParam
  ): Promise<FetchResponse<200, types.GetEmployeeResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/', 'get', metadata);
  }

  /**
   * Update an employee, based on employee ID. If employee is currently on a pay schedule
   * syncing with Trax Payroll, or being added to one, the API user will need to update the
   * employee with all of the following required fields for the update to be successful
   * (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn,
   * gender, maritalStatus, hireDate, address1, city, state, country,
   * employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and
   * division.
   *
   * @summary Update Employee
   */
  updateEmployee(
    body: types.UpdateEmployeeBodyParam,
    metadata: types.UpdateEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/', 'post', body, metadata);
  }

  /**
   * Add a new employee. New employees must have at least a first name and a last name. The
   * ID of the newly created employee is included in the Location header of the response.
   * Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields)
   * endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the
   * following required fields (listed by API field name): employeeNumber, firstName,
   * lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state,
   * country, employmentHistoryStatus, exempt, payType, payRate, payPer, location,
   * department, and division.
   *
   * @summary Add Employee
   */
  addEmployee(
    body: types.AddEmployeeBodyParam,
    metadata: types.AddEmployeeMetadataParam
  ): Promise<FetchResponse<201, types.AddEmployeeResponse201>> {
    return this.core.fetch('/{companyDomain}/v1/employees/', 'post', body, metadata);
  }

  /**
   * Gets employee directory.
   *
   * @summary Get Employee Directory
   */
  getEmployeesDirectory(
    metadata: types.GetEmployeesDirectoryMetadataParam
  ): Promise<FetchResponse<200, types.GetEmployeesDirectoryResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/employees/directory', 'get', metadata);
  }

  /**
   * Lists employee files and categories
   *
   * @summary List employee files and categories
   */
  listEmployeeFiles(
    metadata: types.ListEmployeeFilesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/view/', 'get', metadata);
  }

  /**
   * Add an employee file category.
   *
   * @summary Add Employee File Category
   */
  addEmployeeFileCategory(
    body: types.AddEmployeeFileCategoryBodyParam,
    metadata: types.AddEmployeeFileCategoryMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/files/categories',
      'post',
      body,
      metadata
    );
  }

  /**
   * Update an employee file
   *
   * @summary Update Employee File
   */
  updateEmployeeFile(
    body: types.UpdateEmployeeFileBodyParam,
    metadata: types.UpdateEmployeeFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{id}/files/{fileId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Delete an employee file
   *
   * @summary Delete Employee File
   */
  deleteEmployeeFile(
    metadata: types.DeleteEmployeeFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/{fileId}', 'delete', metadata);
  }

  /**
   * Gets an employee file
   *
   * @summary Get an Employee File
   */
  getEmployeeFile(
    metadata: types.GetEmployeeFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/{fileId}', 'get', metadata);
  }

  /**
   * Upload an employee file
   *
   * @summary Upload Employee File
   */
  uploadEmployeeFile(
    metadata: types.UploadEmployeeFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/files', 'post', metadata);
  }

  /**
   * Lists company files and categories
   *
   * @summary List company files and categories
   */
  listCompanyFiles(
    metadata: types.ListCompanyFilesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files/view/', 'get', metadata);
  }

  /**
   * Add a company file category.
   *
   * @summary Add Company File Category
   */
  addCompanyFileCategory(
    body: types.AddCompanyFileCategoryBodyParam,
    metadata: types.AddCompanyFileCategoryMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files/categories', 'post', body, metadata);
  }

  /**
   * Update a company file
   *
   * @summary Update Company File
   */
  updateCompanyFile(
    body: types.UpdateCompanyFileBodyParam,
    metadata: types.UpdateCompanyFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'post', body, metadata);
  }

  /**
   * Delete a company file
   *
   * @summary Delete Company File
   */
  deleteCompanyFile(
    metadata: types.DeleteCompanyFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'delete', metadata);
  }

  /**
   * Gets an company file
   *
   * @summary Get an Company File
   */
  getCompanyFile(
    metadata: types.GetCompanyFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'get', metadata);
  }

  /**
   * Upload a company file
   *
   * @summary Upload Company File
   */
  uploadCompanyFile(
    metadata: types.UploadCompanyFileMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/files', 'post', metadata);
  }

  /**
   * Use this resource to request one of your existing custom company reports from the My
   * Reports or Manage Reports sections in the Reports tab. You can get the report number by
   * hovering over the report name and noting the ID from the URL. At present, only reports
   * from the My Reports or Manage Reports sections are supported. In the future we may
   * implement reports from the Standard Reports section if there is enough demand for it.
   * The report numbers used in this request are different in each company.
   *
   * @summary Get company report
   */
  getCompanyReport(
    metadata: types.GetCompanyReportMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/reports/{id}', 'get', metadata);
  }

  /**
   * Use this resource to request BambooHR generate a report. You must specify a type of
   * either "PDF", "XLS", "CSV", "JSON", or "XML". You must specify a list of fields to show
   * on the report. The list of fields is available here. The custom report will return
   * employees regardless of their status, "Active" or "Inactive". This differs from the UI,
   * which by default applies a quick filter to display only "Active" employees.
   *
   * @summary Request a custom report
   */
  requestCustomReport(
    body: types.RequestCustomReportBodyParam,
    metadata: types.RequestCustomReportMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/reports/custom', 'post', body, metadata);
  }

  /**
   * Returns a data structure representing all the table rows for a given employee and table
   * combination. The result is not sorted in any particular order.
   *
   * @summary Gets table rows for a given employee and table combination
   */
  getEmployeeTableRow(
    metadata: types.GetEmployeeTableRowMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{id}/tables/{table}', 'get', metadata);
  }

  /**
   * Adds a table row. If employee is currently on a pay schedule syncing with Trax Payroll,
   * or being added to one, the row cannot be added if they are missing any required fields
   * for that table. If the API user is adding a row on the compensation table, the row
   * cannot be added if they are missing any of the required employee fields (including
   * fields not on that table).
   *
   * @summary Adds a table row
   */
  addEmployeeTableRow(
    body: types.AddEmployeeTableRowBodyParam,
    metadata: types.AddEmployeeTableRowMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{id}/tables/{table}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Updates a table row. If employee is currently on a pay schedule syncing with Trax
   * Payroll, or being added to one, the row cannot be added if they are missing any required
   * fields for that table. If the API user is updating a row on the compensation table, the
   * row cannot be updated if they are missing any of the required employee fields (including
   * fields not on that table).
   *
   * @summary Updates a table row.
   */
  updateEmployeeTableRow(
    body: types.UpdateEmployeeTableRowBodyParam,
    metadata: types.UpdateEmployeeTableRowMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Deletes a table row
   *
   * @summary Deletes a table row
   */
  deleteEmployeeTableRowV1(
    metadata: types.DeleteEmployeeTableRowV1MetadataParam
  ): Promise<FetchResponse<200, types.DeleteEmployeeTableRowV1Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}',
      'delete',
      metadata
    );
  }

  /**
   * Updates a table row. Fundamentally the same as version 1 so choose a version and stay
   * with it unless other changes occur. Changes from version 1 are now minor with a few
   * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
   * date.
   *
   * @summary Updates a table row.
   */
  updateEmployeeTableRowV(
    body: types.UpdateEmployeeTableRowVBodyParam,
    metadata: types.UpdateEmployeeTableRowVMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/employees/{id}/tables/{table}/{rowId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Adds a table row. Fundamentally the same as version 1 so choose a version and stay with
   * it unless other changes occur. Changes from version 1 are now minor with a few
   * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
   * date.
   *
   * @summary Adds a table row
   */
  addEmployeeTableRowV1(
    body: types.AddEmployeeTableRowV1BodyParam,
    metadata: types.AddEmployeeTableRowV1MetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/employees/{id}/tables/{table}',
      'post',
      body,
      metadata
    );
  }

  /**
   * This API is merely an optimization to avoid downloading all table data for all
   * employees. When you use this API you will provide a timestamp and the results will be
   * limited to just the employees that have changed since the time you provided. This API
   * operates on an employee-last-changed-timestamp, which means that a change in ANY field
   * in the employee record will cause ALL of that employees table rows to show up via this
   * API.
   *
   * @summary Gets all updated employee table data
   */
  getChangedEmployeeTableData(
    metadata: types.GetChangedEmployeeTableDataMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/changed/tables/{table}', 'get', metadata);
  }

  /**
   * This endpoint can help with discovery of fields that are available in an account.
   *
   * @summary Get a list of fields
   */
  metadataGetAListOfFields(
    metadata: types.MetadataGetAListOfFieldsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/fields/', 'get', metadata);
  }

  /**
   * This endpoint can help discover table fields available in your BambooHR account.
   *
   * @summary Get a list of tabular fields
   */
  metadataGetAListOfTabularFields(
    metadata: types.MetadataGetAListOfTabularFieldsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/tables/', 'get', metadata);
  }

  /**
   * This endpoint will return details for all list fields. Lists that can be edited will
   * have the "manageable" attribute set to yes. Lists with the "multiple" attribute set to
   * yes are fields that can have multiple values. Options with the "archived" attribute set
   * to yes should not appear as current options, but are included so that historical data
   * can reference the value.
   *
   * @summary Get details for list fields
   */
  metadataGetDetailsForListFields(
    metadata: types.MetadataGetDetailsForListFieldsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/lists/', 'get', metadata);
  }

  /**
   * This resource accepts one or more options. To update an option, specify an ID. You may
   * also remove an option from the list of current values by archiving the value. To create
   * a new option, do not specify an "id" attribute.
   *
   * @summary Add or Update Values for List Fields
   */
  metadataAddOrUpdateValuesForListFields(
    body: types.MetadataAddOrUpdateValuesForListFieldsBodyParam,
    metadata: types.MetadataAddOrUpdateValuesForListFieldsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/lists/{listFieldId}', 'put', body, metadata);
  }

  /**
   * Get a List of Users
   *
   */
  getAListOfUsers(
    metadata: types.GetAListOfUsersMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/users/', 'get', metadata);
  }

  /**
   * This endpoint gets a list of time off types.
   *
   * @summary Get Time Off Types
   */
  getTimeOffTypes(
    metadata: types.GetTimeOffTypesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/time_off/types/', 'get', metadata);
  }

  /**
   * This endpoint gets a list of time off policies.
   *
   * @summary Get Time Off Policies
   */
  getTimeOffPolicies(
    metadata: types.GetTimeOffPoliciesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/meta/time_off/policies/', 'get', metadata);
  }

  /**
   * Get Time Off Requests
   *
   */
  timeOffGetTimeOffRequests(
    metadata: types.TimeOffGetTimeOffRequestsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/time_off/requests/', 'get', metadata);
  }

  /**
   * A time off request is an entity that describes the decision making process for approving
   * time off. Once a request has been created, a history entry can be created documenting
   * the actual use of time off.
   *
   * @summary Add a Time Off Request
   */
  timeOffAddATimeOffRequest(
    body: types.TimeOffAddATimeOffRequestBodyParam,
    metadata: types.TimeOffAddATimeOffRequestMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/request',
      'put',
      body,
      metadata
    );
  }

  /**
   * This endpoint allows you to change the status of a request in the system. You can use
   * this to approve, deny, or cancel a time off request.
   *
   * @summary Change a Request Status
   */
  timeOffChangeARequestStatus(
    body: types.TimeOffChangeARequestStatusBodyParam,
    metadata: types.TimeOffChangeARequestStatusMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_off/requests/{requestId}/status',
      'put',
      body,
      metadata
    );
  }

  /**
   * To use this API make an HTTP PUT where the body of the request is the JSON documented
   * below. A new time off history item will be inserted into the database. On success, a 201
   * Created code is returned and the "Location" header of the response will contain a URL
   * that identifies the new history item.
   *
   * @summary Add a Time Off History Item For Time Off Request
   */
  timeOffAddATimeOffHistoryItemForTimeOffRequest(
    body: types.TimeOffAddATimeOffHistoryItemForTimeOffRequestBodyParam,
    metadata: types.TimeOffAddATimeOffHistoryItemForTimeOffRequestMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/history/',
      'put',
      body,
      metadata
    );
  }

  /**
   * To use this API make an HTTP PUT where the body of the request is the JSON documented
   * below. A time off balance adjustment will be inserted into the database. On success, a
   * 201 Created code is returned and the "Location" header of the response will contain a
   * URL that identifies the new history item.
   *
   * @summary Adjust Time Off Balance
   */
  timeOffAdjustTimeOffBalance(
    body: types.TimeOffAdjustTimeOffBalanceBodyParam,
    metadata: types.TimeOffAdjustTimeOffBalanceMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/balance_adjustment/',
      'put',
      body,
      metadata
    );
  }

  /**
   * List Time Off Policies for Employee
   *
   */
  timeOffListTimeOffPoliciesForEmployee(
    metadata: types.TimeOffListTimeOffPoliciesForEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/policies',
      'get',
      metadata
    );
  }

  /**
   * To use this API make an HTTP PUT where the body of the request is the JSON documented
   * below. A time off policy will be assigned to the employee with accruals starting on the
   * date specified. A null start date will remove the assignment. On success, a 200 Success
   * code is returned and the content of the response will be the same as the List Time off
   * Policies API.
   *
   * @summary Assign Time Off Policies for an Employee
   */
  timeOffAssignTimeOffPoliciesForAnEmployee(
    body: types.TimeOffAssignTimeOffPoliciesForAnEmployeeBodyParam,
    metadata: types.TimeOffAssignTimeOffPoliciesForAnEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/policies',
      'put',
      body,
      metadata
    );
  }

  /**
   * List Time Off Policies for Employee, Version 1.1
   *
   */
  timeOffV11ListTimeOffPoliciesForEmployee(
    metadata: types.TimeOffV11ListTimeOffPoliciesForEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies',
      'get',
      metadata
    );
  }

  /**
   * To use this API make an HTTP PUT where the body of the request is the JSON documented
   * below. A time off policy will be assigned to the employee with accruals starting on the
   * date specified. On success, a 200 Success code is returned and the content of the
   * response will be the same as the List Time off Policies API.
   *
   * @summary Assign Time Off Policies for an Employee, Version 1.1
   */
  timeOffV11AssignTimeOffPoliciesForAnEmployee(
    body: types.TimeOffV11AssignTimeOffPoliciesForAnEmployeeBodyParam,
    metadata: types.TimeOffV11AssignTimeOffPoliciesForAnEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies',
      'put',
      body,
      metadata
    );
  }

  /**
   * This endpoint will sum future time off accruals, scheduled time off, and carry-over
   * events to produce estimates for the anticipated time off balance on a given date in the
   * future.
   *
   * @summary Estimate Future Time Off Balances
   */
  estimateFutureTimeOffBalances(
    metadata: types.EstimateFutureTimeOffBalancesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/time_off/calculator',
      'get',
      metadata
    );
  }

  /**
   * This endpoint will return a list, sorted by date, of employees who will be out, and
   * company holidays, for a period of time.
   *
   * @summary Get a list of Who's Out
   */
  getAListOfWhoSOut(
    metadata: types.GetAListOfWhoSOutMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/time_off/whos_out/', 'get', metadata);
  }

  /**
   * Get an employee photo
   *
   * @summary Get an employee photo
   */
  getEmployeePhoto(
    metadata: types.GetEmployeePhotoMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employees/{employeeId}/photo/{size}',
      'get',
      metadata
    );
  }

  /**
   * Store a new employee photo
   *
   * @summary Store a new employee photo
   */
  uploadEmployeePhoto(
    metadata: types.UploadEmployeePhotoMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/photo', 'post', metadata);
  }

  /**
   * This API allows for efficient syncing of employee data. When you use this API you will
   * provide a timestamp and the results will be limited to just the employees that have
   * changed since the time you provided. This API operates on an
   * employee-last-changed-timestamp, which means that a change in ANY individual field in
   * the employee record, as well as any change to the employment status, job info, or
   * compensation tables, will cause that employee to be returned via this API.
   *
   * @summary Gets all updated employee IDs
   */
  getChangedEmployeeIds(
    metadata: types.GetChangedEmployeeIdsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employees/changed', 'get', metadata);
  }

  /**
   * User Login
   *
   * @summary User Login
   */
  login(
    body: types.LoginFormDataParam,
    metadata: types.LoginMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/login', 'post', body, metadata);
  }

  /**
   * Get benefit deduction types
   *
   * @summary Get benefit deduction types
   */
  getBenefitDeductionTypes(
    metadata: types.GetBenefitDeductionTypesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/benefits/settings/deduction_types/all',
      'get',
      metadata
    );
  }

  /**
   * Get a list of company benefits
   *
   * @summary Get a list of company benefits
   */
  getCompanyBenefits(
    metadata: types.GetCompanyBenefitsMetadataParam
  ): Promise<FetchResponse<200, types.GetCompanyBenefitsResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit', 'get', metadata);
  }

  /**
   * Add a new company benefit
   *
   * @summary Add a new company benefit
   */
  addNewCompanyBenefit(
    body: types.AddNewCompanyBenefitFormDataParam,
    metadata: types.AddNewCompanyBenefitMetadataParam
  ): Promise<FetchResponse<200, types.AddNewCompanyBenefitResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit', 'post', body, metadata);
  }

  /**
   * Get a company benefit
   *
   * @summary Get a company benefit
   */
  getCompanyBenefit(
    metadata: types.GetCompanyBenefitMetadataParam
  ): Promise<FetchResponse<200, types.GetCompanyBenefitResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/{id}', 'get', metadata);
  }

  /**
   * Update a company benefit
   *
   * @summary Update a company benefit
   */
  updateCompanyBenefit(
    body: types.UpdateCompanyBenefitBodyParam,
    metadata: types.UpdateCompanyBenefitMetadataParam
  ): Promise<FetchResponse<200, types.UpdateCompanyBenefitResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/benefit/company_benefit/{id}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete a company benefit
   *
   * @summary Delete a company benefit
   */
  deleteCompanyBenefit(
    metadata: types.DeleteCompanyBenefitMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/{id}', 'delete', metadata);
  }

  /**
   * Get a list of company benefit types
   *
   * @summary Get a list of company benefit types
   */
  getCompanyBenefitTypes(
    metadata: types.GetCompanyBenefitTypesMetadataParam
  ): Promise<FetchResponse<200, types.GetCompanyBenefitTypesResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/type', 'get', metadata);
  }

  /**
   * Get a list of employee benefits
   *
   * @summary Get a list of employee benefits
   */
  getEmployeeBenefit(
    body: types.GetEmployeeBenefitBodyParam,
    metadata: types.GetEmployeeBenefitMetadataParam
  ): Promise<FetchResponse<200, types.GetEmployeeBenefitResponse200>>;
  /**
   * Get a list of employee benefits
   *
   * @summary Get a list of employee benefits
   */
  getEmployeeBenefit(
    metadata: types.GetEmployeeBenefitMetadataParam
  ): Promise<FetchResponse<200, types.GetEmployeeBenefitResponse200>>;
  /**
   * Get a list of employee benefits
   *
   * @summary Get a list of employee benefits
   */
  getEmployeeBenefit(
    body?: types.GetEmployeeBenefitBodyParam | types.GetEmployeeBenefitMetadataParam,
    metadata?: types.GetEmployeeBenefitMetadataParam
  ): Promise<FetchResponse<200, types.GetEmployeeBenefitResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/employee_benefit', 'get', body, metadata);
  }

  /**
   * Add an employee benefit
   *
   * @summary Add an employee benefit
   */
  postEmployeeBenefit(
    body: types.PostEmployeeBenefitBodyParam,
    metadata: types.PostEmployeeBenefitMetadataParam
  ): Promise<FetchResponse<200, types.PostEmployeeBenefitResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/benefit/employee_benefit', 'post', body, metadata);
  }

  /**
   * Get benefit coverages
   *
   * @summary Get benefit coverages
   */
  getBenefitCoverages(
    metadata: types.GetBenefitCoveragesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitcoverages', 'get', metadata);
  }

  /**
   * Get a benefit coverage
   *
   * @summary Get a benefit coverage
   */
  getBenefitCoverage(
    metadata: types.GetBenefitCoverageMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitcoverages/{id}', 'get', metadata);
  }

  /**
   * Get employee dependent
   *
   * @summary Get employee dependent
   */
  getEmployeeDependent(
    metadata: types.GetEmployeeDependentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employeedependents/{id}', 'get', metadata);
  }

  /**
   * This API allows you to change the information for a given dependent ID.
   *
   * @summary Update an employee dependent
   */
  updateEmployeeDependent(
    body: types.UpdateEmployeeDependentBodyParam,
    metadata: types.UpdateEmployeeDependentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employeedependents/{id}', 'put', body, metadata);
  }

  /**
   * Get all employee dependents
   *
   * @summary Get all employee dependents
   */
  getEmployeeDependents(
    metadata: types.GetEmployeeDependentsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employeedependents', 'get', metadata);
  }

  /**
   * Adds an employee dependent
   *
   * @summary Add an employee dependent
   */
  addEmployeeDependent(
    body: types.AddEmployeeDependentBodyParam,
    metadata: types.AddEmployeeDependentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employeedependents', 'post', body, metadata);
  }

  /**
   * Get benefit plans
   *
   * @summary Get benefit plans
   */
  getBenefitPlans(
    metadata: types.GetBenefitPlansMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplans', 'get', metadata);
  }

  /**
   * Add a benefit plan
   *
   * @summary Add a benefit plan
   */
  addBenefitPlan(
    body: types.AddBenefitPlanBodyParam,
    metadata: types.AddBenefitPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplans', 'post', body, metadata);
  }

  /**
   * Get a benefit plan
   *
   * @summary Get a benefit plan
   */
  getBenefitPlan(
    metadata: types.GetBenefitPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplans/{id}', 'get', metadata);
  }

  /**
   * Update a benefit plan
   *
   * @summary Update a benefit plan
   */
  updateBenefitPlan(
    body: types.UpdateBenefitPlanBodyParam,
    metadata: types.UpdateBenefitPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplans/{id}', 'put', body, metadata);
  }

  /**
   * Get a benefit plan coverage
   *
   * @summary Get a benefit plan coverage
   */
  getBenefitPlanCoverage(
    metadata: types.GetBenefitPlanCoverageMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplancoverages/{id}', 'get', metadata);
  }

  /**
   * Update a benefit plan coverage
   *
   * @summary Update a benefit plan coverage
   */
  updateBenefitPlanCoverage(
    body: types.UpdateBenefitPlanCoverageBodyParam,
    metadata: types.UpdateBenefitPlanCoverageMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplancoverages/{id}', 'put', body, metadata);
  }

  /**
   * Get benefit plan coverages
   *
   * @summary Get benefit coverages
   */
  getBenefitPlanCoverages(
    metadata: types.GetBenefitPlanCoveragesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplancoverages', 'get', metadata);
  }

  /**
   * Add a benefit plan coverage
   *
   * @summary Add a benefit plan coverage
   */
  addBenefitPlanCoverage(
    body: types.AddBenefitPlanCoverageBodyParam,
    metadata: types.AddBenefitPlanCoverageMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitplancoverages', 'post', body, metadata);
  }

  /**
   * Get benefit groups
   *
   * @summary Get benefit groups
   */
  getBenefitGroups(
    metadata: types.GetBenefitGroupsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroups', 'get', metadata);
  }

  /**
   * Add a benefit group
   *
   * @summary Add a benefit group
   */
  addBenefitGroup(
    body: types.AddBenefitGroupBodyParam,
    metadata: types.AddBenefitGroupMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroups', 'post', body, metadata);
  }

  /**
   * Get a benefit group
   *
   * @summary Get a benefit group
   */
  getBenefitGroup(
    metadata: types.GetBenefitGroupMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroups/{id}', 'get', metadata);
  }

  /**
   * Update a benefit group
   *
   * @summary Update a benefit group
   */
  updateBenefitGroup(
    body: types.UpdateBenefitGroupBodyParam,
    metadata: types.UpdateBenefitGroupMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroups/{id}', 'put', body, metadata);
  }

  /**
   * Get benefit group employees
   *
   * @summary Get benefit group employees
   */
  getBenefitGroupEmployees(
    metadata: types.GetBenefitGroupEmployeesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupemployees', 'get', metadata);
  }

  /**
   * Add a benefit group employee
   *
   * @summary Add a benefit group employee
   */
  addBenefitGroupEmployee(
    body: types.AddBenefitGroupEmployeeBodyParam,
    metadata: types.AddBenefitGroupEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupemployees', 'post', body, metadata);
  }

  /**
   * Get benefit group employee
   *
   * @summary Get benefit group employee
   */
  getBenefitGroupEmployee(
    metadata: types.GetBenefitGroupEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupemployees/{id}', 'get', metadata);
  }

  /**
   * Get benefit group plans
   *
   * @summary Get benefit group plans
   */
  getBenefitGroupPlans(
    metadata: types.GetBenefitGroupPlansMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplans', 'get', metadata);
  }

  /**
   * Add a benefit group plan
   *
   * @summary Add a benefit group plan
   */
  addBenefitGroupPlan(
    body: types.AddBenefitGroupPlanBodyParam,
    metadata: types.AddBenefitGroupPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplans', 'post', body, metadata);
  }

  /**
   * Get benefit group plan
   *
   * @summary Get benefit group plan
   */
  getBenefitGroupPlan(
    metadata: types.GetBenefitGroupPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplans/{id}', 'get', metadata);
  }

  /**
   * Get benefit group plan costs
   *
   * @summary Get benefit group plan costs
   */
  getBenefitGroupPlanCosts(
    metadata: types.GetBenefitGroupPlanCostsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplancosts', 'get', metadata);
  }

  /**
   * Add a benefit group plan cost
   *
   * @summary Add a benefit group plan cost
   */
  addBenefitGroupPlanCost(
    body: types.AddBenefitGroupPlanCostBodyParam,
    metadata: types.AddBenefitGroupPlanCostMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplancosts', 'post', body, metadata);
  }

  /**
   * Get benefit group plan cost
   *
   * @summary Get benefit group plan cost
   */
  getBenefitGroupPlanCost(
    metadata: types.GetBenefitGroupPlanCostMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/benefitgroupplancosts/{id}', 'get', metadata);
  }

  /**
   * Get employee deductions by benefit plan
   *
   * @summary Get employee deductions by benefit plan
   */
  getEmployeeDeductionsByPlan(
    metadata: types.GetEmployeeDeductionsByPlanMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee/deductions/{id}', 'get', metadata);
  }

  /**
   * Get benefit plan deductions by employee
   *
   * @summary Get benefit plan deductions by employee
   */
  getPlanDeductionsByEmployee(
    metadata: types.GetPlanDeductionsByEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee/plans/{id}', 'get', metadata);
  }

  /**
   * Get benefit deductions for employee
   *
   * @summary Get benefit deductions for employee
   */
  getPayrollDeductionsForEmployee(
    metadata: types.GetPayrollDeductionsForEmployeeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/payroll/deductions/{id}', 'get', metadata);
  }

  /**
   * Get an employee's default withholdings
   *
   * @summary Get an employee's default withholdings
   */
  getEmployeeWithholdings(
    metadata: types.GetEmployeeWithholdingsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'get', metadata);
  }

  /**
   * Add an employee's default withholdings
   *
   * @summary Add an employee's default withholdings
   */
  addEmployeeWithholding(
    body: types.AddEmployeeWithholdingBodyParam,
    metadata: types.AddEmployeeWithholdingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'post', body, metadata);
  }

  /**
   * Clear an employee's default withholdings
   *
   * @summary Clear an employee's default withholdings
   */
  clearEmployeeWithholding(
    metadata: types.ClearEmployeeWithholdingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'delete', metadata);
  }

  /**
   * Get an employee's direct deposit information
   *
   * @summary Get an employee's direct deposit information
   */
  getEmployeeDepositAccounts(
    metadata: types.GetEmployeeDepositAccountsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}',
      'get',
      metadata
    );
  }

  /**
   * Add an employee's direct deposit information
   *
   * @summary Add an employee's direct deposit information
   */
  addEmployeeDeposit(
    body: types.AddEmployeeDepositBodyParam,
    metadata: types.AddEmployeeDepositMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Clear an employee's direct deposit information
   *
   * @summary Clear an employee's direct deposit information
   */
  clearEmployeeDeposit(
    metadata: types.ClearEmployeeDepositMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}',
      'delete',
      metadata
    );
  }

  /**
   * Get an employee's unpaid paystubs
   *
   * @summary Get an employee's unpaid paystubs
   */
  getEmployeeUnpaidPaystubs(
    metadata: types.GetEmployeeUnpaidPaystubsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}', 'get', metadata);
  }

  /**
   * Clear an employee's unpaid paystubs
   *
   * @summary Clear an employee's unpaid paystubs
   */
  clearEmployeeUnpaidPaystubs(
    metadata: types.ClearEmployeeUnpaidPaystubsMetadataParam
  ): Promise<
    | FetchResponse<400, types.ClearEmployeeUnpaidPaystubsResponse400>
    | FetchResponse<403, types.ClearEmployeeUnpaidPaystubsResponse403>
  > {
    return this.core.fetch(
      '/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}',
      'delete',
      metadata
    );
  }

  /**
   * Add an employee's unpaid paystubs
   *
   * @summary Add an employee's unpaid paystubs
   */
  addEmployeeUnpaidPaystubs(
    body: types.AddEmployeeUnpaidPaystubsBodyParam,
    metadata: types.AddEmployeeUnpaidPaystubsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_unpaid_pay_stubs', 'post', body, metadata);
  }

  /**
   * Get an employee's paystub
   *
   * @summary Get an employee's paystub
   */
  getEmployeePaystub(
    metadata: types.GetEmployeePaystubMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_pay_stub/{id}', 'get', metadata);
  }

  /**
   * Delete an employee's paystub
   *
   * @summary Delete an employee's paystub
   */
  clearEmployeePaystub(
    metadata: types.ClearEmployeePaystubMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_pay_stub/{id}', 'delete', metadata);
  }

  /**
   * Add an employee's paystub
   *
   * @summary Add an employee's paystub
   */
  addEmployeePaystub(
    body: types.AddEmployeePaystubBodyParam,
    metadata: types.AddEmployeePaystubMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/employee_pay_stub', 'post', body, metadata);
  }

  /**
   * Get a time tracking record
   *
   * @summary Get a time tracking record
   */
  getTimetrackingRecord(
    metadata: types.GetTimetrackingRecordMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/timetracking/record/{id}', 'get', metadata);
  }

  /**
   * Add a time tracking record
   *
   * @summary Add a time tracking record
   */
  addTimetracking(
    body: types.AddTimetrackingBodyParam,
    metadata: types.AddTimetrackingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/timetracking/add', 'post', body, metadata);
  }

  /**
   * Adjust a time tracking record
   *
   * @summary Adjust a time tracking record
   */
  adjustTimetracking(
    body: types.AdjustTimetrackingBodyParam,
    metadata: types.AdjustTimetrackingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/timetracking/adjust', 'put', body, metadata);
  }

  /**
   * Delete a time tracking record
   *
   * @summary Delete a time tracking record
   */
  deleteTimetracking(
    metadata: types.DeleteTimetrackingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/timetracking/delete/{id}', 'delete', metadata);
  }

  /**
   * Bulk Add/Adjust time tracking records
   *
   * @summary Bulk Add/Adjust time tracking records
   */
  bulkRecordTimetracking(
    body: types.BulkRecordTimetrackingBodyParam,
    metadata: types.BulkRecordTimetrackingMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/timetracking/record', 'post', body, metadata);
  }

  /**
   * Approve employee timesheets
   *
   * @summary Approve employee timesheets
   */
  approveEmployeeTimesheets(
    body: types.ApproveEmployeeTimesheetsBodyParam,
    metadata: types.ApproveEmployeeTimesheetsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/timesheets/approve',
      'post',
      body,
      metadata
    );
  }

  /**
   * Approve timesheets for employees that are currently clocked in
   *
   * @summary Approve timesheets for employees that are currently clocked in
   */
  clockOutAndApproveEmployeeTimesheets(
    body: types.ClockOutAndApproveEmployeeTimesheetsBodyParam,
    metadata: types.ClockOutAndApproveEmployeeTimesheetsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/timesheets/clock_out_and_approve',
      'post',
      body,
      metadata
    );
  }

  /**
   * Get timesheets by ids
   *
   * @summary Get timesheets by ids
   */
  getTimesheets(
    body: types.GetTimesheetsBodyParam,
    metadata: types.GetTimesheetsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/{companyDomain}/v1/time_tracking/timesheets', 'get', body, metadata);
  }

  /**
   * Clock in (employee id optional)
   *
   * @summary Clock in (employee id optional)
   */
  clockIn(
    body: types.ClockInBodyParam,
    metadata: types.ClockInMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock in (employee id optional)
   *
   * @summary Clock in (employee id optional)
   */
  clockIn(metadata: types.ClockInMetadataParam): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock in (employee id optional)
   *
   * @summary Clock in (employee id optional)
   */
  clockIn(
    body?: types.ClockInBodyParam | types.ClockInMetadataParam,
    metadata?: types.ClockInMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/clock_in/{employeeId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Clock out (employee id optional)
   *
   * @summary Clock out (employee id optional)
   */
  clockOut(
    body: types.ClockOutBodyParam,
    metadata: types.ClockOutMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock out (employee id optional)
   *
   * @summary Clock out (employee id optional)
   */
  clockOut(metadata: types.ClockOutMetadataParam): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock out (employee id optional)
   *
   * @summary Clock out (employee id optional)
   */
  clockOut(
    body?: types.ClockOutBodyParam | types.ClockOutMetadataParam,
    metadata?: types.ClockOutMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/clock_out/{employeeId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Store daily entries
   *
   * @summary Store daily entries
   */
  storeDailyEntries(
    body: types.StoreDailyEntriesBodyParam,
    metadata: types.StoreDailyEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Store daily entries
   *
   * @summary Store daily entries
   */
  storeDailyEntries(
    metadata: types.StoreDailyEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Store daily entries
   *
   * @summary Store daily entries
   */
  storeDailyEntries(
    body?: types.StoreDailyEntriesBodyParam | types.StoreDailyEntriesMetadataParam,
    metadata?: types.StoreDailyEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/daily_entries',
      'post',
      body,
      metadata
    );
  }

  /**
   * Store clock entries
   *
   * @summary Store clock entries
   */
  storeClockEntries(
    body: types.StoreClockEntriesBodyParam,
    metadata: types.StoreClockEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Store clock entries
   *
   * @summary Store clock entries
   */
  storeClockEntries(
    metadata: types.StoreClockEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Store clock entries
   *
   * @summary Store clock entries
   */
  storeClockEntries(
    body?: types.StoreClockEntriesBodyParam | types.StoreClockEntriesMetadataParam,
    metadata?: types.StoreClockEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/clock_entries',
      'post',
      body,
      metadata
    );
  }

  /**
   * Delete clock entries
   *
   * @summary Delete clock entries
   */
  deleteClockEntries(
    body: types.DeleteClockEntriesBodyParam,
    metadata: types.DeleteClockEntriesMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/clock_entries',
      'delete',
      body,
      metadata
    );
  }

  /**
   * Get a timesheet for an employee
   *
   * @summary Get a timesheet for an employee
   */
  getEmployeeTimesheet(
    metadata: types.GetEmployeeTimesheetMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/timesheet/{timesheetId}',
      'get',
      metadata
    );
  }

  /**
   * Get a daily entry
   *
   * @summary Get a daily entry
   */
  getDailyEntry(
    metadata: types.GetDailyEntryMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/daily_entries/{id}',
      'get',
      metadata
    );
  }

  /**
   * Get a clock entry
   *
   * @summary Get a clock entry
   */
  getClockEntry(
    metadata: types.GetClockEntryMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_entries/{id}',
      'get',
      metadata
    );
  }

  /**
   * Is employee clocked in?
   *
   * @summary Is employee clocked in?
   */
  isEmployeeClockedIn(
    metadata: types.IsEmployeeClockedInMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/is_clocked_in',
      'get',
      metadata
    );
  }

  /**
   * Clock out an employee at a specific time
   *
   * @summary Clock out an employee at a specific time
   */
  clockOutEmployeeAtSpecificTime(
    body: types.ClockOutEmployeeAtSpecificTimeBodyParam,
    metadata: types.ClockOutEmployeeAtSpecificTimeMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock out an employee at a specific time
   *
   * @summary Clock out an employee at a specific time
   */
  clockOutEmployeeAtSpecificTime(
    metadata: types.ClockOutEmployeeAtSpecificTimeMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Clock out an employee at a specific time
   *
   * @summary Clock out an employee at a specific time
   */
  clockOutEmployeeAtSpecificTime(
    body?:
      | types.ClockOutEmployeeAtSpecificTimeBodyParam
      | types.ClockOutEmployeeAtSpecificTimeMetadataParam,
    metadata?: types.ClockOutEmployeeAtSpecificTimeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_out/datetime',
      'post',
      body,
      metadata
    );
  }

  /**
   * Edit information on the currently clocked in entry
   *
   * @summary Edit information on the currently clocked in entry
   */
  clockInData(
    body: types.ClockInDataBodyParam,
    metadata: types.ClockInDataMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Edit information on the currently clocked in entry
   *
   * @summary Edit information on the currently clocked in entry
   */
  clockInData(metadata: types.ClockInDataMetadataParam): Promise<FetchResponse<number, unknown>>;
  /**
   * Edit information on the currently clocked in entry
   *
   * @summary Edit information on the currently clocked in entry
   */
  clockInData(
    body?: types.ClockInDataBodyParam | types.ClockInDataMetadataParam,
    metadata?: types.ClockInDataMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_in/data',
      'post',
      body,
      metadata
    );
  }

  /**
   * Get projects an employee can log time to
   *
   * @summary Get projects an employee can log time to
   */
  timeTrackingEmployeeProjects(
    metadata: types.TimeTrackingEmployeeProjectsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects',
      'get',
      metadata
    );
  }

  /**
   * Get tasks for a project
   *
   * @summary Get tasks for a project
   */
  timeTrackingProjectTasks(
    metadata: types.TimeTrackingProjectTasksMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects/{projectId}/tasks',
      'get',
      metadata
    );
  }

  /**
   * Provides a list of all goals, type counts, goal comment counts, and employees shared
   * with goals for the given employee. This version of the endpoint will not return any
   * goals with milestones. Milestone functionality for this endpoint begins in version 1.2.
   *
   * @summary Get All Aggregate Goal Info
   */
  getGoalsAggregateV1(
    metadata: types.GetGoalsAggregateV1MetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsAggregateV1Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/aggregate',
      'get',
      metadata
    );
  }

  /**
   * Provides a list of all goals, type counts, filter actions, goal comment counts, and
   * employees shared with goals for the given employee. Difference from Version 1: Returns
   * goals in the closed filter and provides filter actions for each filter. This version of
   * the endpoint will not return any goals with milestones. Milestone functionality for this
   * endpoint begins in version 1.2.
   *
   * @summary Get All Aggregate Goal Info, Version 1.1
   */
  getGoalsAggregateV11(
    metadata: types.GetGoalsAggregateV11MetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsAggregateV11Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/aggregate',
      'get',
      metadata
    );
  }

  /**
   * Provides a list of all goals, type counts, filter actions, goal comment counts, and
   * employees shared with goals for the given employee. Difference from Version 1.1: Returns
   * all goals, including goals that contain milestones.
   *
   * @summary Get All Aggregate Goal Info, Version 1.2
   */
  getGoalsAggregateV12(
    metadata: types.GetGoalsAggregateV12MetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsAggregateV12Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1_2/performance/employees/{employeeId}/goals/aggregate',
      'get',
      metadata
    );
  }

  /**
   * Provides goal information, goal comments, and employees shared with goals or who have
   * commented on the given goal.
   *
   * @summary Get Aggregate Goal Info
   */
  getGoalAggregate(
    metadata: types.GetGoalAggregateMetadataParam
  ): Promise<FetchResponse<200, types.GetGoalAggregateResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/aggregate',
      'get',
      metadata
    );
  }

  /**
   * Updates which employees this goal is shared with.
   *
   * @summary Update Goal Sharing
   */
  putGoalSharedWith(
    body: types.PutGoalSharedWithBodyParam,
    metadata: types.PutGoalSharedWithMetadataParam
  ): Promise<FetchResponse<200, types.PutGoalSharedWithResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/sharedWith',
      'put',
      body,
      metadata
    );
  }

  /**
   * Update Goal Progress
   *
   */
  putGoalProgress(
    body: types.PutGoalProgressBodyParam,
    metadata: types.PutGoalProgressMetadataParam
  ): Promise<FetchResponse<200, types.PutGoalProgressResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/progress',
      'put',
      body,
      metadata
    );
  }

  /**
   * Get the number of goals per status for an employee.
   *
   * @summary Get Goal Status Counts
   */
  getGoalsFiltersV1(
    metadata: types.GetGoalsFiltersV1MetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsFiltersV1Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/filters',
      'get',
      metadata
    );
  }

  /**
   * Get the number of goals per status for an employee. Difference from Version 1: Returns
   * goals in the closed filter and provides filter actions for each filter.
   *
   * @summary Get Goal Status Counts, Version 1.1
   */
  getGoalsFiltersV11(
    metadata: types.GetGoalsFiltersV11MetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsFiltersV11Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/filters',
      'get',
      metadata
    );
  }

  /**
   * Determine if the API user has permission to create a goal for this employee.
   *
   * @summary Can Create a Goal
   */
  getCanCreateGoal(
    metadata: types.GetCanCreateGoalMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/canCreateGoals',
      'get',
      metadata
    );
  }

  /**
   * Get goals for an employee.
   *
   * @summary Get Goals
   */
  getGoals(
    metadata: types.GetGoalsMetadataParam
  ): Promise<FetchResponse<200, types.GetGoalsResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals',
      'get',
      metadata
    );
  }

  /**
   * Create a new goal for an employee.
   *
   * @summary Create Goal
   */
  postGoal(
    body: types.PostGoalBodyParam,
    metadata: types.PostGoalMetadataParam
  ): Promise<FetchResponse<201, types.PostGoalResponse201>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals',
      'post',
      body,
      metadata
    );
  }

  /**
   * Update a goal. This version will not update a goal to contain milestones, that
   * functionality is added in version 1.1
   *
   * @summary Update Goal
   */
  putGoalV1(
    body: types.PutGoalV1BodyParam,
    metadata: types.PutGoalV1MetadataParam
  ): Promise<FetchResponse<200, types.PutGoalV1Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete a goal.
   *
   * @summary Delete Goal
   */
  deleteGoal(metadata: types.DeleteGoalMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}',
      'delete',
      metadata
    );
  }

  /**
   * Update a goal. Version 1.1 allows the updating of the milestones contained within the
   * goal, unlike Version 1.
   *
   * @summary Update Goal, V1.1
   */
  putGoalV11(
    body: types.PutGoalV11BodyParam,
    metadata: types.PutGoalV11MetadataParam
  ): Promise<FetchResponse<200, types.PutGoalV11Response200>> {
    return this.core.fetch(
      '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/{goalId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Close a goal.
   *
   * @summary Close Goal
   */
  postCloseGoal(
    body: types.PostCloseGoalBodyParam,
    metadata: types.PostCloseGoalMetadataParam
  ): Promise<FetchResponse<201, types.PostCloseGoalResponse201>>;
  /**
   * Close a goal.
   *
   * @summary Close Goal
   */
  postCloseGoal(
    metadata: types.PostCloseGoalMetadataParam
  ): Promise<FetchResponse<201, types.PostCloseGoalResponse201>>;
  /**
   * Close a goal.
   *
   * @summary Close Goal
   */
  postCloseGoal(
    body?: types.PostCloseGoalBodyParam | types.PostCloseGoalMetadataParam,
    metadata?: types.PostCloseGoalMetadataParam
  ): Promise<FetchResponse<201, types.PostCloseGoalResponse201>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/close',
      'post',
      body,
      metadata
    );
  }

  /**
   * Reopen a goal.
   *
   * @summary Reopen a Goal
   */
  postReopenGoal(
    metadata: types.PostReopenGoalMetadataParam
  ): Promise<FetchResponse<201, types.PostReopenGoalResponse201>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/reopen',
      'post',
      metadata
    );
  }

  /**
   * Provides a list of employees with whom the specified employee's goals may be shared.
   *
   * @summary Available Goal Sharing Options
   */
  getGoalsShareOptions(
    metadata: types.GetGoalsShareOptionsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/shareOptions',
      'get',
      metadata
    );
  }

  /**
   * Get alignable goal options for an employee.
   *
   * @summary Alignable Goal Options
   */
  getGoalsAlignmentOptions(
    body: types.GetGoalsAlignmentOptionsBodyParam,
    metadata: types.GetGoalsAlignmentOptionsMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Get alignable goal options for an employee.
   *
   * @summary Alignable Goal Options
   */
  getGoalsAlignmentOptions(
    metadata: types.GetGoalsAlignmentOptionsMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  /**
   * Get alignable goal options for an employee.
   *
   * @summary Alignable Goal Options
   */
  getGoalsAlignmentOptions(
    body?: types.GetGoalsAlignmentOptionsBodyParam | types.GetGoalsAlignmentOptionsMetadataParam,
    metadata?: types.GetGoalsAlignmentOptionsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/alignmentOptions',
      'get',
      body,
      metadata
    );
  }

  /**
   * Get comments for a goal.
   *
   * @summary Get Goal Comments
   */
  getGoalComments(
    metadata: types.GetGoalCommentsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments',
      'get',
      metadata
    );
  }

  /**
   * Create a new goal comment.
   *
   * @summary Create Goal Comment
   */
  postGoalComment(
    body: types.PostGoalCommentBodyParam,
    metadata: types.PostGoalCommentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments',
      'post',
      body,
      metadata
    );
  }

  /**
   * Update a goal comment.
   *
   * @summary Update Goal Comment
   */
  putGoalComment(
    body: types.PutGoalCommentBodyParam,
    metadata: types.PutGoalCommentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete a goal comment.
   *
   * @summary Delete Goal Comment
   */
  deleteGoalComment(
    metadata: types.DeleteGoalCommentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}',
      'delete',
      metadata
    );
  }

  /**
   * Get a list of job summaries. The owner of the API key used must have access to ATS
   * settings. Combine as many different optional parameter filters as you like.
   *
   * @summary Get Job Summaries
   */
  getJobSummaries(
    metadata: types.GetJobSummariesMetadataParam
  ): Promise<FetchResponse<200, types.GetJobSummariesResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/applicant_tracking/jobs', 'get', metadata);
  }

  /**
   * Get a list of applications. The owner of the API key used must have access to ATS
   * settings. Combine as many different optional parameter filters as you like.
   *
   * @summary Get Applications
   */
  getApplications(
    metadata: types.GetApplicationsMetadataParam
  ): Promise<FetchResponse<200, types.GetApplicationsResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/applicant_tracking/applications', 'get', metadata);
  }

  /**
   * Get the details of an application. The owner of the API key used must have access to ATS
   * settings.
   *
   * @summary Get Application Details
   */
  getApplicationDetails(
    metadata: types.GetApplicationDetailsMetadataParam
  ): Promise<FetchResponse<200, types.GetApplicationDetailsResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}',
      'get',
      metadata
    );
  }

  /**
   * Add a comment to an application. The owner of the API key used must have access to ATS
   * settings.
   *
   * @summary Add Application Comment
   */
  postApplicationComment(
    body: types.PostApplicationCommentBodyParam,
    metadata: types.PostApplicationCommentMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/comments',
      'post',
      body,
      metadata
    );
  }

  /**
   * Get a list of statuses for a company. The owner of the API key used must have access to
   * ATS settings.
   *
   * @summary Get Statuses
   */
  getStatuses(
    metadata: types.GetStatusesMetadataParam
  ): Promise<FetchResponse<200, types.GetStatusesResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/applicant_tracking/statuses', 'get', metadata);
  }

  /**
   * Change applicant's status. The owner of the API key used must have access to ATS
   * settings.
   *
   * @summary Change Applicant's Status
   */
  postApplicantStatus(
    body: types.PostApplicantStatusBodyParam,
    metadata: types.PostApplicantStatusMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/status',
      'post',
      body,
      metadata
    );
  }

  /**
   * Get a list of training types. The owner of the API key used must have access to training
   * settings.
   *
   * @summary List Training Types
   */
  listTrainingTypes(
    metadata: types.ListTrainingTypesMetadataParam
  ): Promise<FetchResponse<200, types.ListTrainingTypesResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/training/type', 'get', metadata);
  }

  /**
   * Add a training type. The owner of the API key used must have access to training
   * settings.
   *
   * @summary Add Training Type
   */
  addTrainingType(
    body: types.AddTrainingTypeBodyParam,
    metadata: types.AddTrainingTypeMetadataParam
  ): Promise<FetchResponse<201, types.AddTrainingTypeResponse201>> {
    return this.core.fetch('/{companyDomain}/v1/training/type', 'post', body, metadata);
  }

  /**
   * Update an existing training type. The owner of the API key used must have access to
   * training settings.
   *
   * @summary Update Training Type
   */
  updateTrainingType(
    body: types.UpdateTrainingTypeBodyParam,
    metadata: types.UpdateTrainingTypeMetadataParam
  ): Promise<FetchResponse<200, types.UpdateTrainingTypeResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/type/{trainingTypeId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete an existing training type. The owner of the API key used must have access to
   * training settings. Deleting a training type will only be successful if all employee
   * trainings for this type have been removed prior to this request.
   *
   * @summary Delete Training Type
   */
  deleteTrainingType(
    metadata: types.DeleteTrainingTypeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/type/{trainingTypeId}',
      'delete',
      metadata
    );
  }

  /**
   * Get a list of training categories. The owner of the API key used must have access to
   * training settings.
   *
   * @summary List Training Categories
   */
  listTrainingCategories(
    metadata: types.ListTrainingCategoriesMetadataParam
  ): Promise<FetchResponse<200, types.ListTrainingCategoriesResponse200>> {
    return this.core.fetch('/{companyDomain}/v1/training/category', 'get', metadata);
  }

  /**
   * Add a training category. The owner of the API key used must have access to training
   * settings.
   *
   * @summary Add Training Category
   */
  addTrainingCategory(
    body: types.AddTrainingCategoryBodyParam,
    metadata: types.AddTrainingCategoryMetadataParam
  ): Promise<FetchResponse<201, types.AddTrainingCategoryResponse201>> {
    return this.core.fetch('/{companyDomain}/v1/training/category', 'post', body, metadata);
  }

  /**
   * Update an existing training category. The owner of the API key used must have access to
   * training settings.
   *
   * @summary Update Training Category
   */
  updateTrainingCategory(
    body: types.UpdateTrainingCategoryBodyParam,
    metadata: types.UpdateTrainingCategoryMetadataParam
  ): Promise<FetchResponse<200, types.UpdateTrainingCategoryResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/category/{trainingCategoryId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete an existing training category. The owner of the API key used must have access to
   * training settings.
   *
   * @summary Delete Training Category
   */
  deleteTrainingCategory(
    metadata: types.DeleteTrainingCategoryMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/category/{trainingCategoryId}',
      'delete',
      metadata
    );
  }

  /**
   * Get all employee training records. The owner of the API key used must have access to
   * view the employee. The API will only return trainings for the employee that the owner of
   * the API key has permission to see. Included with each employee training is the training
   * information that has been selected for tracking in settings.
   *
   * @summary List Employee Trainings
   */
  listEmployeeTrainings(
    metadata: types.ListEmployeeTrainingsMetadataParam
  ): Promise<FetchResponse<200, types.ListEmployeeTrainingsResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/record/employee/{employeeId}',
      'get',
      metadata
    );
  }

  /**
   * Add a new employee training record. The owner of the API key used must have permission
   * to add trainings for the selected employee.
   *
   * @summary Add New Employee Training Record
   */
  addNewEmployeeTrainingRecord(
    body: types.AddNewEmployeeTrainingRecordBodyParam,
    metadata: types.AddNewEmployeeTrainingRecordMetadataParam
  ): Promise<FetchResponse<201, types.AddNewEmployeeTrainingRecordResponse201>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/record/employee/{employeeId}',
      'post',
      body,
      metadata
    );
  }

  /**
   * Update an existing exmployee training record. The owner of the API key used must have
   * permission to add trainings for the selected employee
   *
   * @summary Update Employee Training Record
   */
  updateEmployeeTrainingRecord(
    body: types.UpdateEmployeeTrainingRecordBodyParam,
    metadata: types.UpdateEmployeeTrainingRecordMetadataParam
  ): Promise<FetchResponse<200, types.UpdateEmployeeTrainingRecordResponse200>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/record/{employeeTrainingRecordId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * Delete an existing employee training record. The owner of the API key used must have
   * permission to view and edit the employee and training type.
   *
   * @summary Delete Employee Training Record
   */
  deleteEmployeeTrainingRecord(
    metadata: types.DeleteEmployeeTrainingRecordMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/{companyDomain}/v1/training/record/{employeeTrainingRecordId}',
      'delete',
      metadata
    );
  }

  /**
   * Add a new Webhook. For more details or instructions you can refer to the [webhooks API
   * tutorial](https://documentation.bamboohr.com/docs/webhooks-api-permission-based).
   *
   * @summary Add Webhook
   */
  postWebhook(
    body: types.PostWebhookBodyParam,
    metadata: types.PostWebhookMetadataParam
  ): Promise<
    | FetchResponse<201, types.PostWebhookResponse201>
    | FetchResponse<400, types.PostWebhookResponse400>
    | FetchResponse<403, types.PostWebhookResponse403>
    | FetchResponse<500, types.PostWebhookResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/', 'post', body, metadata);
  }

  /**
   * Gets as list of webhooks for the user API key.
   *
   * @summary Gets as list of webhooks for the user API key.
   */
  getWebhookList(
    metadata: types.GetWebhookListMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetWebhookListResponse200>
    | FetchResponse<500, types.GetWebhookListResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/', 'get', metadata);
  }

  /**
   * Get webhook data that is tied to a specific user API Key.
   *
   * @summary Get Webhook
   */
  getWebhook(
    metadata: types.GetWebhookMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetWebhookResponse200>
    | FetchResponse<403, types.GetWebhookResponse403>
    | FetchResponse<404, types.GetWebhookResponse404>
    | FetchResponse<500, types.GetWebhookResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'get', metadata);
  }

  /**
   * Update a webhook, based on webhook ID.
   *
   * @summary Update Webhook
   */
  putWebhook(
    body: types.PutWebhookBodyParam,
    metadata: types.PutWebhookMetadataParam
  ): Promise<
    | FetchResponse<200, types.PutWebhookResponse200>
    | FetchResponse<400, types.PutWebhookResponse400>
    | FetchResponse<403, types.PutWebhookResponse403>
    | FetchResponse<404, types.PutWebhookResponse404>
    | FetchResponse<500, types.PutWebhookResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'put', body, metadata);
  }

  /**
   * Delete a webhook that is tied to a specific user API Key.
   *
   * @summary Delete Webhook
   */
  deleteWebhook(
    metadata: types.DeleteWebhookMetadataParam
  ): Promise<
    | FetchResponse<403, types.DeleteWebhookResponse403>
    | FetchResponse<404, types.DeleteWebhookResponse404>
    | FetchResponse<500, types.DeleteWebhookResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'delete', metadata);
  }

  /**
   * Get a list fields webhooks can monitor monitor
   *
   * @summary Get monitor fields
   */
  getMonitorFields(
    metadata: types.GetMonitorFieldsMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetMonitorFieldsResponse200>
    | FetchResponse<500, types.GetMonitorFieldsResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/monitor_fields', 'get', metadata);
  }

  /**
   * Get webhook logs for specific webhook id that is associated with the user API Key.
   *
   * @summary Get Webhook Logs
   */
  getWebhookLogs(
    metadata: types.GetWebhookLogsMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetWebhookLogsResponse200>
    | FetchResponse<403, types.GetWebhookLogsResponse403>
    | FetchResponse<404, types.GetWebhookLogsResponse404>
    | FetchResponse<500, types.GetWebhookLogsResponse500>
  > {
    return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/log', 'get', metadata);
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  AddBenefitGroupBodyParam,
  AddBenefitGroupEmployeeBodyParam,
  AddBenefitGroupEmployeeMetadataParam,
  AddBenefitGroupMetadataParam,
  AddBenefitGroupPlanBodyParam,
  AddBenefitGroupPlanCostBodyParam,
  AddBenefitGroupPlanCostMetadataParam,
  AddBenefitGroupPlanMetadataParam,
  AddBenefitPlanBodyParam,
  AddBenefitPlanCoverageBodyParam,
  AddBenefitPlanCoverageMetadataParam,
  AddBenefitPlanMetadataParam,
  AddCompanyFileCategoryBodyParam,
  AddCompanyFileCategoryMetadataParam,
  AddEmployeeBodyParam,
  AddEmployeeDependentBodyParam,
  AddEmployeeDependentMetadataParam,
  AddEmployeeDepositBodyParam,
  AddEmployeeDepositMetadataParam,
  AddEmployeeFileCategoryBodyParam,
  AddEmployeeFileCategoryMetadataParam,
  AddEmployeeMetadataParam,
  AddEmployeePaystubBodyParam,
  AddEmployeePaystubMetadataParam,
  AddEmployeeResponse201,
  AddEmployeeTableRowBodyParam,
  AddEmployeeTableRowMetadataParam,
  AddEmployeeTableRowV1BodyParam,
  AddEmployeeTableRowV1MetadataParam,
  AddEmployeeUnpaidPaystubsBodyParam,
  AddEmployeeUnpaidPaystubsMetadataParam,
  AddEmployeeWithholdingBodyParam,
  AddEmployeeWithholdingMetadataParam,
  AddNewCompanyBenefitFormDataParam,
  AddNewCompanyBenefitMetadataParam,
  AddNewCompanyBenefitResponse200,
  AddNewEmployeeTrainingRecordBodyParam,
  AddNewEmployeeTrainingRecordMetadataParam,
  AddNewEmployeeTrainingRecordResponse201,
  AddTimetrackingBodyParam,
  AddTimetrackingMetadataParam,
  AddTrainingCategoryBodyParam,
  AddTrainingCategoryMetadataParam,
  AddTrainingCategoryResponse201,
  AddTrainingTypeBodyParam,
  AddTrainingTypeMetadataParam,
  AddTrainingTypeResponse201,
  AdjustTimetrackingBodyParam,
  AdjustTimetrackingMetadataParam,
  ApproveEmployeeTimesheetsBodyParam,
  ApproveEmployeeTimesheetsMetadataParam,
  BulkRecordTimetrackingBodyParam,
  BulkRecordTimetrackingMetadataParam,
  ClearEmployeeDepositMetadataParam,
  ClearEmployeePaystubMetadataParam,
  ClearEmployeeUnpaidPaystubsMetadataParam,
  ClearEmployeeUnpaidPaystubsResponse400,
  ClearEmployeeUnpaidPaystubsResponse403,
  ClearEmployeeWithholdingMetadataParam,
  ClockInBodyParam,
  ClockInDataBodyParam,
  ClockInDataMetadataParam,
  ClockInMetadataParam,
  ClockOutAndApproveEmployeeTimesheetsBodyParam,
  ClockOutAndApproveEmployeeTimesheetsMetadataParam,
  ClockOutBodyParam,
  ClockOutEmployeeAtSpecificTimeBodyParam,
  ClockOutEmployeeAtSpecificTimeMetadataParam,
  ClockOutMetadataParam,
  DeleteClockEntriesBodyParam,
  DeleteClockEntriesMetadataParam,
  DeleteCompanyBenefitMetadataParam,
  DeleteCompanyFileMetadataParam,
  DeleteEmployeeFileMetadataParam,
  DeleteEmployeeTableRowV1MetadataParam,
  DeleteEmployeeTableRowV1Response200,
  DeleteEmployeeTrainingRecordMetadataParam,
  DeleteGoalCommentMetadataParam,
  DeleteGoalMetadataParam,
  DeleteTimetrackingMetadataParam,
  DeleteTrainingCategoryMetadataParam,
  DeleteTrainingTypeMetadataParam,
  DeleteWebhookMetadataParam,
  DeleteWebhookResponse403,
  DeleteWebhookResponse404,
  DeleteWebhookResponse500,
  EstimateFutureTimeOffBalancesMetadataParam,
  GetAListOfUsersMetadataParam,
  GetAListOfWhoSOutMetadataParam,
  GetApplicationDetailsMetadataParam,
  GetApplicationDetailsResponse200,
  GetApplicationsMetadataParam,
  GetApplicationsResponse200,
  GetBenefitCoverageMetadataParam,
  GetBenefitCoveragesMetadataParam,
  GetBenefitDeductionTypesMetadataParam,
  GetBenefitGroupEmployeeMetadataParam,
  GetBenefitGroupEmployeesMetadataParam,
  GetBenefitGroupMetadataParam,
  GetBenefitGroupPlanCostMetadataParam,
  GetBenefitGroupPlanCostsMetadataParam,
  GetBenefitGroupPlanMetadataParam,
  GetBenefitGroupPlansMetadataParam,
  GetBenefitGroupsMetadataParam,
  GetBenefitPlanCoverageMetadataParam,
  GetBenefitPlanCoveragesMetadataParam,
  GetBenefitPlanMetadataParam,
  GetBenefitPlansMetadataParam,
  GetCanCreateGoalMetadataParam,
  GetChangedEmployeeIdsMetadataParam,
  GetChangedEmployeeTableDataMetadataParam,
  GetClockEntryMetadataParam,
  GetCompanyBenefitMetadataParam,
  GetCompanyBenefitResponse200,
  GetCompanyBenefitTypesMetadataParam,
  GetCompanyBenefitTypesResponse200,
  GetCompanyBenefitsMetadataParam,
  GetCompanyBenefitsResponse200,
  GetCompanyFileMetadataParam,
  GetCompanyReportMetadataParam,
  GetDailyEntryMetadataParam,
  GetEmployeeBenefitBodyParam,
  GetEmployeeBenefitMetadataParam,
  GetEmployeeBenefitResponse200,
  GetEmployeeDeductionsByPlanMetadataParam,
  GetEmployeeDependentMetadataParam,
  GetEmployeeDependentsMetadataParam,
  GetEmployeeDepositAccountsMetadataParam,
  GetEmployeeFileMetadataParam,
  GetEmployeeMetadataParam,
  GetEmployeePaystubMetadataParam,
  GetEmployeePhotoMetadataParam,
  GetEmployeeResponse200,
  GetEmployeeTableRowMetadataParam,
  GetEmployeeTimesheetMetadataParam,
  GetEmployeeUnpaidPaystubsMetadataParam,
  GetEmployeeWithholdingsMetadataParam,
  GetEmployeesDirectoryMetadataParam,
  GetEmployeesDirectoryResponse200,
  GetGoalAggregateMetadataParam,
  GetGoalAggregateResponse200,
  GetGoalCommentsMetadataParam,
  GetGoalsAggregateV11MetadataParam,
  GetGoalsAggregateV11Response200,
  GetGoalsAggregateV12MetadataParam,
  GetGoalsAggregateV12Response200,
  GetGoalsAggregateV1MetadataParam,
  GetGoalsAggregateV1Response200,
  GetGoalsAlignmentOptionsBodyParam,
  GetGoalsAlignmentOptionsMetadataParam,
  GetGoalsFiltersV11MetadataParam,
  GetGoalsFiltersV11Response200,
  GetGoalsFiltersV1MetadataParam,
  GetGoalsFiltersV1Response200,
  GetGoalsMetadataParam,
  GetGoalsResponse200,
  GetGoalsShareOptionsMetadataParam,
  GetJobSummariesMetadataParam,
  GetJobSummariesResponse200,
  GetMonitorFieldsMetadataParam,
  GetMonitorFieldsResponse200,
  GetMonitorFieldsResponse500,
  GetPayrollDeductionsForEmployeeMetadataParam,
  GetPlanDeductionsByEmployeeMetadataParam,
  GetStatusesMetadataParam,
  GetStatusesResponse200,
  GetTimeOffPoliciesMetadataParam,
  GetTimeOffTypesMetadataParam,
  GetTimesheetsBodyParam,
  GetTimesheetsMetadataParam,
  GetTimetrackingRecordMetadataParam,
  GetWebhookListMetadataParam,
  GetWebhookListResponse200,
  GetWebhookListResponse500,
  GetWebhookLogsMetadataParam,
  GetWebhookLogsResponse200,
  GetWebhookLogsResponse403,
  GetWebhookLogsResponse404,
  GetWebhookLogsResponse500,
  GetWebhookMetadataParam,
  GetWebhookResponse200,
  GetWebhookResponse403,
  GetWebhookResponse404,
  GetWebhookResponse500,
  IsEmployeeClockedInMetadataParam,
  ListCompanyFilesMetadataParam,
  ListEmployeeFilesMetadataParam,
  ListEmployeeTrainingsMetadataParam,
  ListEmployeeTrainingsResponse200,
  ListTrainingCategoriesMetadataParam,
  ListTrainingCategoriesResponse200,
  ListTrainingTypesMetadataParam,
  ListTrainingTypesResponse200,
  LoginFormDataParam,
  LoginMetadataParam,
  MetadataAddOrUpdateValuesForListFieldsBodyParam,
  MetadataAddOrUpdateValuesForListFieldsMetadataParam,
  MetadataGetAListOfFieldsMetadataParam,
  MetadataGetAListOfTabularFieldsMetadataParam,
  MetadataGetDetailsForListFieldsMetadataParam,
  PostApplicantStatusBodyParam,
  PostApplicantStatusMetadataParam,
  PostApplicationCommentBodyParam,
  PostApplicationCommentMetadataParam,
  PostCloseGoalBodyParam,
  PostCloseGoalMetadataParam,
  PostCloseGoalResponse201,
  PostEmployeeBenefitBodyParam,
  PostEmployeeBenefitMetadataParam,
  PostEmployeeBenefitResponse200,
  PostGoalBodyParam,
  PostGoalCommentBodyParam,
  PostGoalCommentMetadataParam,
  PostGoalMetadataParam,
  PostGoalResponse201,
  PostReopenGoalMetadataParam,
  PostReopenGoalResponse201,
  PostWebhookBodyParam,
  PostWebhookMetadataParam,
  PostWebhookResponse201,
  PostWebhookResponse400,
  PostWebhookResponse403,
  PostWebhookResponse500,
  PutGoalCommentBodyParam,
  PutGoalCommentMetadataParam,
  PutGoalProgressBodyParam,
  PutGoalProgressMetadataParam,
  PutGoalProgressResponse200,
  PutGoalSharedWithBodyParam,
  PutGoalSharedWithMetadataParam,
  PutGoalSharedWithResponse200,
  PutGoalV11BodyParam,
  PutGoalV11MetadataParam,
  PutGoalV11Response200,
  PutGoalV1BodyParam,
  PutGoalV1MetadataParam,
  PutGoalV1Response200,
  PutWebhookBodyParam,
  PutWebhookMetadataParam,
  PutWebhookResponse200,
  PutWebhookResponse400,
  PutWebhookResponse403,
  PutWebhookResponse404,
  PutWebhookResponse500,
  RequestCustomReportBodyParam,
  RequestCustomReportMetadataParam,
  StoreClockEntriesBodyParam,
  StoreClockEntriesMetadataParam,
  StoreDailyEntriesBodyParam,
  StoreDailyEntriesMetadataParam,
  TimeOffAddATimeOffHistoryItemForTimeOffRequestBodyParam,
  TimeOffAddATimeOffHistoryItemForTimeOffRequestMetadataParam,
  TimeOffAddATimeOffRequestBodyParam,
  TimeOffAddATimeOffRequestMetadataParam,
  TimeOffAdjustTimeOffBalanceBodyParam,
  TimeOffAdjustTimeOffBalanceMetadataParam,
  TimeOffAssignTimeOffPoliciesForAnEmployeeBodyParam,
  TimeOffAssignTimeOffPoliciesForAnEmployeeMetadataParam,
  TimeOffChangeARequestStatusBodyParam,
  TimeOffChangeARequestStatusMetadataParam,
  TimeOffGetTimeOffRequestsMetadataParam,
  TimeOffListTimeOffPoliciesForEmployeeMetadataParam,
  TimeOffV11AssignTimeOffPoliciesForAnEmployeeBodyParam,
  TimeOffV11AssignTimeOffPoliciesForAnEmployeeMetadataParam,
  TimeOffV11ListTimeOffPoliciesForEmployeeMetadataParam,
  TimeTrackingEmployeeProjectsMetadataParam,
  TimeTrackingProjectTasksMetadataParam,
  UpdateBenefitGroupBodyParam,
  UpdateBenefitGroupMetadataParam,
  UpdateBenefitPlanBodyParam,
  UpdateBenefitPlanCoverageBodyParam,
  UpdateBenefitPlanCoverageMetadataParam,
  UpdateBenefitPlanMetadataParam,
  UpdateCompanyBenefitBodyParam,
  UpdateCompanyBenefitMetadataParam,
  UpdateCompanyBenefitResponse200,
  UpdateCompanyFileBodyParam,
  UpdateCompanyFileMetadataParam,
  UpdateEmployeeBodyParam,
  UpdateEmployeeDependentBodyParam,
  UpdateEmployeeDependentMetadataParam,
  UpdateEmployeeFileBodyParam,
  UpdateEmployeeFileMetadataParam,
  UpdateEmployeeMetadataParam,
  UpdateEmployeeTableRowBodyParam,
  UpdateEmployeeTableRowMetadataParam,
  UpdateEmployeeTableRowVBodyParam,
  UpdateEmployeeTableRowVMetadataParam,
  UpdateEmployeeTrainingRecordBodyParam,
  UpdateEmployeeTrainingRecordMetadataParam,
  UpdateEmployeeTrainingRecordResponse200,
  UpdateTrainingCategoryBodyParam,
  UpdateTrainingCategoryMetadataParam,
  UpdateTrainingCategoryResponse200,
  UpdateTrainingTypeBodyParam,
  UpdateTrainingTypeMetadataParam,
  UpdateTrainingTypeResponse200,
  UploadCompanyFileMetadataParam,
  UploadEmployeeFileMetadataParam,
  UploadEmployeePhotoMetadataParam,
} from './types';
