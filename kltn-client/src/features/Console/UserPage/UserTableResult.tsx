import { Row, Space, Spin, message } from "antd";
import { ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import { dateDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import {
  DeleteIconCommon,
  EditIconCommon,
} from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import { useMutation } from "react-query";
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
    setOpenEditUserModal,
  } = useContext(UserConsoleContext);

  // const deleteUserMutation = useMutation(UserService.remove, {
  //   onSuccess: (data: boolean) => {
  //     if (data) {
  //       message.destroy("Xóa thành công");
  //       search();
  //     } else {
  //       message.error("Xóa thất bại");
  //     }
  //   }
  // })

  useEffect(() => {
    search();
  }, []);

  const columns: ColumnType<UserModel>[] = [
    {
      title: "STT",
      render: (value, record, index) => {
        let current = pagination.current;
        let pageSize = pagination.pageSize;
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
      title: "Lớp",
      dataIndex: "studentClass",
      width: 50,
    },
    {
      title: "Chức vụ",
      dataIndex: "roles",
      width: 100,
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
                searchDetail(record.userId);
                setOpenEditUserModal(true);
              }}
            />
            <DeleteIconCommon
              onClick={() => {
                // deleteUserMutation.mutate(record.userId);
              }}
            />
          </Row>
        );
      },
    },
  ];

  const dataSource: UserModel[] = [
    {
      userId: "caadasdcc-sdadas",
      username: "account1",
      fname: "Nguyễn Trần Anh",
      roles: ["Abc", "123"],
    },
    {
      userId: "caadasdcc-sdadad",
      username: "account2",
      fname: "Nguyễn Minh Châu",
      roles: ["Abc"],
    },
    {
      userId: "3",
      username: "account3",
      fname: "Nguyễn Hoài Bảo",
      roles: ["Abc"],
    },
    {
      userId: "4",
      username: "account4",
      fname: "Đỗ Thanh Bình",
      roles: ["Abc"],
    },
    {
      userId: "5",
      username: "account5",
      fname: "Huỳnh Hữu Ân",
      roles: ["Abc"],
    },
  ];

  return (
    <Space direction="vertical" className="w-full mt-10">
      <Row justify={"end"}>
        <ButtonCommon
          color="blue"
          value="Thêm người dùng"
          onClick={() => {
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
