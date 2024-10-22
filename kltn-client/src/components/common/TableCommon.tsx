import { Table } from "antd";
import {
  type ColumnType,
  type TablePaginationConfig,
  type TableProps,
} from "antd/es/table";
import "~/assets/styles/TableCommon.scss";

interface TableCommonProps<T> {
  columns?: Array<ColumnType<T>>;
  dataSource?: T[];
  className?: string;
  pagination?: TablePaginationConfig;
  handleOnChange?: (pagination: TablePaginationConfig) => void;
}

const TableCommon = <T extends object>({
  columns,
  dataSource,
  className,
  pagination,
  handleOnChange,
  ...rest
}: TableCommonProps<T> & TableProps<T>): JSX.Element => {
  let rowKey = 1;
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      className={className}
      rowKey={() => rowKey++}
      pagination={pagination}
      onChange={handleOnChange}
      scroll={{ x: 1500 }}
      {...rest}
    />
  );
};

export default TableCommon;
