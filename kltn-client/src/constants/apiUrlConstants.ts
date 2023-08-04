export class ApiUrlConstants {
    public static readonly BASE_URL = "http://localhost:8080/api";
    
    /** USER */
    public static readonly LOGIN = "/user/login";
    public static readonly GET_USER_WITH_TOKEN = "/user/get-user-with-token";
    public static readonly GET_USER_WITH_ROLE = "/user/get-user-with-role";
    public static readonly GET_USER_BY_ID = "/user/";
    public static readonly UPDATE_USER = "/user/update";
    public static readonly REFRESH_TOKEN = "/user/refresh-token";

    /** NOTIFICATION */
    public static readonly INSERT_NOTIFICATION = "/notification/insert";
    public static readonly UPDATE_NOTIFICATION = "/notification/update";
    public static readonly DELETE_NOTIFICATION = "/notification/delete/";
    public static readonly SEARCH_NOTIFICATION = "/notification/search/";
    public static readonly SEARCH_DETAIL_NOTIFICATION = "/notification/";


    /** Doc2vec */
    public static readonly SEARCH_DOC2VEC = "/doc2vec/search";

    /** THESIS REGISTER CALENDAR */
    public static readonly INSERT_THESIS_REGISTER_CALENDAR = "/thesis-register-calendar/insert";
    public static readonly VIEW_THESIS_REGISTER_CALENDAR = "/thesis-register-calendar/view";
    public static readonly DISABLE_THESIS_REGISTER_CALENDAR = "/thesis-register-calendar/disable";

    /** THESIS */
    public static readonly INSERT_THESIS = "/thesis/insert";
}