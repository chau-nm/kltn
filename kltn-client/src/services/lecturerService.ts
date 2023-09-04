import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const insert = async (lecturer: LecturerModel): Promise<LecturerModel> => {
    const requestModel: RequestModel<LecturerModel> = {
        data: lecturer
    }
    const responseModel: ResponseModel<LecturerModel> = await http.post(ApiUrlConstants.INSERT_LECTURER, requestModel);
    return responseModel.data;
}

export const update = async (lecturer: LecturerModel): Promise<LecturerModel> => {
    const requestModel: RequestModel<LecturerModel> = {
        data: lecturer
    }
    const responseModel: ResponseModel<LecturerModel> = await http.put(ApiUrlConstants.UPDATE_LECTURER, requestModel);
    return responseModel.data;
}