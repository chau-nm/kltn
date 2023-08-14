import { EyeOutlined, FileProtectOutlined } from "@ant-design/icons";
import { Button, Row, Spin, Tooltip } from "antd";
import { ColumnType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import { useContext, useEffect, useState } from "react";
import { dateDisplay } from "~/common/util";
import {
  CriticalAssessmentIconCommon,
  DeleteIconCommon,
  EditIconCommon,
  ProtectedIconCommon,
  SeeIconCommon,
  UserIconCommon,
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
    setOpenAddCouncilModal,
    pagination,
    handleChange,
    setIsOpenAddEditThesisModal,
    setIsEditModal,
    searchDetail,
    setIsOpenThesisDetailModal,
    setIsOpenCriticalAssessmentModal,
  } = useContext(ThesisConsoleContext);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleOnChangeRowSelection = async (
    newSelectedRowKeys: React.Key[]
  ) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    const temp: ThesisModel[] = listThesis.filter(
      (thesis) => newSelectedRowKeys.indexOf(thesis.id!) > -1
    );
    // console.log("temp: ", temp);
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

  useEffect(() => {
    search();
  }, []);

  const getColorStatus = (status: number) => {
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
            <UserIconCommon
              onClick={() => {
                handleOnChangeRowSelection([record.id!]);
                setOpenAddCouncilModal(true);
              }}
            />
            <EditIconCommon
              onClick={() => {
                searchDetail(record.id!);
                setIsEditModal(() => true);
                setIsOpenAddEditThesisModal(true);
              }}
            />
            <CriticalAssessmentIconCommon
              onClick={() => {
                searchDetail(record.id!);
                setIsOpenCriticalAssessmentModal(true);
              }}
            />
            <ProtectedIconCommon />
            <DeleteIconCommon
              onClick={() => {
                // searchDetail(record.id!);
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
        rowKey={(record) => record.id!}
      />
    </Spin>
  );
};

export default ThesisTableResult;
