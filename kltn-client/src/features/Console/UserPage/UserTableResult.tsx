import { Row, Space, Spin, Typography, message } from "antd";
import { type ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import {
  DeleteIconCommon,
  EditIconCommon,
} from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import * as UserService from "~/services/userServices";

const UserTableResult = (): JSX.Element => {
  const {
    users,
    setOpenAddNewUserModal,
    search,
    isLoadingList,
    pagination,
    handleChange,
    searchDetail,
    setIsEdit,
  } = useContext(UserConsoleContext);

  const deleteUserMutation = useMutation(UserService.deleteUser, {
    onSuccess: (data: boolean) => {
      if (data) {
        void message.success("Xóa thành công");
        search();
      } else {
        void message.error("Xóa thất bại");
      }
    },
  });

  useEffect(() => {
    search();
  }, []);

  const columns: Array<ColumnType<UserModel>> = [
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
      width: 50,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      width: 50,
    },
    {
      title: "Họ và tên",
      dataIndex: "fname",
      width: 50,
    },
    {
      title: "Khoa",
      dataIndex: "faculty",
      width: 50,
    },
    {
      title: "Chức vụ",
      dataIndex: "roles",
      width: 100,
      render: (row, record) => {
        return (
          <Typography.Text>
            {record?.roles && record?.roles.join(", ")}
          </Typography.Text>
        );
      },
    },
    {
      title: "Cập nhật gần nhất",
      width: 100,
      render: (row, record) => {
        return (
          <Typography.Text>
            {dateTimeDisplay(new Date(record.updatedAt ?? ""))}
          </Typography.Text>
        );
      },
    },
    {
      title: "",
      fixed: "right",
      width: 50,
      render: (row, record) => {
        return (
          <Row justify={"center"}>
            <EditIconCommon
              onClick={() => {
                record?.userId && searchDetail(record?.userId);
                setIsEdit(() => true);
                setOpenAddNewUserModal(true);
              }}
            />
            <DeleteIconCommon
              onClick={() => {
                if (confirm("Bạn chắc chắn muốn xóa tài khoản này?")) {
                  deleteUserMutation.mutate(record.userId ?? "");
                }
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
          value="Thêm người dùng"
          onClick={() => {
            setIsEdit(() => false);
            setOpenAddNewUserModal(true);
          }}
        />
      </Row>
      <Spin spinning={isLoadingList}>
        <TableCommon
          columns={columns}
          dataSource={users}
          pagination={pagination}
          handleOnChange={handleChange}
        />
      </Spin>
    </Space>
  );
};

export default UserTableResult;
