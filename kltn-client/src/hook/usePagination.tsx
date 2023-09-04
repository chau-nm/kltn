import { type TablePaginationConfig } from "antd";
import { useState, type SetStateAction } from "react";

const usePagination = <T extends object>(
  search: (mutationParam: MutationParamsModel<T>) => void,
  condition: T
): [
  TablePaginationConfig,
  React.Dispatch<SetStateAction<TablePaginationConfig>>,
  (paginationP: TablePaginationConfig) => void,
] => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    pageSize: 10,
    current: 1,
  });

  const handleChange = (pagination: TablePaginationConfig): void => {
    setPagination(pagination);
    search({
      page: pagination.current as number,
      pageSize: pagination.pageSize,
      searchCondition: condition,
    });
  };

  return [pagination, setPagination, handleChange];
};

export default usePagination;
