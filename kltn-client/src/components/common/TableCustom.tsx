import { Table } from "antd";
import { ColumnType } from "antd/es/table";

interface TableCustomProps<T> {
  columns?: ColumnType<T>[];
  dataSource?: T[];
  className?: string;
}

const TableCustom = <T extends {}>({
  columns,
  dataSource,
  className,
}: TableCustomProps<T>): JSX.Element => {
    let rowKey = 1;
  return (
    <Table columns={columns} dataSource={dataSource} className={className} rowKey={() => rowKey++}/>
  );
};

export default TableCustom;
