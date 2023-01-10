import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AddBenefitGroupBodyParam = FromSchema<typeof schemas.AddBenefitGroup.body>;
export type AddBenefitGroupEmployeeBodyParam = FromSchema<
  typeof schemas.AddBenefitGroupEmployee.body
>;
export type AddBenefitGroupEmployeeMetadataParam = FromSchema<
  typeof schemas.AddBenefitGroupEmployee.metadata
>;
export type AddBenefitGroupMetadataParam = FromSchema<typeof schemas.AddBenefitGroup.metadata>;
export type AddBenefitGroupPlanBodyParam = FromSchema<typeof schemas.AddBenefitGroupPlan.body>;
export type AddBenefitGroupPlanCostBodyParam = FromSchema<
  typeof schemas.AddBenefitGroupPlanCost.body
>;
export type AddBenefitGroupPlanCostMetadataParam = FromSchema<
  typeof schemas.AddBenefitGroupPlanCost.metadata
>;
export type AddBenefitGroupPlanMetadataParam = FromSchema<
  typeof schemas.AddBenefitGroupPlan.metadata
>;
export type AddBenefitPlanBodyParam = FromSchema<typeof schemas.AddBenefitPlan.body>;
export type AddBenefitPlanCoverageBodyParam = FromSchema<
  typeof schemas.AddBenefitPlanCoverage.body
>;
export type AddBenefitPlanCoverageMetadataParam = FromSchema<
  typeof schemas.AddBenefitPlanCoverage.metadata
>;
export type AddBenefitPlanMetadataParam = FromSchema<typeof schemas.AddBenefitPlan.metadata>;
export type AddCompanyFileCategoryBodyParam = FromSchema<
  typeof schemas.AddCompanyFileCategory.body
>;
export type AddCompanyFileCategoryMetadataParam = FromSchema<
  typeof schemas.AddCompanyFileCategory.metadata
>;
export type AddEmployeeBodyParam = FromSchema<typeof schemas.AddEmployee.body>;
export type AddEmployeeDependentBodyParam = FromSchema<typeof schemas.AddEmployeeDependent.body>;
export type AddEmployeeDependentMetadataParam = FromSchema<
  typeof schemas.AddEmployeeDependent.metadata
>;
export type AddEmployeeDepositBodyParam = FromSchema<typeof schemas.AddEmployeeDeposit.body>;
export type AddEmployeeDepositMetadataParam = FromSchema<
  typeof schemas.AddEmployeeDeposit.metadata
>;
export type AddEmployeeFileCategoryBodyParam = FromSchema<
  typeof schemas.AddEmployeeFileCategory.body
>;
export type AddEmployeeFileCategoryMetadataParam = FromSchema<
  typeof schemas.AddEmployeeFileCategory.metadata
>;
export type AddEmployeeMetadataParam = FromSchema<typeof schemas.AddEmployee.metadata>;
export type AddEmployeePaystubBodyParam = FromSchema<typeof schemas.AddEmployeePaystub.body>;
export type AddEmployeePaystubMetadataParam = FromSchema<
  typeof schemas.AddEmployeePaystub.metadata
>;
export type AddEmployeeResponse201 = FromSchema<typeof schemas.AddEmployee.response['201']>;
export type AddEmployeeTableRowBodyParam = FromSchema<typeof schemas.AddEmployeeTableRow.body>;
export type AddEmployeeTableRowMetadataParam = FromSchema<
  typeof schemas.AddEmployeeTableRow.metadata
>;
export type AddEmployeeTableRowV1BodyParam = FromSchema<typeof schemas.AddEmployeeTableRowV1.body>;
export type AddEmployeeTableRowV1MetadataParam = FromSchema<
  typeof schemas.AddEmployeeTableRowV1.metadata
>;
export type AddEmployeeUnpaidPaystubsBodyParam = FromSchema<
  typeof schemas.AddEmployeeUnpaidPaystubs.body
>;
export type AddEmployeeUnpaidPaystubsMetadataParam = FromSchema<
  typeof schemas.AddEmployeeUnpaidPaystubs.metadata
>;
export type AddEmployeeWithholdingBodyParam = FromSchema<
  typeof schemas.AddEmployeeWithholding.body
>;
export type AddEmployeeWithholdingMetadataParam = FromSchema<
  typeof schemas.AddEmployeeWithholding.metadata
>;
export type AddNewCompanyBenefitFormDataParam = FromSchema<
  typeof schemas.AddNewCompanyBenefit.formData
>;
export type AddNewCompanyBenefitMetadataParam = FromSchema<
  typeof schemas.AddNewCompanyBenefit.metadata
>;
export type AddNewCompanyBenefitResponse200 = FromSchema<
  typeof schemas.AddNewCompanyBenefit.response['200']
>;
export type AddNewEmployeeTrainingRecordBodyParam = FromSchema<
  typeof schemas.AddNewEmployeeTrainingRecord.body
