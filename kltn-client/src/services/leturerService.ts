import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const insert = async (leturer: LeturerModel): Promise<LeturerModel> => {
    const requestModel: RequestModel<LeturerModel> = {
        data: leturer
    }
    const responseModel: ResponseModel<LeturerModel> = await http.post(ApiUrlConstants.INSERT_LETURER, requestModel);
    return responseModel.data;
}