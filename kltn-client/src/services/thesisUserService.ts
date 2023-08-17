import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const findByThesis = async (
  thesisId: string,
): Promise<ThesisUserModel[]> => {
  const thesisUserResponse: ResponseModel<ThesisUserModel[]> = await http.get(
    `${ApiUrlConstants.FIND_THESIS_USER_BY_THESIS}?thesisId=${thesisId}`,
  );
  return thesisUserResponse.data ?? [];
};

export const update = async (thesisUser: ThesisUserModel): Promise<boolean> => {
  const requestModel: RequestModel<ThesisUserModel> = {
    data: thesisUser,
  };
  const responseModel: ResponseModel<boolean> = await http.post(
    ApiUrlConstants.UPDATE_THESIS_USER,
    requestModel,
  );
  return responseModel.data;
};