>;
export type AddNewEmployeeTrainingRecordMetadataParam = FromSchema<
  typeof schemas.AddNewEmployeeTrainingRecord.metadata
>;
export type AddNewEmployeeTrainingRecordResponse201 = FromSchema<
  typeof schemas.AddNewEmployeeTrainingRecord.response['201']
>;
export type AddTimetrackingBodyParam = FromSchema<typeof schemas.AddTimetracking.body>;
export type AddTimetrackingMetadataParam = FromSchema<typeof schemas.AddTimetracking.metadata>;
export type AddTrainingCategoryBodyParam = FromSchema<typeof schemas.AddTrainingCategory.body>;
export type AddTrainingCategoryMetadataParam = FromSchema<
  typeof schemas.AddTrainingCategory.metadata
>;
export type AddTrainingCategoryResponse201 = FromSchema<
  typeof schemas.AddTrainingCategory.response['201']
>;
export type AddTrainingTypeBodyParam = FromSchema<typeof schemas.AddTrainingType.body>;
export type AddTrainingTypeMetadataParam = FromSchema<typeof schemas.AddTrainingType.metadata>;
export type AddTrainingTypeResponse201 = FromSchema<typeof schemas.AddTrainingType.response['201']>;
export type AdjustTimetrackingBodyParam = FromSchema<typeof schemas.AdjustTimetracking.body>;
export type AdjustTimetrackingMetadataParam = FromSchema<
  typeof schemas.AdjustTimetracking.metadata
>;
export type ApproveEmployeeTimesheetsBodyParam = FromSchema<
  typeof schemas.ApproveEmployeeTimesheets.body
>;
export type ApproveEmployeeTimesheetsMetadataParam = FromSchema<
  typeof schemas.ApproveEmployeeTimesheets.metadata
>;
export type BulkRecordTimetrackingBodyParam = FromSchema<
  typeof schemas.BulkRecordTimetracking.body
>;
export type BulkRecordTimetrackingMetadataParam = FromSchema<
  typeof schemas.BulkRecordTimetracking.metadata
>;
export type ClearEmployeeDepositMetadataParam = FromSchema<
  typeof schemas.ClearEmployeeDeposit.metadata
>;
export type ClearEmployeePaystubMetadataParam = FromSchema<
  typeof schemas.ClearEmployeePaystub.metadata
>;
export type ClearEmployeeUnpaidPaystubsMetadataParam = FromSchema<
  typeof schemas.ClearEmployeeUnpaidPaystubs.metadata
>;
export type ClearEmployeeUnpaidPaystubsResponse400 = FromSchema<
  typeof schemas.ClearEmployeeUnpaidPaystubs.response['400']
>;
export type ClearEmployeeUnpaidPaystubsResponse403 = FromSchema<
  typeof schemas.ClearEmployeeUnpaidPaystubs.response['403']
>;
export type ClearEmployeeWithholdingMetadataParam = FromSchema<
  typeof schemas.ClearEmployeeWithholding.metadata
>;
export type ClockInBodyParam = FromSchema<typeof schemas.ClockIn.body>;
export type ClockInDataBodyParam = FromSchema<typeof schemas.ClockInData.body>;
export type ClockInDataMetadataParam = FromSchema<typeof schemas.ClockInData.metadata>;
export type ClockInMetadataParam = FromSchema<typeof schemas.ClockIn.metadata>;
export type ClockOutAndApproveEmployeeTimesheetsBodyParam = FromSchema<
  typeof schemas.ClockOutAndApproveEmployeeTimesheets.body
>;
export type ClockOutAndApproveEmployeeTimesheetsMetadataParam = FromSchema<
  typeof schemas.ClockOutAndApproveEmployeeTimesheets.metadata
>;
export type ClockOutBodyParam = FromSchema<typeof schemas.ClockOut.body>;
export type ClockOutEmployeeAtSpecificTimeBodyParam = FromSchema<
  typeof schemas.ClockOutEmployeeAtSpecificTime.body
>;
export type ClockOutEmployeeAtSpecificTimeMetadataParam = FromSchema<
  typeof schemas.ClockOutEmployeeAtSpecificTime.metadata
>;
export type ClockOutMetadataParam = FromSchema<typeof schemas.ClockOut.metadata>;
export type DeleteClockEntriesBodyParam = FromSchema<typeof schemas.DeleteClockEntries.body>;
export type DeleteClockEntriesMetadataParam = FromSchema<
  typeof schemas.DeleteClockEntries.metadata
>;
export type DeleteCompanyBenefitMetadataParam = FromSchema<
  typeof schemas.DeleteCompanyBenefit.metadata
>;
export type DeleteCompanyFileMetadataParam = FromSchema<typeof schemas.DeleteCompanyFile.metadata>;
export type DeleteEmployeeFileMetadataParam = FromSchema<
  typeof schemas.DeleteEmployeeFile.metadata
