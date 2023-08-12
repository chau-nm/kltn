export class ApiUrlConstants {
    public static readonly BASE_URL = "http://localhost:8080/api";

    /** USER */
    public static readonly LOGIN = "/user/login";
    public static readonly GET_USER_WITH_TOKEN = "/user/get-user-with-token";
    public static readonly GET_USER_WITH_ROLE = "/user/get-user-with-role";
    public static readonly GET_USER_BY_ID = "/user/";
    public static readonly UPDATE_USER = "/user/update";
    public static readonly SEARCH_USER = "/user/search/";
    public static readonly INSERT_USER = "/user/insert";
    public static readonly RESET_PASSWORD_USER = "/user/reset";
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
    public static readonly SEARCH_THESIS = "/thesis/search/";
    public static readonly SEARCH_DETAIL_THESIS = "/thesis/";
    public static readonly SEARCH_BY_COUNCIL_ID = "/thesis/find-by-council/";

    /** THESIS OUTLINE Comment */
    public static readonly UPDATE_OUTLINE_COMMENT = "thesis-outline-comment/update-comment";
    public static readonly INSERT_OUTLINE_COMMENT = "/thesis-outline-comment/insert";
    public static readonly DELETE_OUTLINE_COMMENT_BY_THESIS = "/thesis-outline-comment/delete-by-thesis/";

    /** THESIS OUTLINE REVIEW */
    public static readonly SEARCH_OURLINE_REVIEW = "/thesis-outline-review/search";
    public static readonly UPDATE_THESIS = "/thesis/udpate";
    public static readonly SEARCH_THESIS_BY_USER = "/thesis/find-by-user";

    /** THESIS USER */
    public static readonly FIND_THESIS_USER_BY_THESIS = "/thesis-user/find-by-thesis";
    public static readonly UPDATE_THESIS_USER = "/thesis-user/find-by-thesis";

    /** Email */
    public static readonly EMAIL_PUBLIC_KEY ="zYF2rOMgmyBuMxfwX";
    public static readonly SERVICE_EMAIL_ID ="service_ghvi71k";
    public static readonly TEMPLATE_RESET_PASSWORD_ID ="template_y3hdy8w";
}