import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import http from "~/common/http";

export const login = async (loginCondition: LoginConditionModel) : Promise<UserModel | null> => {
    const requestModel : RequestModel<LoginConditionModel> = {
        data: loginCondition
    }
    const response: ResponseModel<UserModel> = await http.post<ResponseModel<UserModel>>(ApiUrlConstants.LOGIN, requestModel)
                            .then(response => response)
                            .catch(error => Promise.reject(error));
    const user : UserModel = response.data as UserModel;
    return user ? user : null;
}

export const getUsuerByToken = async (accessTokenRequest: AccessTokenRequestModel) : Promise<UserModel | null> => {
    const requestModel : RequestModel<AccessTokenRequestModel> = {
        data: accessTokenRequest
    }
    const response: ResponseModel<UserModel> = await http.post<ResponseModel<UserModel>>(ApiUrlConstants.GET_USER_WITH_TOKEN, requestModel)
                            .then(response => response)
                            .catch(error => Promise.reject(error));
    const user : UserModel = response.data as UserModel;
    return user ? user : null;
}

export const getUSerById = async (userId : string) : Promise<UserModel | null> => {
    const response: ResponseModel<UserModel> = await http.get<ResponseModel<UserModel>>(ApiUrlConstants.GET_USER_BY_ID + userId)
                                .then(response => response)
                                .catch(error => Promise.reject(error));
    const user : UserModel = response.data as UserModel;
    return user ? user : null;
}

export const updateUser = async (newUser: UserModel) :  Promise<UserModel | null>  => {
    const requestModel : RequestModel<UserModel> = {
        data: newUser
    }

    const response: ResponseModel<UserModel> = await http.put<ResponseModel<UserModel>>(ApiUrlConstants.UPDATE_USER, requestModel)
                                .then(response => response)
                                .catch(error => Promise.reject(error));
    const userResp : UserModel = response.data as UserModel;
    return userResp ? userResp : null;
}