>;
export type DeleteEmployeeTableRowV1MetadataParam = FromSchema<
  typeof schemas.DeleteEmployeeTableRowV1.metadata
>;
export type DeleteEmployeeTableRowV1Response200 = FromSchema<
  typeof schemas.DeleteEmployeeTableRowV1.response['200']
>;
export type DeleteEmployeeTrainingRecordMetadataParam = FromSchema<
  typeof schemas.DeleteEmployeeTrainingRecord.metadata
>;
export type DeleteGoalCommentMetadataParam = FromSchema<typeof schemas.DeleteGoalComment.metadata>;
export type DeleteGoalMetadataParam = FromSchema<typeof schemas.DeleteGoal.metadata>;
export type DeleteTimetrackingMetadataParam = FromSchema<
  typeof schemas.DeleteTimetracking.metadata
>;
export type DeleteTrainingCategoryMetadataParam = FromSchema<
  typeof schemas.DeleteTrainingCategory.metadata
>;
export type DeleteTrainingTypeMetadataParam = FromSchema<
  typeof schemas.DeleteTrainingType.metadata
>;
export type DeleteWebhookMetadataParam = FromSchema<typeof schemas.DeleteWebhook.metadata>;
export type DeleteWebhookResponse403 = FromSchema<typeof schemas.DeleteWebhook.response['403']>;
export type DeleteWebhookResponse404 = FromSchema<typeof schemas.DeleteWebhook.response['404']>;
export type DeleteWebhookResponse500 = FromSchema<typeof schemas.DeleteWebhook.response['500']>;
export type EstimateFutureTimeOffBalancesMetadataParam = FromSchema<
  typeof schemas.EstimateFutureTimeOffBalances.metadata
>;
export type GetAListOfUsersMetadataParam = FromSchema<typeof schemas.GetAListOfUsers.metadata>;
export type GetAListOfWhoSOutMetadataParam = FromSchema<typeof schemas.GetAListOfWhoSOut.metadata>;
export type GetApplicationDetailsMetadataParam = FromSchema<
  typeof schemas.GetApplicationDetails.metadata
>;
export type GetApplicationDetailsResponse200 = FromSchema<
  typeof schemas.GetApplicationDetails.response['200']
>;
export type GetApplicationsMetadataParam = FromSchema<typeof schemas.GetApplications.metadata>;
export type GetApplicationsResponse200 = FromSchema<typeof schemas.GetApplications.response['200']>;
export type GetBenefitCoverageMetadataParam = FromSchema<
  typeof schemas.GetBenefitCoverage.metadata
>;
export type GetBenefitCoveragesMetadataParam = FromSchema<
  typeof schemas.GetBenefitCoverages.metadata
>;
export type GetBenefitDeductionTypesMetadataParam = FromSchema<
  typeof schemas.GetBenefitDeductionTypes.metadata
>;
export type GetBenefitGroupEmployeeMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupEmployee.metadata
>;
export type GetBenefitGroupEmployeesMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupEmployees.metadata
>;
export type GetBenefitGroupMetadataParam = FromSchema<typeof schemas.GetBenefitGroup.metadata>;
export type GetBenefitGroupPlanCostMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupPlanCost.metadata
>;
export type GetBenefitGroupPlanCostsMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupPlanCosts.metadata
>;
export type GetBenefitGroupPlanMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupPlan.metadata
>;
export type GetBenefitGroupPlansMetadataParam = FromSchema<
  typeof schemas.GetBenefitGroupPlans.metadata
>;
export type GetBenefitGroupsMetadataParam = FromSchema<typeof schemas.GetBenefitGroups.metadata>;
export type GetBenefitPlanCoverageMetadataParam = FromSchema<
  typeof schemas.GetBenefitPlanCoverage.metadata
>;
export type GetBenefitPlanCoveragesMetadataParam = FromSchema<
  typeof schemas.GetBenefitPlanCoverages.metadata
>;
export type GetBenefitPlanMetadataParam = FromSchema<typeof schemas.GetBenefitPlan.metadata>;
export type GetBenefitPlansMetadataParam = FromSchema<typeof schemas.GetBenefitPlans.metadata>;
export type GetCanCreateGoalMetadataParam = FromSchema<typeof schemas.GetCanCreateGoal.metadata>;
export type GetChangedEmployeeIdsMetadataParam = FromSchema<
  typeof schemas.GetChangedEmployeeIds.metadata
>;
export type GetChangedEmployeeTableDataMetadataParam = FromSchema<
  typeof schemas.GetChangedEmployeeTableData.metadata
