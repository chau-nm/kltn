import { Table } from "antd";
import { ColumnProps } from "antd/es/table";
import { DeleteIconCustom, EditIconCustom } from "../common/IconCustom";

const columns: ColumnProps<ThesisModel>[] = [
  {
    title: "Mã luận văn",
    dataIndex: "thesisId",
  },
  {
    title: "Tiêu đề",
    render: (text, record, index) => {
      return <strong>{record.thesisTopic}</strong>;
    },
  },
  {
    title: "Trạng thái",
    render: (text, record, index) => {
      return <i>{record.thesisStatus}</i>;
    },
  },
  {
    title: "Học kì",
    render: (text, record, index) => {
      return <span>Học kì {record.thesisSemester}</span>;
    },
  },
  {
    title: "Năm học",
    render: (text, record, index) => {
      return (
        <span>
          {record.thesisYearFrom} - {record.thesisYearTo}
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
          <DeleteIconCustom/>
        </>
      );
    },
  },
];

const data: ThesisModel[] = [
  {
    thesisId: "0001",
    thesisTopic: "Xây dựng website",
    thesisStatus: "Đã nộp đề cương",
    thesisYearFrom: 2022,
    thesisYearTo: 2023,
    thesisSemester: 1,
  },
];

const ThesisTable = (): JSX.Element => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.thesisId}
    />
  );
};

export default ThesisTable;
