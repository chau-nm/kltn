import { useEffect, useState, type SetStateAction } from "react";
import ButtonCommon from "../common/ButtonCommon";
import ModalCommon from "../common/ModalCommon";
import SearchForm from "./SearchForm";

import { Row } from "antd";
import { type ColumnType } from "antd/es/table";
import { dateDisplay } from "~/common/util";
import CommonConstants from "~/constants/commonConstants";

import { type TableRowSelection } from "antd/es/table/interface";
import { useMutation } from "react-query";
import usePagination from "~/hook/usePagination";
import * as ThesisService from "~/services/thesisService";
import TableCommon from "../common/TableCommon";

type ThesisTargetModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  handleFinish: (thesisList: ThesisModel[]) => void;
  isReview: boolean;
  isDefense: boolean;
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
  handleFinish,
  isReview,
  isDefense,
}: ThesisTargetModalProps): JSX.Element => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [listThesis, setListThesis] = useState<ThesisModel[]>();
  const [searchCondition, setSearchCondition] =
    useState<ThesisSearchConditionModel>({});
  const searchMutaion = useMutation(ThesisService.search, {
    onSuccess: (data: SearchResponseModel<ThesisModel[]>) => {
      if (data) {
        setListThesis(data.data as ThesisModel[]);
        setPagination((pagination) => {
          return {
            ...pagination,
            total: data.total,
          };
        });
      }
    },
  });
  const [pagination, setPagination, handleChange] =
    usePagination<ThesisSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition
    );

  const search = (): void => {
    const status = isReview ? 4 : isDefense ? 6 : 0;
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition: {
        ...searchCondition,
        status
      },
    });
  };

  useEffect(() => {
    search();
  }, []);

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
      onCancel={() => {
        setIsOpen(false);
      }}
      footer={[
        <ButtonCommon
          key={1}
          onClick={() => {
            setIsOpen(false);
          }}
          value="Đóng"
        />,
        <ButtonCommon
          key={2}
          onClick={() => {
            const temp: ThesisModel[] | undefined = listThesis?.filter(
              (thesis) => selectedRowKeys.includes(thesis.id!)
            );
            handleFinish(temp ?? []);
            setIsOpen(false);
          }}
          value="Hoàn tất"
        />,
      ]}
    >
      <SearchForm
        search={search}
        searchCondition={searchCondition}
        setSearchCondition={setSearchCondition}
      />
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
