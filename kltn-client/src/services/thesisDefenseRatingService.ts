import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

type InsertRatersPayload = {
    thesisId: string;
    userIds: string[];
}

export const insertRaters = async ({ thesisId, userIds }: InsertRatersPayload): Promise<DefenseRatingModel[]> => {
    const requestModel: RequestModel<string[]> = {
        data: userIds
    }
    const responseModel: ResponseModel<DefenseRatingModel[]> =
        await http.post(`${ApiUrlConstants.INSERT_DEFENSE_RATERS}?thesisId=${thesisId}`, requestModel);
    return responseModel.data;
}

export const update = async (defenseRating: DefenseRatingModel): Promise<DefenseRatingModel> => {
    const requestModel: RequestModel<DefenseRatingModel> = {
        data: defenseRating
    }
    const responseModel: ResponseModel<DefenseRatingModel> =
        await http.put(ApiUrlConstants.UPDATE_DEFENSE_RATING, requestModel);
    return responseModel.data;
}