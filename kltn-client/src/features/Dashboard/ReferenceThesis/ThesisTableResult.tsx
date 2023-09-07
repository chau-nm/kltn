import { Row, Spin } from "antd";
import { type ColumnType, type TablePaginationConfig } from "antd/es/table";

import React, { useEffect, useState, type SetStateAction } from "react";

import TableCommon from "~/components/common/TableCommon";
import CommonConstants from "~/constants/commonConstants";

type ThesisTableResultProps = {
  listThesis: ThesisModel[];
  search: () => void;
  isLoadingTableResults: boolean;
  pagination: TablePaginationConfig;
  handleChange: (paginationP: TablePaginationConfig) => void;
  setThesis: (thesis: ThesisModel) => void;
  setIsOpenThesisDetailModal: React.Dispatch<SetStateAction<boolean>>;
};

const ThesisTableResult = ({
  listThesis,
  handleChange,
  isLoadingTableResults,
  pagination,
  search,
  setIsOpenThesisDetailModal,
  setThesis,
}: ThesisTableResultProps): JSX.Element => {
  const [thesisData, setThesisData] = useState<ThesisModel[]>([]);
  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    const temp = listThesis.filter(
      (thesis) => thesis.status === CommonConstants.THESIS_STATUS[9].value
    );
    setThesisData(temp);
  }, [listThesis]);

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
      dataIndex: "schoolYear",
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
      width: 1,
      render: (row, record) => {
        return (
          <Row justify={"center"}>
            <span
              className="cursor-pointer select-none text-blue-400"
              onClick={() => {
                setThesis(record);
                setIsOpenThesisDetailModal(true);
              }}
            >
              Xem chi tiết
            </span>
          </Row>
        );
      },
    },
  ];

  return (
    <Spin spinning={isLoadingTableResults}>
      <TableCommon
        columns={columns}
        dataSource={thesisData}
        pagination={pagination}
        handleOnChange={handleChange}
        rowKey={(record) => record.id!}
      />
    </Spin>
  );
};

export default ThesisTableResult;
