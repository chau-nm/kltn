import { Row, Space, Spin } from "antd";
import { ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { NotificationConsoleContext } from "~/contexts/notification-console-context";
import { dateDisplay } from "~/utils/util";
import ButtonCommon from "../common/ButtonCommon";
import { DeleteIconCommon, EditIconCommon } from "../common/IconCommon";
import TableCommon from "../common/TableCommon";

const NotificationTableResult = (): JSX.Element => {
  const {
    notifications,
    setOpenAddNewNotificationModal,
    search,
    isLoading,
    pagination,
    handleChange,
  } = useContext(NotificationConsoleContext);

  useEffect(() => {
    search();
  }, []);

  const columns: ColumnType<NotificationModel>[] = [
    {
      title: "STT",
      render: (value, record, index) => {
        let current = pagination.current;
        let pageSize = pagination.pageSize;
        if (current && pageSize){
          return pageSize * (current - 1) + index + 1;
        }
        return index + 1;
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      width: 600
    },
    {
      title: "Thời gian đăng tin",
      render: (value, record) => {
        return dateDisplay(new Date(record.createAt as number));
      },
    },
    {
      title: "Thời gian cập nhật",
      render: (value, record) => {
        return dateDisplay(new Date(record.updateAt as number));
      },
    },
    {
      title: "",
      fixed: "right",
      width: 150,
      render: (row) => {
        return (
          <Row justify={"center"}>
            <EditIconCommon />
            <DeleteIconCommon />
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
        <ButtonCommon
          color="blue"
          value="Thêm thông báo"
          onClick={() => {
            setOpenAddNewNotificationModal(true);
          }}
        />
      </Row>
      <Spin spinning={isLoading}>
        <TableCommon
          columns={columns}
          dataSource={notifications}
          pagination={pagination}
          handleOnChange={handleChange}
        />
      </Spin>
    </Space>
  );
};

export default NotificationTableResult;
