import ButtonCommon from "../common/ButtonCommon";
import ModalCommon from "../common/ModalCommon";
import { useContext, type SetStateAction, useState } from "react";
import SearchForm from "./SearchForm";

import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import { ColumnType } from "antd/es/table";
import { Row } from "antd";
import CommonConstants from "~/constants/commonConstants";
import { dateDisplay } from "~/common/util";

import TableCommon from "../common/TableCommon";
import { TableRowSelection } from "antd/es/table/interface";
import ThesisSearchForm from "~/features/Console/ThesisPage/ThesisSearchForm";

type ThesisTargetModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

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

const ThesisTargetModal = ({
  isOpen,
  setIsOpen,
}: ThesisTargetModalProps): JSX.Element => {
  const {
    listThesis,
    search,
    pagination,
    handleChange,
    listThesisSelectedForPreview,
    setlistThesisSelectedForPreview,
  } = useContext(ThesisConsoleContext);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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
  ];

  const handleOnChangeRowSelection = (
    newSelectedRowKeys: React.Key[]
  ): void => {
    setSelectedRowKeys(newSelectedRowKeys);
    const temp: ThesisModel[] = listThesis.filter((thesis) =>
      newSelectedRowKeys.includes(thesis.id!)
    );
    setlistThesisSelectedForPreview(temp);
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

  return (
    <ModalCommon
      title="Chọn luận văn"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={[
        <ButtonCommon key={1} onClick={() => setIsOpen(false)} value="Đóng" />,
        <ButtonCommon
          key={2}
          onClick={() => {
            setSelectedRowKeys([]);
            setIsOpen(false);
          }}
          value="Hoàn tất"
        />,
      ]}
    >
      <ThesisSearchForm />
      <TableCommon
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={listThesis}
        pagination={pagination}
        handleOnChange={handleChange}
        rowKey={(record) => record.id!}
      />
    </ModalCommon>
  );
};

export default ThesisTargetModal;
