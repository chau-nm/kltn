import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import http from "~/common/http";


export const getCommentByThesisId = async (thesisId: string): Promise<OutlineCommentModel[] | []> => {
    const response: ResponseModel<OutlineCommentModel[] | []> = await http.get<ResponseModel<OutlineCommentModel[]>>(`${ApiUrlConstants.GET_OULINE_COMMENT_BY_THESIS_ID}?thesisId=${thesisId}`)
        .then(response => response)
        .catch(error => Promise.reject(error));
    const user: OutlineCommentModel[] |[] = response.data as OutlineCommentModel[];
    return user ? user : [];
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
    const responseModel: ResponseModel<OutlineCommentModel> = await http.post(ApiUrlConstants.INSERT_OUTLINE_COMMENT, requestModel);
    const outlineResponse: OutlineCommentModel = responseModel.data;
    return outlineResponse;
}

export const updateComment = async (outlineComment: OutlineCommentModel) : Promise<boolean>=> {
    const requestModel: RequestModel<OutlineCommentModel> = {
        data: outlineComment
    }
    const responseModel: ResponseModel<boolean> = await http.put(ApiUrlConstants.UPDATE_OUTLINE_COMMENT, requestModel);
    const outlineResponse: boolean = responseModel.data;
    return outlineResponse;
}

export const remove = async (id : string) : Promise<boolean> => {
    const responseModel: ResponseModel<boolean> = await http.delete(`${ApiUrlConstants.DELETE_OUTLINE_COMMENT_BY_THESIS}${id}`);
    return responseModel ? responseModel.data : false;
}

