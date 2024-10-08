import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import http from "~/common/http";

export const insert = async (
  notification: NotificationModel,
): Promise<NotificationModel> => {
  const requestModel: RequestModel<NotificationModel> = {
    data: notification,
  };
  const responseModel: ResponseModel<NotificationModel> = await http.post(
    ApiUrlConstants.INSERT_NOTIFICATION,
    requestModel,
  );
  const notificationResponse: NotificationModel = responseModel.data;
  return notificationResponse;
};

export const search = async (
  mutationParams: MutationParamsModel<NotificationSearchConditionModel>,
): Promise<SearchResponseModel<NotificationModel[]>> => {
  const requestModel: RequestModel<NotificationSearchConditionModel> = {
    data: mutationParams.searchCondition,
  };
  const responseModel: ResponseModel<SearchResponseModel<NotificationModel[]>> =
    await http.post(
      `${ApiUrlConstants.SEARCH_NOTIFICATION}${mutationParams.page}?pageSize=${mutationParams.pageSize ?? 20}`,
      requestModel,
    );
  const notificationsSearchResponse: SearchResponseModel<NotificationModel[]> =
    responseModel.data;
  return notificationsSearchResponse;
};

export const searchDetail = async (id: string): Promise<NotificationModel> => {
  const responseModel: ResponseModel<NotificationModel> = await http.get(
    `${ApiUrlConstants.SEARCH_DETAIL_NOTIFICATION}${id}`,
  );
  const notificationResponse: NotificationModel = responseModel.data;
  return notificationResponse;
};

export const update = async (
  notification: NotificationModel,
): Promise<boolean> => {
  const requestModel: RequestModel<NotificationModel> = {
    data: notification,
  };
  const responseModel: ResponseModel<boolean> = await http.put(
    ApiUrlConstants.UPDATE_NOTIFICATION,
    requestModel,
  );
  return responseModel ? responseModel.data : false;
};

export const remove = async (id: string): Promise<boolean> => {
  const responseModel: ResponseModel<boolean> = await http.delete(
    `${ApiUrlConstants.DELETE_NOTIFICATION}${id}`,
  );
  return responseModel ? responseModel.data : false;
};