>;
export type GetClockEntryMetadataParam = FromSchema<typeof schemas.GetClockEntry.metadata>;
export type GetCompanyBenefitMetadataParam = FromSchema<typeof schemas.GetCompanyBenefit.metadata>;
export type GetCompanyBenefitResponse200 = FromSchema<
  typeof schemas.GetCompanyBenefit.response['200']
>;
export type GetCompanyBenefitTypesMetadataParam = FromSchema<
  typeof schemas.GetCompanyBenefitTypes.metadata
>;
export type GetCompanyBenefitTypesResponse200 = FromSchema<
  typeof schemas.GetCompanyBenefitTypes.response['200']
>;
export type GetCompanyBenefitsMetadataParam = FromSchema<
  typeof schemas.GetCompanyBenefits.metadata
>;
export type GetCompanyBenefitsResponse200 = FromSchema<
  typeof schemas.GetCompanyBenefits.response['200']
>;
export type GetCompanyFileMetadataParam = FromSchema<typeof schemas.GetCompanyFile.metadata>;
export type GetCompanyReportMetadataParam = FromSchema<typeof schemas.GetCompanyReport.metadata>;
export type GetDailyEntryMetadataParam = FromSchema<typeof schemas.GetDailyEntry.metadata>;
export type GetEmployeeBenefitBodyParam = FromSchema<typeof schemas.GetEmployeeBenefit.body>;
export type GetEmployeeBenefitMetadataParam = FromSchema<
  typeof schemas.GetEmployeeBenefit.metadata
>;
export type GetEmployeeBenefitResponse200 = FromSchema<
  typeof schemas.GetEmployeeBenefit.response['200']
>;
export type GetEmployeeDeductionsByPlanMetadataParam = FromSchema<
  typeof schemas.GetEmployeeDeductionsByPlan.metadata
>;
export type GetEmployeeDependentMetadataParam = FromSchema<
  typeof schemas.GetEmployeeDependent.metadata
>;
export type GetEmployeeDependentsMetadataParam = FromSchema<
  typeof schemas.GetEmployeeDependents.metadata
>;
export type GetEmployeeDepositAccountsMetadataParam = FromSchema<
  typeof schemas.GetEmployeeDepositAccounts.metadata
>;
export type GetEmployeeFileMetadataParam = FromSchema<typeof schemas.GetEmployeeFile.metadata>;
export type GetEmployeeMetadataParam = FromSchema<typeof schemas.GetEmployee.metadata>;
export type GetEmployeePaystubMetadataParam = FromSchema<
  typeof schemas.GetEmployeePaystub.metadata
>;
export type GetEmployeePhotoMetadataParam = FromSchema<typeof schemas.GetEmployeePhoto.metadata>;
export type GetEmployeeResponse200 = FromSchema<typeof schemas.GetEmployee.response['200']>;
export type GetEmployeeTableRowMetadataParam = FromSchema<
  typeof schemas.GetEmployeeTableRow.metadata
>;
export type GetEmployeeTimesheetMetadataParam = FromSchema<
  typeof schemas.GetEmployeeTimesheet.metadata
>;
export type GetEmployeeUnpaidPaystubsMetadataParam = FromSchema<
  typeof schemas.GetEmployeeUnpaidPaystubs.metadata
>;
export type GetEmployeeWithholdingsMetadataParam = FromSchema<
  typeof schemas.GetEmployeeWithholdings.metadata
>;
export type GetEmployeesDirectoryMetadataParam = FromSchema<
  typeof schemas.GetEmployeesDirectory.metadata
>;
export type GetEmployeesDirectoryResponse200 = FromSchema<
  typeof schemas.GetEmployeesDirectory.response['200']
>;
export type GetGoalAggregateMetadataParam = FromSchema<typeof schemas.GetGoalAggregate.metadata>;
export type GetGoalAggregateResponse200 = FromSchema<
  typeof schemas.GetGoalAggregate.response['200']
>;
export type GetGoalCommentsMetadataParam = FromSchema<typeof schemas.GetGoalComments.metadata>;
export type GetGoalsAggregateV11MetadataParam = FromSchema<
  typeof schemas.GetGoalsAggregateV11.metadata
>;
export type GetGoalsAggregateV11Response200 = FromSchema<
  typeof schemas.GetGoalsAggregateV11.response['200']
>;
export type GetGoalsAggregateV12MetadataParam = FromSchema<
  typeof schemas.GetGoalsAggregateV12.metadata
>;
export type GetGoalsAggregateV12Response200 = FromSchema<
  typeof schemas.GetGoalsAggregateV12.response['200']
>;
export type GetGoalsAggregateV1MetadataParam = FromSchema<
  typeof schemas.GetGoalsAggregateV1.metadata
>;
export type GetGoalsAggregateV1Response200 = FromSchema<
  typeof schemas.GetGoalsAggregateV1.response['200']
>;
export type GetGoalsAlignmentOptionsBodyParam = FromSchema<
  typeof schemas.GetGoalsAlignmentOptions.body
