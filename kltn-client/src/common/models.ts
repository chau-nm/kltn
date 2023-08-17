/** HTTP */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface RequestModel<T> {
  data?: T;
}

interface ResponseModel<T> {
  status: number;
  message: string;
  data: T;
}

/** Common */
interface TimeModel {
  h: number;
  m: number;
  s: number;
}

/** API */
interface MutationParamsModel<T> {
  page: number;
  pageSize?: number;
  searchCondition?: T;
}

/** Auth */
interface AccessTokenRequestModel {
  accessToken: string | null;
}

interface LoginConditionModel {
  username: string;
  password: string;
}

interface SearchResponseModel<T> {
  total?: number;
  data?: T;
}

/** User */
interface UserModel {
  userId?: string;
  username?: string;
  password?: string;
  gender?: boolean;
  email?: string;
  fname?: string;
  birthday?: Date;
  faculty?: string;
  studentClass?: string;
  roles?: string[];
  accessToken?: string;
  refreshToken?: string;
}

interface UserSearchConditionModel {
  username?: string;
  name?: string;
  role?: string;
  id?: number;
  studentClass?: string;
}

/** Notification */
interface NotificationModel {
  id: string;
  title?: string;
  content?: string;
  attachmentUrls?: string[];
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface NotificationSearchConditionModel {
  title?: string;
  startAt?: number;
  endAt?: number;
}

/** THESIS */
interface ThesisModel {
  id?: string;
  topic?: string;
  description?: string;
  year?: number;
  semester?: number;
  students?: ThesisUserModel[];
  teacher?: ThesisUserModel;
  outlineUrl?: string;
  documentUrl?: string;
  userCreated?: UserModel;
  status?: number;
  isDeleted?: boolean;
  createdBy?: string;
  createdAt?: number;
  updatedAt?: number;
}

interface ThesisSearchConditionModel {
  topic?: string;
  year?: number;
  semester?: number;
  status?: number;
  councilId?: string;
}

interface OutlineReviewSearchConditionModel { }

interface OutlineCommentModel {
  thesisId: string;
  userId: string;
  comment?: string;
  order?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
  user?: UserModel;
}

interface ThesisRegisterCalendarModel {
  id?: number;
  startAt?: number;
  endAt?: number;
  active?: boolean;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface ThesisUserModel {
  id?: string;
  thesisId?: string;
  userId?: string;
  user?: UserModel;
  type?: number;
  status?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

/** CRITICAL ASSESSMENT */
interface CriticalAssessmentModel {
  id: string;
  thesisId: string;
  marker: string;
  pageNumber: number;
  chapterNumber: number;
  tableNumber: number;
  chartNumber: number;
  drawingBoardNumber: number;
  imageNumber: number;
  documentNumber: number;
  calculationSoftwareNumber: number;
  layout: string;
  writing: string;
  technicalTerms: string;
  advantage: string;
  defect: string;
  conclude: string;
  suggestion: string;
  criticalAssessmentQuestions: string[];
  isDeleted: boolean;
  createdAt: number;
  updatedAt: number;
}

interface CriticalAssessmentScoreModel { }

/** PROTECTION RATTING */
interface ProtectionRatingModel {
  id: string;
  thesisId: string;
  marker: string;
  content: number;
  analysisResult: number;
  feedBackLectureQuestion: number;
  councilQuestin: number;
  behavior: number;
  isDeleted: boolean;
  createdAt: number;
  updatedAt: number;
}

/** THESIS REPORT CALENDAR */
interface ThesisReportCalendarModel {
  id?: string;
  thesisId?: string;
  timestamp?: number;
  type?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

/** Doc2Vec */
interface Doc2VecModel {
  id?: number;
  title?: string;
  url?: string;
}

/** Email Template */

interface TemplateResetModel {
  to_email: string;
  to_name: string;
  newPassword: string;
}

interface RefreshTokenModel {
  refreshToken?: string;
}