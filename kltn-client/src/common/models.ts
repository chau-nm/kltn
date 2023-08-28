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
  isStudent?: boolean;
  isTeacher?: boolean;
  roles?: string[];
  accessToken?: string;
  refreshToken?: string;
}

interface StudentModel extends UserModel {
  studentClass?: string;
}

interface LecturerModel extends UserModel {
  degree?: string;
  title?: string;
}

interface UserSearchConditionModel {
  username?: string;
  name?: string;
  role?: string;
  id?: number;
  studentClass?: string;
}

interface ChangePasswordPayload {
  userId?: string;
  oldPassword?: string;
  newPassword?: string;
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
  schoolYear?: number;
  semester?: number;
  students?: StudentModel[];
  teachers?: LecturerModel[];
  userCreated?: UserModel;
  fileAttachments?: ThesisDocumentModel[];
  thesisReviewerComments?: ThesisReviewerComment[];
  reviewCalendar?: ThesisReviewerCalendar;
  reviewers?: ReviewerModel[];
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

interface ThesisReviewerComment {
  id?: string;
  thesisId?: string;
  userId?: string;
  comment?: string;
  isGeneral?: boolean;
  result?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
  user?: UserModel;
}

interface InsertThesisCouncilPayload {
  thesisId?: string;
  councils?: string[];
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

interface ThesisStudentModel {
  id?: string;
  thesisId?: string;
  studentId?: string;
  student?: StudentModel;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface ThesislecturerModel {
  id?: string;
  thesisId?: string;
  lecturerId?: string;
  lecturer?: StudentModel;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface ThesisDocumentModel {
  id?: string;
  thesisId?: string;
  fileUrl?: string;
  type?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

/** CRITICAL ASSESSMENT */
interface ReviewerModel {
  id?: string;
  thesisId?: string;
  marker?: string;
  pageNumber?: number;
  chapterNumber?: number;
  tableNumber?: number;
  chartNumber?: number;
  drawingBoardNumber?: number;
  imageNumber?: number;
  documentNumber?: number;
  calculationSoftwareNumber?: number;
  layout?: string;
  writing?: string;
  technicalTerms?: string;
  advantage?: string;
  limitation?: string;
  conclude?: string;
  suggestion?: number;
  questions?: string[];
  reviewerScores?: ReviewerScoreModel[];
  lecturerMaker?: LecturerModel;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface ReviewerScoreModel {
  id?: string;
  reviewerId?: string;
  studentId?: string;
  student?: StudentModel;
  score?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

/** PROTECTION RATTING */
interface DefenseRatingModel {
  id?: string;
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

interface DefenseRatingScoreModel {
  id?: string;
  drId?: string;
  studentId?: string;
  student?: StudentModel;
  score1?: number;
  score2?: number;
  score3?: number;
  totalScore?: number;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

/** THESIS REPORT CALENDAR */
interface ThesisDefenseCalendar {
  id?: number;
  thesisId?: string;
  timestamp?: number;
  room?: string;
  isDeleted?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

interface ThesisReviewerCalendar {
  id?: string;
  thesisId?: string;
  startAt?: number;
  endAt?: number;
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