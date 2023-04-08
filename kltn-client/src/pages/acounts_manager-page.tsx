import {
  Button,
  Popconfirm,
  Space,
  Upload,
  Dropdown,
  message,
  Tooltip,
  Input,
  Pagination,
} from "antd";
import { DownOutlined, UserOutlined, AudioOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import AccountCard from "~/components/accounts-manager/AccountCard";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const AccountsManager = (): JSX.Element => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
      <div className="w-full h-14 flex justify-around items-center bg-slate-100 mb-7">
        <div className="w-1/2 flex justify-around">
          <div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Xếp theo tên
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Xếp theo chức vụ
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Xếp theo trạng thái hoạt động
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
        <div>
          <Search
            placeholder="tìm tiếm người dùng"
            allowClear
            onSearch={() => {}}
            style={{ width: 200 }}
          />
        </div>
      </div>

      <div className="content w-full h-2/3 flex flex-col justify-between">
        <AccountCard></AccountCard>
        <AccountCard></AccountCard>
        <AccountCard></AccountCard>
        <AccountCard></AccountCard>
      </div>
      <div className="flex mt-5 items-center">
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <div className="account-footer w-full h-5 flex justify-end items-center p-5">
        <Button>Thêm tài khoản</Button>
      </div>
    </div>
  );
};

export default AccountsManager;
