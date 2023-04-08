import { BellOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
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
    ]
}

export default MainLayouConstants;