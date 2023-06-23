import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import http from "~/common/http";

export const insert = async (notification: NotificationModel) : Promise<NotificationModel>=> {
    const requestModel: RequestModel<NotificationModel> = {
        data: notification
    }
    const responseModel: ResponseModel<NotificationModel> = await http.post(ApiUrlConstants.INSERT_NOTIFICATION, requestModel);
    const notificationResponse: NotificationModel = responseModel.data;
    return notificationResponse;
}


export const search = async (mutationParams: MutationParamsModel<NotificationSearchConditionModel>) : Promise<SearchResponseModel<NotificationModel[]>> => {
    const requestModel: RequestModel<NotificationSearchConditionModel> = {
        data: mutationParams.searchCondition
    }
    const responseModel: ResponseModel<SearchResponseModel<NotificationModel[]>> = await http.post(`${ApiUrlConstants.SEARCH_NOTIFICATION}${mutationParams.page}?pageSize=${mutationParams.pageSize}`, requestModel);
    const notificationsSearchResponse: SearchResponseModel<NotificationModel[]> = responseModel.data;
    return notificationsSearchResponse;
}