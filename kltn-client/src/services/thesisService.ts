import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const insert = async (thesis: ThesisModel): Promise<ThesisModel | null> => {
    const requestModel : RequestModel<ThesisModel> = {
        data: thesis
    }
    const thesisResponse: ResponseModel<ThesisModel> 
        = await http.post(ApiUrlConstants.INSERT_THESIS, requestModel);
    return thesisResponse.data ? thesisResponse.data : null;
}

export const search = async (mutationParams: MutationParamsModel<OutlineReviewSearchConditionModel>): Promise<SearchResponseModel<ThesisModel[]>> => {
    const requestModel: RequestModel<OutlineReviewSearchConditionModel> = {
        data: mutationParams.searchCondition
    }
    const responseModel: ResponseModel<SearchResponseModel<ThesisModel[]>> = await http.post(`${ApiUrlConstants.SEARCH_THESIS}${mutationParams.page}?pageSize=${mutationParams.pageSize}`, requestModel);
    const notificationsSearchResponse: SearchResponseModel<ThesisModel[]> = responseModel.data;
    return notificationsSearchResponse;
}

export const getThesisById = async (thesisId: string): Promise<ThesisModel | null> => {
    const response: ResponseModel<ThesisModel> = await http.get<ResponseModel<ThesisModel>>(ApiUrlConstants.SEARCH_DETAIL_THESIS + thesisId)
        .then(response => response)
        .catch(error => Promise.reject(error));
    const thesis: ThesisModel = response.data as ThesisModel;
    return thesis ? thesis : null;
}