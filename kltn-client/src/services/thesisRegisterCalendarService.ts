import http from '~/common/http';
import { ApiUrlConstants } from '~/constants/apiUrlConstants';

export const insert = async (thesisRegisterCalendar : ThesisRegisterCalendarModel) : Promise<ThesisRegisterCalendarModel> => {
    const requestModel : RequestModel<ThesisRegisterCalendarModel> = {
        data: thesisRegisterCalendar
    }
    const thesisRegisterCalendarResponse: ResponseModel<ThesisRegisterCalendarModel> 
        = await http.post(ApiUrlConstants.INSERT_THESIS_REGISTER_CALENDAR, requestModel);
    return thesisRegisterCalendarResponse.data;
}

export const view = async () : Promise<ThesisRegisterCalendarModel> => {
    const thesisRegisterCalendarResponse: ResponseModel<ThesisRegisterCalendarModel>
        = await http.get(ApiUrlConstants.VIEW_THESIS_REGISTER_CALENDAR);
    return thesisRegisterCalendarResponse.data;
}

export const disable = async () : Promise<Boolean> => {
    const thesisRegisterCalendarResponse: ResponseModel<Boolean>
        = await http.put(ApiUrlConstants.DISABLE_THESIS_REGISTER_CALENDAR);
    return thesisRegisterCalendarResponse.data;
}