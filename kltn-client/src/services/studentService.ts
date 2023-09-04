import http from "~/common/http"
import { ApiUrlConstants } from "~/constants/apiUrlConstants"

export const insert = async (student: StudentModel): Promise<StudentModel> => {
    const requestModel: RequestModel<StudentModel> = {
        data: student
    }
    const responseModel: ResponseModel<StudentModel> = await http.post(ApiUrlConstants.INSERT_STUDENT, requestModel);
    return responseModel.data;
}

export const update = async (student: StudentModel): Promise<StudentModel> => {
    const requestModel: RequestModel<StudentModel> = {
        data: student
    }
    const responseModel: ResponseModel<StudentModel> = await http.put(ApiUrlConstants.UPDATE_STUDENT, requestModel);
    return responseModel.data;
}