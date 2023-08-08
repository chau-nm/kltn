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

export const update = async (thesis: ThesisModel): Promise<boolean> => {
    const requestModel : RequestModel<ThesisModel> = {
        data: thesis
    }
    const thesisResponse: ResponseModel<boolean> 
        = await http.put(ApiUrlConstants.UPDATE_THESIS, requestModel);
    return thesisResponse.data;
}

export const searchByUser = async (userId: string) : Promise<ThesisModel[]> => {
    const thesisLiseResponse: ResponseModel<ThesisModel[]>
        = await http.get(`${ApiUrlConstants.SEARCH_THESIS_BY_USER}?userId=${userId}`);
    return thesisLiseResponse.data ?? [];
}