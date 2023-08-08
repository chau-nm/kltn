import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import { sendEmailResetPassword } from "./mailService";
import http from "~/common/http";


export const getOutlineReviewById = async (thesisId: string): Promise<ThesisModel | null> => {
    const response: ResponseModel<ThesisModel> = await http.get<ResponseModel<ThesisModel>>(ApiUrlConstants.SEARCH_OURLINE_REVIEW + thesisId)
        .then(response => response)
        .catch(error => Promise.reject(error));
    const user: ThesisModel = response.data as ThesisModel;
    return user ? user : null;
}

export const search = async (mutationParams: MutationParamsModel<OutlineReviewSearchConditionModel>): Promise<SearchResponseModel<ThesisModel[]>> => {
    const requestModel: RequestModel<OutlineReviewSearchConditionModel> = {
        data: mutationParams.searchCondition
    }
    const responseModel: ResponseModel<SearchResponseModel<ThesisModel[]>> = await http.post(`${ApiUrlConstants.SEARCH_USER}${mutationParams.page}?pageSize=${mutationParams.pageSize}`, requestModel);
    const notificationsSearchResponse: SearchResponseModel<ThesisModel[]> = responseModel.data;
    return notificationsSearchResponse;
}

export const insert = async (user: UserModel) : Promise<UserModel>=> {
    const requestModel: RequestModel<UserModel> = {
        data: user
    }
    const responseModel: ResponseModel<UserModel> = await http.post(ApiUrlConstants.INSERT_USER, requestModel);
    const userResponse: UserModel = responseModel.data;
    return userResponse;
}


export const updateUser = async (newUser: UserModel): Promise<UserModel | null> => {
    const requestModel: RequestModel<UserModel> = {
        data: newUser
    }

    const response: ResponseModel<UserModel> = await http.put<ResponseModel<UserModel>>(ApiUrlConstants.UPDATE_USER, requestModel)
        .then(response => response)
        .catch(error => Promise.reject(error));
    const userResp: UserModel = response.data as UserModel;
    return userResp ? userResp : null;
}
export const resetPasswordUser = async (user: UserModel): Promise<string | null> => {
    const response: ResponseModel<string> = await http.post<ResponseModel<string>>(`${ApiUrlConstants.RESET_PASSWORD_USER}/${user.userId}`)
        .then(response => response)
        .catch(error => Promise.reject(error));
    const newPassword: string = response.data;
    const paramsEmail : TemplateResetModel={
        to_email:user.email?user.email:"",
        to_name:user.fname,
        newPassword: newPassword,
    }
    sendEmailResetPassword(paramsEmail);
    return newPassword ? newPassword : null;
}

export const getUserByRole = async (role: string): Promise<UserModel[]> => {
    const response: ResponseModel<UserModel[]> = await http.get(`${ApiUrlConstants.GET_USER_WITH_ROLE}?role=${role}`);
    return response.data ? response.data : [];
}