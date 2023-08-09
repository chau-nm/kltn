import { ApiUrlConstants } from "~/constants/apiUrlConstants";
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

export const insert = async (outlineComment: OutlineCommentModel) : Promise<OutlineCommentModel>=> {
    const requestModel: RequestModel<OutlineCommentModel> = {
        data: outlineComment
    }
    const responseModel: ResponseModel<OutlineCommentModel> = await http.post(ApiUrlConstants.INSERT_OURLINE_COMMENT, requestModel);
    const outlineResponse: OutlineCommentModel = responseModel.data;
    return outlineResponse;
}

