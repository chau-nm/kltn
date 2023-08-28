import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

type ThesisUsersPayload = {
    thesisId: string;
    userIds: string[];
}

export const insertReviewer = async ({ thesisId, userIds }: ThesisUsersPayload): Promise<ThesisReviewerComment[]> => {
    const requestModel: RequestModel<string[]> = {
        data: userIds
    }
    const responseModel: ResponseModel<ThesisReviewerComment[]> =
        await http.post(`${ApiUrlConstants.INSERT_REVIEWER_COMMENT}?thesisId=${thesisId}`, requestModel);
    return responseModel.data;
}

export const update = async (thesisReviewComment: ThesisReviewerComment): Promise<boolean> => {
    const requestModel: RequestModel<ThesisReviewerComment> = {
        data: thesisReviewComment
    }
    const responseModel: ResponseModel<boolean> =
        await http.put(ApiUrlConstants.UPDATE_REVIEWER_COMMENT, requestModel);
    return responseModel.data;
}

export const insertGeneral = async (thesisReviewComment: ThesisReviewerComment): Promise<ThesisReviewerComment> => {
    const requestModel: RequestModel<ThesisReviewerComment> = {
        data: thesisReviewComment
    }
    const responseModel: ResponseModel<ThesisReviewerComment> =
        await http.post(ApiUrlConstants.INSERT_GENERAL, requestModel);
    return responseModel.data;
}