>;
export type GetGoalsAlignmentOptionsMetadataParam = FromSchema<
  typeof schemas.GetGoalsAlignmentOptions.metadata
>;
export type GetGoalsFiltersV11MetadataParam = FromSchema<
  typeof schemas.GetGoalsFiltersV11.metadata
>;
export type GetGoalsFiltersV11Response200 = FromSchema<
  typeof schemas.GetGoalsFiltersV11.response['200']
>;
export type GetGoalsFiltersV1MetadataParam = FromSchema<typeof schemas.GetGoalsFiltersV1.metadata>;
export type GetGoalsFiltersV1Response200 = FromSchema<
  typeof schemas.GetGoalsFiltersV1.response['200']
>;
export type GetGoalsMetadataParam = FromSchema<typeof schemas.GetGoals.metadata>;
export type GetGoalsResponse200 = FromSchema<typeof schemas.GetGoals.response['200']>;
export type GetGoalsShareOptionsMetadataParam = FromSchema<
  typeof schemas.GetGoalsShareOptions.metadata
>;
export type GetJobSummariesMetadataParam = FromSchema<typeof schemas.GetJobSummaries.metadata>;
export type GetJobSummariesResponse200 = FromSchema<typeof schemas.GetJobSummaries.response['200']>;
export type GetMonitorFieldsMetadataParam = FromSchema<typeof schemas.GetMonitorFields.metadata>;
export type GetMonitorFieldsResponse200 = FromSchema<
  typeof schemas.GetMonitorFields.response['200']
>;
export type GetMonitorFieldsResponse500 = FromSchema<
  typeof schemas.GetMonitorFields.response['500']
>;
export type GetPayrollDeductionsForEmployeeMetadataParam = FromSchema<
  typeof schemas.GetPayrollDeductionsForEmployee.metadata
>;
export type GetPlanDeductionsByEmployeeMetadataParam = FromSchema<
  typeof schemas.GetPlanDeductionsByEmployee.metadata
>;
export type GetStatusesMetadataParam = FromSchema<typeof schemas.GetStatuses.metadata>;
export type GetStatusesResponse200 = FromSchema<typeof schemas.GetStatuses.response['200']>;
export type GetTimeOffPoliciesMetadataParam = FromSchema<
  typeof schemas.GetTimeOffPolicies.metadata
>;
export type GetTimeOffTypesMetadataParam = FromSchema<typeof schemas.GetTimeOffTypes.metadata>;
export type GetTimesheetsBodyParam = FromSchema<typeof schemas.GetTimesheets.body>;
export type GetTimesheetsMetadataParam = FromSchema<typeof schemas.GetTimesheets.metadata>;
export type GetTimetrackingRecordMetadataParam = FromSchema<
  typeof schemas.GetTimetrackingRecord.metadata
>;
export type GetWebhookListMetadataParam = FromSchema<typeof schemas.GetWebhookList.metadata>;
export type GetWebhookListResponse200 = FromSchema<typeof schemas.GetWebhookList.response['200']>;
export type GetWebhookListResponse500 = FromSchema<typeof schemas.GetWebhookList.response['500']>;
export type GetWebhookLogsMetadataParam = FromSchema<typeof schemas.GetWebhookLogs.metadata>;
export type GetWebhookLogsResponse200 = FromSchema<typeof schemas.GetWebhookLogs.response['200']>;
export type GetWebhookLogsResponse403 = FromSchema<typeof schemas.GetWebhookLogs.response['403']>;
export type GetWebhookLogsResponse404 = FromSchema<typeof schemas.GetWebhookLogs.response['404']>;
export type GetWebhookLogsResponse500 = FromSchema<typeof schemas.GetWebhookLogs.response['500']>;
export type GetWebhookMetadataParam = FromSchema<typeof schemas.GetWebhook.metadata>;
export type GetWebhookResponse200 = FromSchema<typeof schemas.GetWebhook.response['200']>;
export type GetWebhookResponse403 = FromSchema<typeof schemas.GetWebhook.response['403']>;
export type GetWebhookResponse404 = FromSchema<typeof schemas.GetWebhook.response['404']>;
export type GetWebhookResponse500 = FromSchema<typeof schemas.GetWebhook.response['500']>;
export type IsEmployeeClockedInMetadataParam = FromSchema<
  typeof schemas.IsEmployeeClockedIn.metadata
>;
export type ListCompanyFilesMetadataParam = FromSchema<typeof schemas.ListCompanyFiles.metadata>;
export type ListEmployeeFilesMetadataParam = FromSchema<typeof schemas.ListEmployeeFiles.metadata>;
export type ListEmployeeTrainingsMetadataParam = FromSchema<
  typeof schemas.ListEmployeeTrainings.metadata
>;
export type ListEmployeeTrainingsResponse200 = FromSchema<
  typeof schemas.ListEmployeeTrainings.response['200']
