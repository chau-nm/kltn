import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import { sendEmailResetPassword } from "./mailService";
import http from "~/common/http";

export const login = async (
  loginCondition: LoginConditionModel,
): Promise<UserModel | null> => {
  const requestModel: RequestModel<LoginConditionModel> = {
    data: loginCondition,
  };
  const response: ResponseModel<UserModel> = await http
    .post<ResponseModel<UserModel>>(ApiUrlConstants.LOGIN, requestModel)
    .then((response) => response)
    .catch(async (error) => await Promise.reject(error));
  const user: UserModel = response.data;
  return user || null;
};

export const getUsuerByToken = async (
  accessTokenRequest: AccessTokenRequestModel,
): Promise<UserModel | null> => {
  const requestModel: RequestModel<AccessTokenRequestModel> = {
    data: accessTokenRequest,
  };
  const response: ResponseModel<UserModel> = await http
    .post<ResponseModel<UserModel>>(
      ApiUrlConstants.GET_USER_WITH_TOKEN,
      requestModel,
    )
    .then((response) => response)
    .catch(async (error) => await Promise.reject(error));
  const user: UserModel = response.data;
  return user || null;
};

export const getUSerById = async (
  userId: string,
): Promise<UserModel | null> => {
  const response: ResponseModel<UserModel> = await http
    .get<ResponseModel<UserModel>>(ApiUrlConstants.GET_USER_BY_ID + userId)
    .then((response) => response)
    .catch(async (error) => await Promise.reject(error));
  const user: UserModel = response.data;
  return user || null;
};

export const search = async (
  mutationParams: MutationParamsModel<UserSearchConditionModel>,
): Promise<SearchResponseModel<UserModel[]>> => {
  const requestModel: RequestModel<UserSearchConditionModel> = {
    data: mutationParams.searchCondition,
  };
  const responseModel: ResponseModel<SearchResponseModel<UserModel[]>> =
    await http.post(
      `${ApiUrlConstants.SEARCH_USER}${mutationParams.page}?pageSize=${mutationParams.pageSize ?? 20}`,
      requestModel,
    );
  const notificationsSearchResponse: SearchResponseModel<UserModel[]> =
    responseModel.data;
  return notificationsSearchResponse;
};

export const insert = async (user: UserModel): Promise<UserModel> => {
  const requestModel: RequestModel<UserModel> = {
    data: user,
  };
  const responseModel: ResponseModel<UserModel> = await http.post(
    ApiUrlConstants.INSERT_USER,
    requestModel,
  );
  const userResponse: UserModel = responseModel.data;
  return userResponse;
};

export const updateUser = async (
  newUser: UserModel,
): Promise<UserModel | null> => {
  const requestModel: RequestModel<UserModel> = {
    data: newUser,
  };

  const response: ResponseModel<UserModel> = await http
    .put<ResponseModel<UserModel>>(ApiUrlConstants.UPDATE_USER, requestModel)
    .then((response) => response)
    .catch(async (error) => await Promise.reject(error));
  const userResp: UserModel = response.data;
  return userResp || null;
};
export const resetPasswordUser = async (
  user: UserModel,
): Promise<string | null> => {
  const response: ResponseModel<string> = await http
    .post<ResponseModel<string>>(
      `${ApiUrlConstants.RESET_PASSWORD_USER}/${user.userId ?? 20}`,
    )
    .then((response) => response)
    .catch(async (error) => await Promise.reject(error));
  const newPassword: string = response.data;
  const paramsEmail: TemplateResetModel = {
    to_email: user.email ? user.email : "",
    to_name: user.fname ? user.fname : "",
    newPassword,
  };
  sendEmailResetPassword(paramsEmail);
  return newPassword || null;
};

export const getUserByRole = async (role: string): Promise<UserModel[]> => {
  const response: ResponseModel<UserModel[]> = await http.get(
    `${ApiUrlConstants.GET_USER_WITH_ROLE}?role=${role}`,
  );
  return response.data ? response.data : [];
};

export const changePassword = async (changePasswordPayload: ChangePasswordPayload): Promise<UserModel | null> => {
  const requestModel: RequestModel<ChangePasswordPayload> = {
    data: changePasswordPayload
  }
  const responseModel: ResponseModel<UserModel | null> = await http.put(ApiUrlConstants.CHANGE_PASSWORD, requestModel);
  return responseModel.data;
}

export const deleteUser = async (id: string): Promise<boolean> => {
  const responseModel: ResponseModel<boolean> = await http.delete(`${ApiUrlConstants.DELETE_USER}/${id}`);
  return responseModel.data;
}