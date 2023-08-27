import http from "~/common/http";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

type InsertUserParams = {
  thesisId: string;
  userId: string;
};
export const insertUser = async ({
  thesisId,
  userId,
}: InsertUserParams): Promise<CriticalAssessmentModel> => {
  const responseModel: ResponseModel<CriticalAssessmentModel> = await http.post(
    `${ApiUrlConstants.INSERT_USER_CRITICAL_ASSESSMENT}?thesisId=${thesisId}&userId=${userId}`,
  );
  return responseModel.data;
};

export const searchByThesisIdAndMarker = async ({ thesisId,
  userId }: InsertUserParams): Promise<CriticalAssessmentModel> => {
  const responseModel: ResponseModel<CriticalAssessmentModel> = await http.get(
    `${ApiUrlConstants.SEARCH_CRITICAL_ASSESSMENT_BY_THESIS_ID_AND_MARKER}?thesisId=${thesisId}&userId=${userId}`,
  );
  return responseModel.data;
}

export const update = async (ca: CriticalAssessmentModel): Promise<boolean> => {
  const responseModel: ResponseModel<boolean> = await http.put(
    ApiUrlConstants.UPDATE_CRITICAL_ASSESSMENT, ca
  );
  return responseModel.data;
}