>;
export type ListTrainingCategoriesMetadataParam = FromSchema<
  typeof schemas.ListTrainingCategories.metadata
>;
export type ListTrainingCategoriesResponse200 = FromSchema<
  typeof schemas.ListTrainingCategories.response['200']
>;
export type ListTrainingTypesMetadataParam = FromSchema<typeof schemas.ListTrainingTypes.metadata>;
export type ListTrainingTypesResponse200 = FromSchema<
  typeof schemas.ListTrainingTypes.response['200']
>;
export type LoginFormDataParam = FromSchema<typeof schemas.Login.formData>;
export type LoginMetadataParam = FromSchema<typeof schemas.Login.metadata>;
export type MetadataAddOrUpdateValuesForListFieldsBodyParam = FromSchema<
  typeof schemas.MetadataAddOrUpdateValuesForListFields.body
>;
export type MetadataAddOrUpdateValuesForListFieldsMetadataParam = FromSchema<
  typeof schemas.MetadataAddOrUpdateValuesForListFields.metadata
>;
export type MetadataGetAListOfFieldsMetadataParam = FromSchema<
  typeof schemas.MetadataGetAListOfFields.metadata
>;
export type MetadataGetAListOfTabularFieldsMetadataParam = FromSchema<
  typeof schemas.MetadataGetAListOfTabularFields.metadata
>;
export type MetadataGetDetailsForListFieldsMetadataParam = FromSchema<
  typeof schemas.MetadataGetDetailsForListFields.metadata
>;
export type PostApplicantStatusBodyParam = FromSchema<typeof schemas.PostApplicantStatus.body>;
export type PostApplicantStatusMetadataParam = FromSchema<
  typeof schemas.PostApplicantStatus.metadata
>;
export type PostApplicationCommentBodyParam = FromSchema<
  typeof schemas.PostApplicationComment.body
>;
export type PostApplicationCommentMetadataParam = FromSchema<
  typeof schemas.PostApplicationComment.metadata
>;
export type PostCloseGoalBodyParam = FromSchema<typeof schemas.PostCloseGoal.body>;
export type PostCloseGoalMetadataParam = FromSchema<typeof schemas.PostCloseGoal.metadata>;
export type PostCloseGoalResponse201 = FromSchema<typeof schemas.PostCloseGoal.response['201']>;
export type PostEmployeeBenefitBodyParam = FromSchema<typeof schemas.PostEmployeeBenefit.body>;
export type PostEmployeeBenefitMetadataParam = FromSchema<
  typeof schemas.PostEmployeeBenefit.metadata
>;
export type PostEmployeeBenefitResponse200 = FromSchema<
  typeof schemas.PostEmployeeBenefit.response['200']
>;
export type PostGoalBodyParam = FromSchema<typeof schemas.PostGoal.body>;
export type PostGoalCommentBodyParam = FromSchema<typeof schemas.PostGoalComment.body>;
export type PostGoalCommentMetadataParam = FromSchema<typeof schemas.PostGoalComment.metadata>;
export type PostGoalMetadataParam = FromSchema<typeof schemas.PostGoal.metadata>;
export type PostGoalResponse201 = FromSchema<typeof schemas.PostGoal.response['201']>;
export type PostReopenGoalMetadataParam = FromSchema<typeof schemas.PostReopenGoal.metadata>;
export type PostReopenGoalResponse201 = FromSchema<typeof schemas.PostReopenGoal.response['201']>;
export type PostWebhookBodyParam = FromSchema<typeof schemas.PostWebhook.body>;
export type PostWebhookMetadataParam = FromSchema<typeof schemas.PostWebhook.metadata>;
export type PostWebhookResponse201 = FromSchema<typeof schemas.PostWebhook.response['201']>;
export type PostWebhookResponse400 = FromSchema<typeof schemas.PostWebhook.response['400']>;
export type PostWebhookResponse403 = FromSchema<typeof schemas.PostWebhook.response['403']>;
export type PostWebhookResponse500 = FromSchema<typeof schemas.PostWebhook.response['500']>;
export type PutGoalCommentBodyParam = FromSchema<typeof schemas.PutGoalComment.body>;
export type PutGoalCommentMetadataParam = FromSchema<typeof schemas.PutGoalComment.metadata>;
export type PutGoalProgressBodyParam = FromSchema<typeof schemas.PutGoalProgress.body>;
export type PutGoalProgressMetadataParam = FromSchema<typeof schemas.PutGoalProgress.metadata>;
export type PutGoalProgressResponse200 = FromSchema<typeof schemas.PutGoalProgress.response['200']>;
export type PutGoalSharedWithBodyParam = FromSchema<typeof schemas.PutGoalSharedWith.body>;
export type PutGoalSharedWithMetadataParam = FromSchema<typeof schemas.PutGoalSharedWith.metadata>;
export type PutGoalSharedWithResponse200 = FromSchema<
  typeof schemas.PutGoalSharedWith.response['200']
