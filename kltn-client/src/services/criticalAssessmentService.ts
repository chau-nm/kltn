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
