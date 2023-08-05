import { TablePaginationConfig } from "antd";
import { SetStateAction, useEffect, useState } from "react";

const usePagination = <T extends {}>(
  search: (mutationParam: MutationParamsModel<T>) => void,
  condition: T
): [
  TablePaginationConfig,
  React.Dispatch<SetStateAction<TablePaginationConfig>>,
  (paginationP: TablePaginationConfig) => void
] => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    pageSize: 2,
    current: 1,
  });

  const handleChange = (pagination: TablePaginationConfig) => {
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