>;
export type PutGoalV11BodyParam = FromSchema<typeof schemas.PutGoalV11.body>;
export type PutGoalV11MetadataParam = FromSchema<typeof schemas.PutGoalV11.metadata>;
export type PutGoalV11Response200 = FromSchema<typeof schemas.PutGoalV11.response['200']>;
export type PutGoalV1BodyParam = FromSchema<typeof schemas.PutGoalV1.body>;
export type PutGoalV1MetadataParam = FromSchema<typeof schemas.PutGoalV1.metadata>;
export type PutGoalV1Response200 = FromSchema<typeof schemas.PutGoalV1.response['200']>;
export type PutWebhookBodyParam = FromSchema<typeof schemas.PutWebhook.body>;
export type PutWebhookMetadataParam = FromSchema<typeof schemas.PutWebhook.metadata>;
export type PutWebhookResponse200 = FromSchema<typeof schemas.PutWebhook.response['200']>;
export type PutWebhookResponse400 = FromSchema<typeof schemas.PutWebhook.response['400']>;
export type PutWebhookResponse403 = FromSchema<typeof schemas.PutWebhook.response['403']>;
export type PutWebhookResponse404 = FromSchema<typeof schemas.PutWebhook.response['404']>;
export type PutWebhookResponse500 = FromSchema<typeof schemas.PutWebhook.response['500']>;
export type RequestCustomReportBodyParam = FromSchema<typeof schemas.RequestCustomReport.body>;
export type RequestCustomReportMetadataParam = FromSchema<
  typeof schemas.RequestCustomReport.metadata
>;
export type StoreClockEntriesBodyParam = FromSchema<typeof schemas.StoreClockEntries.body>;
export type StoreClockEntriesMetadataParam = FromSchema<typeof schemas.StoreClockEntries.metadata>;
export type StoreDailyEntriesBodyParam = FromSchema<typeof schemas.StoreDailyEntries.body>;
export type StoreDailyEntriesMetadataParam = FromSchema<typeof schemas.StoreDailyEntries.metadata>;
export type TimeOffAddATimeOffHistoryItemForTimeOffRequestBodyParam = FromSchema<
  typeof schemas.TimeOffAddATimeOffHistoryItemForTimeOffRequest.body
>;
export type TimeOffAddATimeOffHistoryItemForTimeOffRequestMetadataParam = FromSchema<
  typeof schemas.TimeOffAddATimeOffHistoryItemForTimeOffRequest.metadata
>;
export type TimeOffAddATimeOffRequestBodyParam = FromSchema<
  typeof schemas.TimeOffAddATimeOffRequest.body
>;
export type TimeOffAddATimeOffRequestMetadataParam = FromSchema<
  typeof schemas.TimeOffAddATimeOffRequest.metadata
>;
export type TimeOffAdjustTimeOffBalanceBodyParam = FromSchema<
  typeof schemas.TimeOffAdjustTimeOffBalance.body
>;
export type TimeOffAdjustTimeOffBalanceMetadataParam = FromSchema<
  typeof schemas.TimeOffAdjustTimeOffBalance.metadata
>;
export type TimeOffAssignTimeOffPoliciesForAnEmployeeBodyParam = FromSchema<
  typeof schemas.TimeOffAssignTimeOffPoliciesForAnEmployee.body
>;
export type TimeOffAssignTimeOffPoliciesForAnEmployeeMetadataParam = FromSchema<
  typeof schemas.TimeOffAssignTimeOffPoliciesForAnEmployee.metadata
>;
export type TimeOffChangeARequestStatusBodyParam = FromSchema<
  typeof schemas.TimeOffChangeARequestStatus.body
>;
export type TimeOffChangeARequestStatusMetadataParam = FromSchema<
  typeof schemas.TimeOffChangeARequestStatus.metadata
>;
export type TimeOffGetTimeOffRequestsMetadataParam = FromSchema<
  typeof schemas.TimeOffGetTimeOffRequests.metadata
>;
export type TimeOffListTimeOffPoliciesForEmployeeMetadataParam = FromSchema<
  typeof schemas.TimeOffListTimeOffPoliciesForEmployee.metadata
>;
export type TimeOffV11AssignTimeOffPoliciesForAnEmployeeBodyParam = FromSchema<
  typeof schemas.TimeOffV11AssignTimeOffPoliciesForAnEmployee.body
>;
export type TimeOffV11AssignTimeOffPoliciesForAnEmployeeMetadataParam = FromSchema<
  typeof schemas.TimeOffV11AssignTimeOffPoliciesForAnEmployee.metadata
>;
export type TimeOffV11ListTimeOffPoliciesForEmployeeMetadataParam = FromSchema<
  typeof schemas.TimeOffV11ListTimeOffPoliciesForEmployee.metadata
