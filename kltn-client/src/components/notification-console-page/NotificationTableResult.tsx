import { Row, Space } from "antd";
import ButtonCustom from "../common/ButtonCustom";
import TableCustom from "../common/TableCustom";
import { ColumnType } from "antd/es/table";
import { DeleteIconCustom, EditIconCustom } from "../common/IconCustom";
import { useContext } from "react";
import { NotificationConsoleContext } from "~/contexts/notification-console-context";

const NotificationTableResult = (): JSX.Element => {
  const { setOpenAddNewNotificationModal } = useContext(
    NotificationConsoleContext
  );

  const columns: ColumnType<NotificationModel>[] = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
    },
    {
      title: "",
      fixed: "right",
      width: 150,
      render: () => {
        return (
          <Row justify={"center"}>
            <EditIconCustom />
            <DeleteIconCustom />
          </Row>
        );
      },
    },
  ];

  const dataSource: NotificationModel[] = [
    {
      id: "1",
      title: "Thông báo về việc đăng ký luận văn",
      content: "Abc",
    },
  ];

  return (
    <Space direction="vertical" className="bg-white p-5 w-full shadow mt-10">
      <Row justify={"end"}>
        <ButtonCustom
          color="blue"
          value="Thêm thông báo"
          onClick={() => {
            setOpenAddNewNotificationModal(true);
          }}
        />
      </Row>
      <TableCustom columns={columns} dataSource={dataSource} />
    </Space>
  );
};

export default NotificationTableResult;
