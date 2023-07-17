import { ContainerOutlined, HomeOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import path from "./path";

class ConsoleLayoutConstants {
    public static readonly LAYOUT_TITLE_FACULTY = 'Khoa công nghệ thông tin';

    public static readonly LAYOUT_TITLE_UNIVERSITY_NAME = 'Trường đại học Nông Lâm TP.HCM';

    public static readonly MENU_LIST = [
        {
            id: 1,
            title: 'Trang chủ',
            to: path.CONSOLE,
            icon: HomeOutlined
        },
        {
            id: 2,
            title: 'Thông báo',
            to: path.NOTIFICATION_CONSOLE,
            icon: NotificationOutlined
        },
        {
            id: 3,
            title: 'Luận văn',
            to: path.THESIS_CONSOLE,
            icon: ContainerOutlined
        },
        {
            id: 4,
            title: 'Quản lý tài khoản',
            to: path.USER_CONSOLE,
            icon: UserOutlined
        },
    ];
}

export default ConsoleLayoutConstants;