>;
export type TimeTrackingEmployeeProjectsMetadataParam = FromSchema<
  typeof schemas.TimeTrackingEmployeeProjects.metadata
>;
export type TimeTrackingProjectTasksMetadataParam = FromSchema<
  typeof schemas.TimeTrackingProjectTasks.metadata
>;
export type UpdateBenefitGroupBodyParam = FromSchema<typeof schemas.UpdateBenefitGroup.body>;
export type UpdateBenefitGroupMetadataParam = FromSchema<
  typeof schemas.UpdateBenefitGroup.metadata
>;
export type UpdateBenefitPlanBodyParam = FromSchema<typeof schemas.UpdateBenefitPlan.body>;
export type UpdateBenefitPlanCoverageBodyParam = FromSchema<
  typeof schemas.UpdateBenefitPlanCoverage.body
>;
export type UpdateBenefitPlanCoverageMetadataParam = FromSchema<
  typeof schemas.UpdateBenefitPlanCoverage.metadata
>;
export type UpdateBenefitPlanMetadataParam = FromSchema<typeof schemas.UpdateBenefitPlan.metadata>;
export type UpdateCompanyBenefitBodyParam = FromSchema<typeof schemas.UpdateCompanyBenefit.body>;
export type UpdateCompanyBenefitMetadataParam = FromSchema<
  typeof schemas.UpdateCompanyBenefit.metadata
>;
export type UpdateCompanyBenefitResponse200 = FromSchema<
  typeof schemas.UpdateCompanyBenefit.response['200']
>;
export type UpdateCompanyFileBodyParam = FromSchema<typeof schemas.UpdateCompanyFile.body>;
export type UpdateCompanyFileMetadataParam = FromSchema<typeof schemas.UpdateCompanyFile.metadata>;
export type UpdateEmployeeBodyParam = FromSchema<typeof schemas.UpdateEmployee.body>;
export type UpdateEmployeeDependentBodyParam = FromSchema<
  typeof schemas.UpdateEmployeeDependent.body
>;
export type UpdateEmployeeDependentMetadataParam = FromSchema<
  typeof schemas.UpdateEmployeeDependent.metadata
>;
export type UpdateEmployeeFileBodyParam = FromSchema<typeof schemas.UpdateEmployeeFile.body>;
export type UpdateEmployeeFileMetadataParam = FromSchema<
  typeof schemas.UpdateEmployeeFile.metadata
>;
export type UpdateEmployeeMetadataParam = FromSchema<typeof schemas.UpdateEmployee.metadata>;
export type UpdateEmployeeTableRowBodyParam = FromSchema<
  typeof schemas.UpdateEmployeeTableRow.body
>;
export type UpdateEmployeeTableRowMetadataParam = FromSchema<
  typeof schemas.UpdateEmployeeTableRow.metadata
>;
export type UpdateEmployeeTableRowVBodyParam = FromSchema<
  typeof schemas.UpdateEmployeeTableRowV.body
>;
export type UpdateEmployeeTableRowVMetadataParam = FromSchema<
  typeof schemas.UpdateEmployeeTableRowV.metadata
>;
export type UpdateEmployeeTrainingRecordBodyParam = FromSchema<
  typeof schemas.UpdateEmployeeTrainingRecord.body
>;
export type UpdateEmployeeTrainingRecordMetadataParam = FromSchema<
  typeof schemas.UpdateEmployeeTrainingRecord.metadata
>;
export type UpdateEmployeeTrainingRecordResponse200 = FromSchema<
  typeof schemas.UpdateEmployeeTrainingRecord.response['200']
>;
export type UpdateTrainingCategoryBodyParam = FromSchema<
  typeof schemas.UpdateTrainingCategory.body
>;
export type UpdateTrainingCategoryMetadataParam = FromSchema<
  typeof schemas.UpdateTrainingCategory.metadata
>;
export type UpdateTrainingCategoryResponse200 = FromSchema<
  typeof schemas.UpdateTrainingCategory.response['200']
>;
export type UpdateTrainingTypeBodyParam = FromSchema<typeof schemas.UpdateTrainingType.body>;
export type UpdateTrainingTypeMetadataParam = FromSchema<
  typeof schemas.UpdateTrainingType.metadata
>;
export type UpdateTrainingTypeResponse200 = FromSchema<
  typeof schemas.UpdateTrainingType.response['200']
>;
export type UploadCompanyFileMetadataParam = FromSchema<typeof schemas.UploadCompanyFile.metadata>;
export type UploadEmployeeFileMetadataParam = FromSchema<
  typeof schemas.UploadEmployeeFile.metadata
>;
export type UploadEmployeePhotoMetadataParam = FromSchema<
  typeof schemas.UploadEmployeePhoto.metadata
>;
