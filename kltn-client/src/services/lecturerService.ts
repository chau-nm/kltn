import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const insert = async (lecturer: LecturerModel): Promise<LecturerModel> => {
    const requestModel: RequestModel<LecturerModel> = {
        data: lecturer
    }
    const responseModel: ResponseModel<LecturerModel> = await http.post(ApiUrlConstants.INSERT_LECTURER, requestModel);
    return responseModel.data;
}