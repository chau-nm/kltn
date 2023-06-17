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

export const getUSerById = async (userId : string) : Promise<UserCusModel | null> => {
    const response: ResponseModel<UserCusModel> = await http.get<ResponseModel<UserCusModel>>(APIURL.GET_USER_BY_ID + userId)
                                .then(response => response)
                                .catch(error => Promise.reject(error));
    const user : UserCusModel = response.data as UserCusModel;
    return user ? user : null;
}

export const updateUser = async (newUser: UserCusModel) :  Promise<UserCusModel | null>  => {
    const requestModel : RequestModel<UserCusModel> = {
        data: newUser
    }

    const response: ResponseModel<UserCusModel> = await http.put<ResponseModel<UserCusModel>>(APIURL.UPDATE_USER, requestModel)
                                .then(response => response)
                                .catch(error => Promise.reject(error));
    const userResp : UserCusModel = response.data as UserCusModel;
    return userResp ? userResp : null;
}