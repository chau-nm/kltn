import { Row, Space, Spin } from "antd";
import { type ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";

import { EditIconCommon } from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";

const OutlineReviewTableResult = (): JSX.Element => {
  const {
    listThesis,
    search,
    setOpenEditOutlineReviewModal,
    isLoading,
    setThesisDetail,
  } = useContext(OutlineReviewContext);

  useEffect(() => {
    search();
  }, []);

  const columns: Array<ColumnType<ThesisModel>> = [
    {
      title: "STT",
      render: (value, record, index) => {
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
        return <Row className="text-green-500">Đang đánh giá</Row>;
      },
      width: 5,
    },
    {
      title: "năm",
      dataIndex: "year",
      width: 5,
    },
    {
      title: "Học kỳ",
      dataIndex: "semester",
      width: 5,
    },
    {
      title: "",
      fixed: "right",
      width: 2,
      render: (row, record) => {
        return (
          <Row justify={"center"}>
            <EditIconCommon
              onClick={() => {
                setThesisDetail(record);
                setOpenEditOutlineReviewModal(true);
              }}
            />
          </Row>
        );
      },
    },
  ];

  return (
    <Space direction="vertical" className="w-full mt-10">
      <Spin spinning={isLoading}>
        <TableCommon columns={columns} dataSource={listThesis} />
      </Spin>
    </Space>
  );
};

export default OutlineReviewTableResult;
