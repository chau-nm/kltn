import { APIURL } from "~/constants/api-url";
import http from "~/utils/http";

export const login = async (loginCondition: LoginCondition) : Promise<UserCusModel | null> => {
    const requestModel : RequestModel<LoginCondition> = {
        data: loginCondition
    }
    const response: ResponseModel<UserCusModel> = await http.post<ResponseModel<UserCusModel>>(APIURL.LOGIN, requestModel)
                            .then(response => response)
                            .catch(error => Promise.reject(error));
    const user : UserCusModel = response.data as UserCusModel;
    return user ? user : null;
}

export const checkLogged = async () : Promise<UserCusModel | null> => {
    const response: ResponseModel<UserCusModel> = await http.post<ResponseModel<UserCusModel>>(APIURL.CHECK_LOGIN)
                            .then(response => response)
                           .catch(error => Promise.reject(error));
    const user : UserCusModel = response.data as UserCusModel;
    console.log(response);
    return user ? user : null;
} 