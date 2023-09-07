import { Row, Spin, Tooltip, message } from "antd";
import { type ColumnType } from "antd/es/table";
import { type TableRowSelection } from "antd/es/table/interface";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import {
  CommentIconCommon,
  CriticalAssessmentIconCommon,
  DeleteIconCommon,
  EditIconCommon,
  ProtectedIconCommon,
  SeeIconCommon,
} from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import CommonConstants from "~/constants/commonConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisService from "~/services/thesisService";
const ThesisTableResult = (): JSX.Element => {
  const {
    listThesis,
    search,
    setlistThesisSelected,
    isLoadingTableResults,
    setOpenAddCommentMinistryModal,
    pagination,
    handleChange,
    setIsOpenAddEditThesisModal,
    setIsEditModal,
    searchDetail,
    setIsOpenThesisDetailModal,
    setIsOpenCriticalAssessmentModal,
    setIsOpenProtectionModal,
  } = useContext(ThesisConsoleContext);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleOnChangeRowSelection = (
    newSelectedRowKeys: React.Key[]
  ): void => {
    setSelectedRowKeys(newSelectedRowKeys);
    const temp: ThesisModel[] = listThesis.filter((thesis) =>
      newSelectedRowKeys.includes(thesis.id!)
    );
    setlistThesisSelected(temp);
  };

  const rowSelection: TableRowSelection<ThesisModel> = {
    type: "checkbox",
    selectedRowKeys,
    onChange: handleOnChangeRowSelection,
    columnWidth: 2,
    getCheckboxProps: (record: ThesisModel) => ({
      disabled: false, // Column configuration not to be checked
      name: record.id,
    }),
  };

  const deleteThesisMutation = useMutation(ThesisService.deleteThesis, {
    onSuccess: (data) => {
      if (data) {
        void message.success("Đã xóa khóa luận");
        search();
      }
    },
  });

  useEffect(() => {
    search();
  }, []);

  const getColorStatus = (status: number): string => {
    switch (status) {
      case -1:
        return "text-red-500";
      case 1:
        return "text-yellow-500";
      case 2 || 3 || 4 || 5:
        return "text-blue-500";
      case 6:
        return "text-green-500";
      default:
        return "text-blue-500";
    }
  };

  const columns: Array<ColumnType<ThesisModel>> = [
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
      width: 2,
    },
    {
      title: "Tên đề tài",
      dataIndex: "topic",
      width: 10,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (row, record) => {
        return (
          <Row className={getColorStatus(record.status ?? 0)}>
            {
              CommonConstants.THESIS_STATUS.filter(
                (ts) => ts.value === record.status
              )[0].text
            }
          </Row>
        );
      },
      width: 5,
    },
    {
      title: "Số sinh viên",
      dataIndex: "students",
      width: 5,
      render: (row, record) => {
        return row?.length;
      },
    },
    {
      title: "Năm",
      dataIndex: "schoolYear",
      width: 5,
    },
    {
      title: "Học kỳ",
      dataIndex: "semester",
      width: 5,
    },
    {
      title: "Cập nhật gần nhất",
      width: 5,
      render: (row, record) => {
        return <Row>{dateTimeDisplay(new Date(record.updatedAt ?? 0))}</Row>;
      },
    },
    {
      title: "",
      fixed: "right",
      width: 4,
      render: (row, record) => {
        return (
          <Row justify={"start"}>
            <Tooltip title="Chi tiết luận văn" placement="top">
              <SeeIconCommon
                onClick={() => {
                  searchDetail(record.id!);
                  setIsOpenThesisDetailModal(true);
                }}
              />
            </Tooltip>
            {record.status === 9 && (
              <EditIconCommon
                onClick={() => {
                  searchDetail(record.id!);
                  setIsEditModal(() => true);
                  setIsOpenAddEditThesisModal(true);
                }}
              />
            )}

            {(record.status === 2 || record.status === 3) && (
              <CommentIconCommon
                onClick={() => {
                  searchDetail(record.id!);
                  setOpenAddCommentMinistryModal(true);
                }}
              />
            )}

            <CriticalAssessmentIconCommon
              onClick={() => {
                searchDetail(record.id!);
                setIsOpenCriticalAssessmentModal(true);
              }}
            />
            <ProtectedIconCommon
              onClick={() => {
                searchDetail(record.id!);
                setIsOpenProtectionModal(true);
              }}
            />
            <DeleteIconCommon
              onClick={() => {
                if (confirm("Bạn chắc chắn xóa khóa luận này?")) {
                  deleteThesisMutation.mutate(record.id ?? "");
                }
              }}
            />
          </Row>
        );
      },
    },
  ];

  return (
    <Spin spinning={isLoadingTableResults}>
      <TableCommon
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={listThesis}
        pagination={pagination}
        handleOnChange={handleChange}
        rowKey={(record) => record.id!}
      />
    </Spin>
  );
};

export default ThesisTableResult;
