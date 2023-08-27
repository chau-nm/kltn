import { Row, Spin, Tooltip } from "antd";
import { type ColumnType } from "antd/es/table";
import { type TableRowSelection } from "antd/es/table/interface";
import { useContext, useEffect, useState } from "react";
import { dateDisplay } from "~/common/util";
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

const ThesisTableResult = (): JSX.Element => {
  const {
    listThesis,
    search,
    setlistThesisSelected,
    isLoadingTableResults,
    pagination,
    handleChange,
    // searchDetail,
    setIsOpenThesisDetailModal,
  } = useContext(ThesisConsoleContext);

  useEffect(() => {
    search();
  }, []);

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
      width: 1,
    },
    {
      title: "Tên đề tài",
      dataIndex: "topic",
      width: 3,
    },

    {
      title: "Số sinh viên",
      dataIndex: "students",
      width: 2,
      render: (row, record) => {
        return row?.length;
      },
    },
    {
      title: "Năm",
      dataIndex: "year",
      width: 2,
    },
    {
      title: "Học kỳ",
      dataIndex: "semester",
      width: 2,
    },
    {
      title: "",
      fixed: "right",
      width: 0.5,
      render: (row, record) => {
        return (
          <Row justify={"center"}>
            <Tooltip title="Chi tiết luận văn" placement="top">
              <SeeIconCommon
                onClick={() => {
                  // searchDetail(record.id!);
                  setIsOpenThesisDetailModal(true);
                }}
              />
            </Tooltip>
          </Row>
        );
      },
    },
  ];

  return (
    <Spin spinning={isLoadingTableResults}>
      <TableCommon
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
