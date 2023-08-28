import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

type InsertUserReviewerPayload = {
    thesisId: string;
    userId: string;
}

export const insertUserReviewer = async ({ thesisId, userId }: InsertUserReviewerPayload): Promise<ReviewerModel> => {
    const responseModel: ResponseModel<ReviewerModel> =
        await http.post(`${ApiUrlConstants.INSERT_USER_REVIEWER}?thesisId=${thesisId}&userId=${userId}`);
    return responseModel.data;
}

export const updateReviewer = async (reviewer: ReviewerModel): Promise<ReviewerModel> => {
    const requestModel: RequestModel<ReviewerModel> = {
        data: reviewer
    }

    const responseModel: ResponseModel<ReviewerModel> = await http.put(ApiUrlConstants.UPDATE_REVIEWER, requestModel);
    return responseModel.data;
}