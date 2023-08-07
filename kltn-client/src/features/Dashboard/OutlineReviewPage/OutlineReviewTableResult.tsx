import { Row, Space, Spin, Typography, message } from "antd";
import { ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import { dateDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import {
  DeleteIconCommon,
  EditIconCommon,
} from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import { useMutation } from "react-query";
import * as OutlineReviewService from "~/services/OutlineReviewServices";

const OutlineReviewTableResult = (): JSX.Element => {
  const {
    OutlineReviews,
    setOpenAddNewOutlineReviewModal,
    search,
    isLoadingList,
    pagination,
    handleChange,
    searchDetail,
    setOpenEditOutlineReviewModal,
  } = useContext(OutlineReviewContext);

  // const deleteOutlineReviewMutation = useMutation(OutlineReviewService.remove, {
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

  const columns: ColumnType<ThesisModel>[] = [
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
                // searchDetail(record.userId);
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
      {/* <Row justify={"end"}>
        <ButtonCommon
          color="blue"
          value="Thêm người dùng"
          onClick={() => {
            setOpenAddNewOutlineReviewModal(true);
          }}
        />
      </Row> */}
      <Spin spinning={isLoadingList}>
        <TableCommon
          columns={columns}
          dataSource={OutlineReviews}
          pagination={pagination}
          handleOnChange={handleChange}
        />
      </Spin>
    </Space>
  );
};

export default OutlineReviewTableResult;
