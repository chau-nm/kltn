/** HTTP */
interface RequestModel<T> {
    data?: T
}

interface ResponseModel<T> {
    status: number,
    message: string,
    data: T
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
    username: string,
    password: string
}

interface SearchResponseModel<T> {
    total?: number;
    data?: T
}

/** User */
interface UserModel {
    userId: string;
    username: string;
    password: string;
    gender: boolean;
    email:string;
    fname: string;
    birthday?: Date;
    faculty?: string;
    studentClass?: string;
    roles: string[];
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
interface ThesisModel{
    id?: string;
    topic?: string;
    description?: string;
    year?: number;
    semester?: number;
    status?: number;
    isDeleted?: boolean;
    createdAt?: number;
    updatedAt?: number;
    students?: UserModel[];
    teachers?: UserModel[];
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

/** Doc2Vec */
interface Doc2VecModel {
    id?: number;
    title?: string;
    url?: string;
}

/** Email Template */

interface TemplateResetModel{
    to_email: string;
    to_name:string;
    newPassword: string;
}