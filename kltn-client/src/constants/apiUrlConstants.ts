export class ApiUrlConstants {
    public static readonly BASE_URL = "http://localhost:8080/api";
    
    /** USER */
    public static readonly LOGIN = "/user/login";
    public static readonly GET_USER_WITH_TOKEN = "/user/get-user-with-token";
    public static readonly GET_USER_BY_ID = "/user/";
    public static readonly UPDATE_USER = "/user/update";

    /** NOTIFICATION */
    public static readonly INSERT_NOTIFICATION = "/notification/insert";
    public static readonly SEARCH_NOTIFICATION = "/notification/search/";
}