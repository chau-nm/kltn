import { APIURL } from "~/constants/api-url";
import http from "~/utils/http";

export const login = async (loginCondition: LoginConditionModel) : Promise<UserCusModel | null> => {
    const requestModel : RequestModel<LoginConditionModel> = {
        data: loginCondition
    }
    const response: ResponseModel<UserCusModel> = await http.post<ResponseModel<UserCusModel>>(APIURL.LOGIN, requestModel)
                            .then(response => response)
                            .catch(error => Promise.reject(error));
    const user : UserCusModel = response.data as UserCusModel;
    return user ? user : null;
}

export const getUsuerByToken = async (accessTokenRequest: AccessTokenRequestModel) : Promise<UserCusModel | null> => {
    const requestModel : RequestModel<AccessTokenRequestModel> = {
        data: accessTokenRequest
    }
    const response: ResponseModel<UserCusModel> = await http.post<ResponseModel<UserCusModel>>(APIURL.GET_USER_WITH_TOKEN, requestModel)
                            .then(response => response)
                            .catch(error => Promise.reject(error));
    const user : UserCusModel = response.data as UserCusModel;
    return user ? user : null;
}