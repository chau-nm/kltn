import { BellOutlined, BookOutlined, HomeOutlined, ProjectOutlined, ScheduleOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import path from './path';

class MainLayouConstants{
    public static readonly LAYOUT_TITLE_FACULTY = 'Khoa công nghệ thông tin';

    public static readonly LAYOUT_TITLE_UNIVERSITY_NAME = 'Trường đại học Nông Lâm TP.HCM';

    public static readonly MENU_LIST = [
        {
            menuId: 0,
            menuName: 'Trang chủ',
            menuPath: path.HOME,
            icon: HomeOutlined
        },
        {
            menuId: 1,
            menuName: 'Quản lý tài khoản',
            menuPath: path.ACCOUNTS_MANAGER,
            icon: UserOutlined
        },
        {
            menuId: 2,
            menuName: 'Thông báo',
            menuPath: path.SEND_NOTIFICATION,
            icon: BellOutlined
        },
        {
            menuId: 3,
            menuName: 'Lịch báo cáo',
            menuPath: path.REPORT_SCHEDULE,
            icon: ScheduleOutlined
        },
        {
            menuId: 4,
            menuName: 'Đăng ký khóa luận',
            menuPath: path.REGISTER_THESIS,
            icon: ProjectOutlined
        },
        {
            menuId: 5,
            menuName: 'Quản lý khóa luận',
            menuPath: path.THESIS_MANAGEMENT,
            icon: UnorderedListOutlined
        },
        {
            menuId: 6,
            menuName: 'Danh sách luận văn',
            menuPath: path.THESIS_LIST_PAGE,
            icon: BookOutlined
        },
        {
            menuId: 7,
            menuName: 'From phản biện',
            menuPath: path.COUNTER_ARGUMENT,
            icon: BookOutlined
        },
        {
            menuId: 8,
            menuName: 'Đánh giá đề cương',
            menuPath: path.EVALUE_THESIS_OUTLINE_PAGE,
            icon: BookOutlined
        }
    ]
}

export default MainLayouConstants;