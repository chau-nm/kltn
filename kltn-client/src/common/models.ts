/** HTTP */
interface RequestModel<T>{
    data?: T
}

interface ResponseModel<T>{
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
interface AccessTokenRequestModel{
    accessToken: string | null;
}

interface LoginConditionModel{
    username: string,
    password: string
}

interface SearchResponseModel<T> {
    total?: number;
    data? : T
}

/** User */
interface UserModel{
    userId: string;
    username: string;
    password: string;
    fname: string;
    birthday: Date;
    faculty: string;
    studentClass: string;
    roles: string[];
    accessToken: string;
    refreshToken: string;
}

/** Notification */
interface NotificationModel{
    id: string;
    title?: string;
    content?: string;
    attachmentUrls?: string[];
    isDeleted?: boolean;
    createdAt?: number;
    updatedAt?: number;
}

interface NotificationSearchConditionModel{
    title?: string;
    startAt?: number;
    endAt?: number;
}

/** THESIS */
interface ThesisModel{
    
}