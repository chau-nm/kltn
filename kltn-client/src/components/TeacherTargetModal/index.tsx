import React, { type SetStateAction, useState } from "react";
import ModalCommon from "../common/ModalCommon";
import TableCommon from "../common/TableCommon";
import SearchForm from "./SearchForm";
import { useMutation } from "react-query";
import * as UserService from "~/services/userServices";
import usePagination from "~/hook/usePagination";
import { Typography } from "antd";
import { dateTimeDisplay } from "~/common/util";
import { type ColumnType } from "antd/es/table";
import { type TableRowSelection } from "antd/es/table/interface";
import AuthConstants from "~/constants/authConstants";

type TeacherTargetModalProps = {
  isSingle?: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  handleFinish?: (lecturers: LecturerModel[]) => void;
};

const TeacherTargetModal = ({
  isSingle = false,
  isOpen,
  setIsOpen,
  handleFinish,
}: TeacherTargetModalProps): JSX.Element => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [lecturers, setLecturers] = useState<LecturerModel[]>();
  const [searchCondition, setSearchCondition] =
    useState<UserSearchConditionModel>({});
  const searchMutaion = useMutation(UserService.search, {
    onSuccess: (data: SearchResponseModel<LecturerModel[]>) => {
      if (data) {
        setLecturers(data.data as LecturerModel[]);
        setPagination((pagination) => {
          return {
            ...pagination,
            total: data.total,
          };
        });
      }
    },
  });
  const [pagination, setPagination, handleChange] =
    usePagination<UserSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition
    );

  const search = (): void => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition: {
        ...searchCondition,
        role: AuthConstants.AUTH_ROLES.TEACHER,
      },
    });
  };

  const columns: Array<ColumnType<LecturerModel>> = [
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
  ];

  const handleOnChangeRowSelection = (
    newSelectedRowKeys: React.Key[]
  ): void => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<LecturerModel> = {
    type: isSingle ? "radio" : "checkbox",
    selectedRowKeys,
    onChange: handleOnChangeRowSelection,
    columnWidth: 2,
    getCheckboxProps: (record: ThesisModel) => ({
      disabled: false, // Column configuration not to be checked
      name: record.id,
    }),
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <ModalCommon
      title={"Chọn giảng viên"}
      open={isOpen}
      onCancel={handleCancel}
    >
      <SearchForm
        search={search}
        searchCondition={searchCondition}
        setSearchCondition={setSearchCondition}
      />
      <TableCommon
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={lecturers}
        onChange={handleChange}
        rowKey={(record) => record.userId!}
      />
    </ModalCommon>
  );
};

export default TeacherTargetModal;
