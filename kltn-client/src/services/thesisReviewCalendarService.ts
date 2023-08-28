import http from "~/common/http"
import { ApiUrlConstants } from "~/constants/apiUrlConstants"

export const insertList = async (calendars: ThesisReviewerCalendar[]): Promise<ThesisReviewerCalendar[]> => {
    const requestModel: RequestModel<ThesisReviewerCalendar[]> = {
        data: calendars
    }

    const responseModel: ResponseModel<ThesisReviewerCalendar[]> = await http.post(ApiUrlConstants.INSERT_THESIS_REVIEW_CALENDAR_LIST, requestModel);
    return responseModel.data;
}