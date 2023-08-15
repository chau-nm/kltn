import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";


type InsertUserParams = {
    thesisId: string;
    usersId: string[];
}
export const insertUser = async ({ thesisId, usersId }: InsertUserParams): Promise<ProtectionRatingModel[]> => {
    const responseModel: ResponseModel<ProtectionRatingModel[]> = await http.post(`${ApiUrlConstants.INSERT_USER_PROTECTION_RATE}/${thesisId}`,usersId);
    return responseModel.data;
}

export const deleteByThesisId = async ( thesisId : String): Promise<boolean> => {
    const responseModel: ResponseModel<boolean> = await http.delete(`${ApiUrlConstants.DELETE_PROTECTION_RATE_BY_THESIS_ID}?thesisId=${thesisId}`);
    return responseModel.data;
}
