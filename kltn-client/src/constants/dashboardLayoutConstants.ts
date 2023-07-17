import { BellOutlined, BookOutlined, DiffOutlined, HomeOutlined, ProjectOutlined, ScheduleOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import path from './path';

class MainLayouConstants{
    public static readonly LAYOUT_TITLE_FACULTY = 'Khoa công nghệ thông tin';

    public static readonly LAYOUT_TITLE_UNIVERSITY_NAME = 'Trường đại học Nông Lâm TP.HCM';

    public static readonly MENU_LIST = [
        {
            menuId: 0,
            menuName: 'Trang chủ',
            menuPath: path.DASHBOARD,
            icon: HomeOutlined
        },
        {
            menuId: 2,
            menuName: 'Đăng ký khóa luận tốt nghiệp',
            menuPath: path.DASHBOARD_REGISTER_THESIS_CALENDAR,
            icon: DiffOutlined
        },
        {
            menuId: 3,
            menuName: 'Luận văn của tôi',
            menuPath: path.MY_THESIS,
            icon: DiffOutlined
        },
        {
            menuId: 4,
            menuName: 'Đánh giá đề cương',
            menuPath: path.OUTLINE_REVIEW,
            icon: DiffOutlined
        },
        {
            menuId: 4,
            menuName: 'Phản biện',
            menuPath: path.CRITICAL_ASSESSMENT,
            icon: DiffOutlined
        },
        {
            menuId: 5,
            menuName: 'Bảo vệ',
            menuPath: path.PROTECTION,
            icon: DiffOutlined
        },
    ]
}

export default MainLayouConstants;