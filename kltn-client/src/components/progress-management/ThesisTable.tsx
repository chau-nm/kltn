import { Button, Table } from "antd";
import { ColumnProps, ColumnsType } from "antd/es/table";
import { EditIconCustom, DeleteIconCustom } from "../common/IconCustom";

const columns: ColumnProps<ThesisProgressModel>[] = [
  {
    title: "Mã Tiến trình",
    dataIndex: "thesisProgressId",
  },
  {
    title: "Tiêu đề",
    render: (text, record, index) => {
      return <strong>{record.thesisProgressTopic}</strong>;
    },
  },
  {
    title: "Trạng thái",
    render: (text, record, index) => {
      return record.thesisProgressStatus ? (
        <strong className="text-lime-600">Đang tiến hành</strong>
      ) : (
        <strong className="text-cyan-600">Hoàn Thành</strong>
      );
    },
  },
  {
    title: "Hội đồng",
    render: (text, record, index) => {
      return <span>{record.thesisProgressCouncil}</span>;
    },
  },
  {
    title: "Năm học",
    render: (text, record, index) => {
      return (
        <span>
          {record.thesisProgressYearFrom} - {record.thesisProgressYearTo}
        </span>
      );
    },
  },
  {
    title: "",
    render: (text, record, index) => {
      return (
        <>
          <EditIconCustom />
          <DeleteIconCustom />
        </>
      );
    },
  },
];

const data: ThesisProgressModel[] = [
  {
    thesisProgressId: "0001",
    thesisProgressTopic: "Khóa luận tốt nghiệp khóa 2019",
    thesisProgressStatus: false,
    thesisProgressYearFrom: 2022,
    thesisProgressYearTo: 2023,
    thesisProgressCouncil: "Hội đồng 2019",
  },
  {
    thesisProgressId: "0002",
    thesisProgressTopic: "Khóa luận tốt nghiệp khóa 2018",
    thesisProgressStatus: true,
    thesisProgressYearFrom: 2021,
    thesisProgressYearTo: 2022,
    thesisProgressCouncil: "Hội đồng 2018",
  },
];

const ThesisProgressTable = (): JSX.Element => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.thesisProgressId}
    />
  );
};

export default ThesisProgressTable;
