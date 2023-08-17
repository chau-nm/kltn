import { Row, Space, Spin, message } from "antd";
import { type ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";
import { dateDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import {
  DeleteIconCommon,
  EditIconCommon,
} from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import { useMutation } from "react-query";
import * as NotificationService from "~/services/notificationServices";

const NotificationTableResult = (): JSX.Element => {
  const {
    notifications,
    setOpenAddNewNotificationModal,
    search,
    isLoadingList,
    pagination,
    handleChange,
    searchDetail,
    setOpenEditNotificationModal,
  } = useContext(NotificationConsoleContext);

  const deleteNotificationMutation = useMutation(NotificationService.remove, {
    onSuccess: (data: boolean) => {
      if (data) {
        message.destroy("Xóa thành công");
        search();
      } else {
        void message.error("Xóa thất bại");
      }
    },
  });

  useEffect(() => {
    search();
  }, []);

  const columns: Array<ColumnType<NotificationModel>> = [
    {
      title: "STT",
      render: (value, record, index) => {
        const current = pagination.current;
        const pageSize = pagination.pageSize;
        if (current && pageSize) {
          return pageSize * (current - 1) + index + 1;
        }
        return index + 1;
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      width: 600,
    },
    {
      title: "Thời gian đăng tin",
      render: (value, record) => {
        return dateDisplay(new Date(record.createdAt as number));
      },
    },
    {
      title: "Thời gian cập nhật",
      render: (value, record) => {
        return dateDisplay(new Date(record.updatedAt as number));
      },
    },
    {
      title: "",
      fixed: "right",
      width: 150,
      render: (row, record) => {
        return (
          <Row justify={"center"}>
            <EditIconCommon
              onClick={() => {
                searchDetail(record.id);
                setOpenEditNotificationModal(true);
              }}
            />
            <DeleteIconCommon
              onClick={() => {
                confirm("Bạn có chắn chắn muốn xóa không?") &&
                  deleteNotificationMutation.mutate(record.id);
              }}
            />
          </Row>
        );
      },
    },
  ];

  return (
    <Space direction="vertical" className="w-full mt-10">
      <Row justify={"end"}>
        <ButtonCommon
          color="blue"
          value="Thêm thông báo"
          onClick={() => {
            setOpenAddNewNotificationModal(true);
          }}
        />
      </Row>
      <Spin spinning={isLoadingList}>
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
