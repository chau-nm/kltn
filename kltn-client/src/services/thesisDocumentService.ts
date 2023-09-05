import http from "~/common/http"
import { ApiUrlConstants } from "~/constants/apiUrlConstants"

export const insertList = async (thesisDocuments: ThesisDocumentModel[]): Promise<ThesisDocumentModel[]> => {
    const requestModel: RequestModel<ThesisDocumentModel[]> = {
        data: thesisDocuments
    }

    const responseModel: ResponseModel<ThesisDocumentModel[]> = await http.post(ApiUrlConstants.INSERT_THESIS_DOCUMENT_LIST, requestModel);
    return responseModel.data;
}