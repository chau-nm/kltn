import { Table } from "antd";
import { ColumnType, TablePaginationConfig } from "antd/es/table";
import '~/assets/styles/TableCommon.scss';

interface TableCommonProps<T> {
  columns?: ColumnType<T>[];
  dataSource?: T[];
  className?: string;
  pagination?: TablePaginationConfig,
  handleOnChange?: (pagination: TablePaginationConfig) => void;
}

const TableCommon = <T extends {}>({
  columns,
  dataSource,
  className,
  pagination,
  handleOnChange
}: TableCommonProps<T>): JSX.Element => {
    let rowKey = 1;
  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
      className={className} 
      rowKey={() => rowKey++}
      pagination={pagination}
      onChange={handleOnChange}
      scroll={{x: 1500}}/>
  );
};

export default TableCommon;
