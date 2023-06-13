import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { DeleteIconCustom, EditIconCustom } from "../common/IconCustom";

const columns: ColumnType<CouncilModel>[] = [
  {
    title: "ID",
    render: (text, record, index) => {
      return record.councilId;
    },
  },
  {
    title: "Name",
    dataIndex: "councilname",
  },
  {
    title: "Status",
    render: (text, record, index) => {
      return record.isActive ? (
        <strong className="text-lime-600">Active</strong>
      ) : (
        <strong className="text-red-700">Inactive</strong>
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

const data: CouncilModel[] = [
  {
    councilId: "001",
    councilname: "Hội đồng 2019",
    isActive: true,
  },
  {
    councilId: "002",
    councilname: "Hội đồng 2018",
    isActive: false,
  },
];

const CouncilList = (): JSX.Element => {
  return <Table columns={columns} dataSource={data} />;
};

export default CouncilList;
