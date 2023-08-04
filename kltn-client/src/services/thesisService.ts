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