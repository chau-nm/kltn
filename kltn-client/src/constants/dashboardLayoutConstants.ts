import {
  DiffOutlined,
  HomeOutlined
} from "@ant-design/icons";
import path from "./path";
import AuthConstants from "./authConstants";

class MainLayouConstants {
  public static readonly LAYOUT_TITLE_FACULTY = "Khoa công nghệ thông tin";

  public static readonly LAYOUT_TITLE_UNIVERSITY_NAME =
    "Trường đại học Nông Lâm TP.HCM";

  public static readonly MENU_LIST = [
    {
      menuId: 0,
      menuName: "Trang chủ",
      menuPath: path.DASHBOARD,
      icon: HomeOutlined,
      roles: Object.values(AuthConstants.AUTH_ROLES)
    },
    {
      menuId: 2,
      menuName: "Đăng ký khóa luận tốt nghiệp",
      menuPath: path.DASHBOARD_REGISTER_THESIS_CALENDAR,
      icon: DiffOutlined,
      roles: [AuthConstants.AUTH_ROLES.STUDENT]
    },
    {
      menuId: 3,
      menuName: "Luận văn của tôi",
      menuPath: path.MY_THESIS,
      icon: DiffOutlined,
      roles: Object.values(AuthConstants.AUTH_ROLES)
    },
    {
      menuId: 4,
      menuName: "Đánh giá đề cương",
      menuPath: path.OUTLINE_REVIEW,
      icon: DiffOutlined,
      roles: [AuthConstants.AUTH_ROLES.TEACHER]
    },
    {
      menuId: 4,
      menuName: "Phản biện",
      menuPath: path.CRITICAL_ASSESSMENT,
      icon: DiffOutlined,
      roles: [AuthConstants.AUTH_ROLES.TEACHER]
    },
    {
      menuId: 5,
      menuName: "Bảo vệ",
      menuPath: path.PROTECTION,
      icon: DiffOutlined,
      roles: [AuthConstants.AUTH_ROLES.TEACHER]
    },
  ];
}

export default MainLayouConstants;
