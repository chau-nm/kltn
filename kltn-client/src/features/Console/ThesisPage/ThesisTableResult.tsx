import { Button, Row, Spin } from "antd";
import { ColumnType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import { useContext, useEffect, useState } from "react";
import { dateDisplay } from "~/common/util";
import { EditIconCommon } from "~/components/common/IconCommon";
import TableCommon from "~/components/common/TableCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

const ThesisTableResult = (): JSX.Element => {
  const {
    listThesis,
    search,
    isLoadingTableResults,
    pagination,
    handleChange,
    // searchDetail,
    // setOpenEditThesisModal,
  } = useContext(ThesisConsoleContext);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleOnChangeRowSelection = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
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
      title: "Số sinh viên",
      dataIndex: "students",
      width: 5,
      render: (row, record) => {
        return row?.length;
      },
    },
    {
      title: "Năm",
      dataIndex: "year",
      width: 5,
    },
    {
      title: "Học kỳ",
      dataIndex: "semester",
      width: 5,
    },
    {
      title: "Cập nhật gần nhất",
      dataIndex: "updatedAt",
      width: 5,
      render: (row) => {
        return <Row>{dateDisplay(new Date(row as number))}</Row>;
      },
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
                // searchDetail(record.id);
                // setOpenEditOutlineReviewModal(true);
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
        rowKey={(record) => record.id}
      />
    </Spin>
  );
};

export default ThesisTableResult;
