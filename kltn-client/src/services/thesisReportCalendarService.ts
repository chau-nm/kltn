import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const insert = async (
  thesisReportCalendar: ThesisReportCalendarModel,
): Promise<ThesisReportCalendarModel> => {
  const requestModel: RequestModel<ThesisReportCalendarModel> = {
    data: thesisReportCalendar,
  };
  const responseModel: ResponseModel<ThesisReportCalendarModel> =
    await http.post(
      ApiUrlConstants.INSERT_THESIS_REPORT_CALENDAR,
      requestModel,
    );
  return responseModel.data;
};
