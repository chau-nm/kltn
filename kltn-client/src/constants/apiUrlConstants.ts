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
  public static readonly DELETE_USER = "/user/delete";
  public static readonly RESET_PASSWORD_USER = "/user/reset";
  public static readonly REFRESH_TOKEN = "/user/refresh-token";
  public static readonly CHANGE_PASSWORD = "/user/change-password";

  /** STUDENT */
  public static readonly INSERT_STUDENT = "/student/insert";
  public static readonly UPDATE_STUDENT = "/student/update";

  /** lecturer */
  public static readonly INSERT_LECTURER = "/lecturer/insert";
  public static readonly UPDATE_LECTURER = "/lecturer/update";

  /** NOTIFICATION */
  public static readonly INSERT_NOTIFICATION = "/notification/insert";
  public static readonly UPDATE_NOTIFICATION = "/notification/update";
  public static readonly DELETE_NOTIFICATION = "/notification/delete/";
  public static readonly SEARCH_NOTIFICATION = "/notification/search/";
  public static readonly SEARCH_DETAIL_NOTIFICATION = "/notification/";

  /** Doc2vec */
  public static readonly SEARCH_DOC2VEC = "/doc2vec/search";

  /** THESIS REGISTER CALENDAR */
  public static readonly INSERT_THESIS_REGISTER_CALENDAR =
    "/thesis-register-calendar/insert";

  public static readonly VIEW_THESIS_REGISTER_CALENDAR =
    "/thesis-register-calendar/view";

  public static readonly DISABLE_THESIS_REGISTER_CALENDAR =
    "/thesis-register-calendar/disable";

  /** THESIS */
  public static readonly INSERT_THESIS = "/thesis/insert";
  public static readonly DELETE_THESIS = "/thesis/delete";
  public static readonly SEARCH_THESIS = "/thesis/search/";
  public static readonly SEARCH_DETAIL_THESIS = "/thesis/";
  public static readonly SEARCH_BY_COUNCIL_ID = "/thesis/find-by-council/";
  public static readonly UPDATE_THESIS = "/thesis/update";
  public static readonly UPDATE_STATUS_THESIS = "/thesis/update-status/";
  public static readonly SEARCH_THESIS_BY_USER = "/thesis/find-by-user";
  public static readonly SEARCH_THESIS_CA_BY_USER_ID =
    "/thesis/search-thesis-ca-by-user-id";

  public static readonly FIND_THESIS_INVITED = "/thesis/invited";
  public static readonly FIND_MY_THESIS = "/thesis/my-thesis";
  public static readonly ACCEPT_INVITE_THESIS = "/thesis/accept-invite";
  public static readonly DECLINE_INVITE_THESIS = "/thesis/decline-invite";
  public static readonly SEARCH_THESIS_BY_COUNCIL_PREVIEWER_COMMENT = "/thesis/find-by-council-review-comment";
  public static readonly FIND_THESIS_BY_REVIEWER_USER = "/thesis/find-by-reviewer";
  public static readonly FIND_THESIS_BY_DEFENSE_RATER = "/thesis/find-by-rater";

  /** THESIS REPORT CALENDAR */
  public static readonly INSERT_THESIS_REPORT_CALENDAR =
    "/thesis-report-calendar/insert";

  /** THESIS OUTLINE Comment */
  public static readonly UPDATE_OUTLINE_COMMENT =
    "thesis-outline-comment/update-comment";

  public static readonly INSERT_OUTLINE_COMMENT =
    "/thesis-outline-comment/insert";

  public static readonly DELETE_OUTLINE_COMMENT_BY_THESIS =
    "/thesis-outline-comment/delete-by-thesis/";

  public static readonly GET_OULINE_COMMENT_BY_THESIS_ID =
    "/thesis-outline-comment/search-comment-by-thesisId";

  public static readonly INSERT_COUNCILS =
    "/thesis-outline-comment/insert-councils";

  /** THESIS REVIEW COMMENT */
  public static readonly INSERT_REVIEWER_COMMENT = "/reviewer-comment/insert-reviewer";

  public static readonly UPDATE_REVIEWER_COMMENT = "/reviewer-comment/update";

  public static readonly INSERT_GENERAL = "/reviewer-comment/insert-general";


  /** THESIS OUTLINE REVIEW */
  public static readonly SEARCH_OURLINE_REVIEW =
    "/thesis-outline-review/search";

  /** THESIS USER */
  public static readonly FIND_THESIS_USER_BY_THESIS =
    "/thesis-user/find-by-thesis";

  public static readonly UPDATE_THESIS_USER = "/thesis-user/update";

  /** THESIS REVIEW CALENDAR */
  public static readonly INSERT_THESIS_REVIEW_CALENDAR_LIST = "/thesis-review-calendar/insert-list";

  /** THESIS DEFENSE CALENDAR */
  public static readonly INSERT_THESIS_DEFENSE_CALENDAR_LIST = "/thesis-defense-calendar/insert-list";

  /** THESIS REVIEWER */
  public static readonly INSERT_USER_REVIEWER = "/reviewer/insert-user-reviewer";

  public static readonly UPDATE_REVIEWER = "/reviewer/update"

  /** THESIS DEFENSE */
  public static readonly INSERT_DEFENSE_RATERS = "/defense-rating/insert-raters";

  public static readonly UPDATE_DEFENSE_RATING = "/defense-rating/update"

  /** CRITICAL ASSESSMENT */
  public static readonly INSERT_USER_CRITICAL_ASSESSMENT =
    "/critical-assessment/insert-user";

  public static readonly SEARCH_CRITICAL_ASSESSMENT_BY_THESIS_ID_AND_MARKER =
    "/critical-assessment/search-by-thesis-id-and-masker";

  public static readonly UPDATE_CRITICAL_ASSESSMENT =
    "/critical-assessment/update";

  /** Email */
  public static readonly EMAIL_PUBLIC_KEY = "zYF2rOMgmyBuMxfwX";
  public static readonly SERVICE_EMAIL_ID = "service_ghvi71k";
  public static readonly TEMPLATE_RESET_PASSWORD_ID = "template_y3hdy8w";

  public static readonly INSERT_THESIS_DOCUMENT_LIST = "/thesis-document/insert-list";
}
