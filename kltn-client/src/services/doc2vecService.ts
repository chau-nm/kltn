import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import http from "~/common/http";

export const searchDoc2vec = async (
  inputTitle: string,
): Promise<Doc2VecModel[]> => {
  const responseModel: ResponseModel<Doc2VecModel[]> = await http.get(
    `${ApiUrlConstants.SEARCH_DOC2VEC}?inputTitle=${inputTitle}`,
  );
  const notificationResponse: Doc2VecModel[] = responseModel.data;
  return notificationResponse;
};
