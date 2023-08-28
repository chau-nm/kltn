import http from "~/common/http"
import { ApiUrlConstants } from "~/constants/apiUrlConstants"

export const insertList = async (calendars: ThesisDefenseCalendar[]): Promise<ThesisDefenseCalendar[]> => {
    const requestModel: RequestModel<ThesisDefenseCalendar[]> = {
        data: calendars
    }

    const responseModel: ResponseModel<ThesisDefenseCalendar[]> = await http.post(ApiUrlConstants.INSERT_THESIS_DEFENSE_CALENDAR_LIST, requestModel);
    return responseModel.data;
}