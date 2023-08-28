import { Space } from "antd";
import ThesisDetailView from "~/components/ThesisDetailView";
import ThesisConsoleProvider from "~/contexts/ThesisConsoleContext";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";

import PageLayout from "~/components/common/PageLayout";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import * as ThesisService from "~/services/thesisService";
import usePagination from "~/hook/usePagination";

const ReferenceThesisPage = (): JSX.Element => {
  const [listThesis, setListThesis] = useState<ThesisModel[]>([]);
  const [thesis, setThesis] = useState<ThesisModel>();
  const [isOpenThesisDetailModal, setIsOpenThesisDetailModal] = useState(false);
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
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition: {
        ...searchCondition,
        status: 9,
      },
    });
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <PageLayout pageTitle="Tham khảo khóa luận">
      <Space direction="vertical" className="p-10 w-full">
        <ThesisConsoleProvider>
          <ThesisSearchForm
            search={search}
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
          />
          <ThesisTableResult
            handleChange={handleChange}
            isLoadingTableResults={searchMutaion.isLoading}
            listThesis={listThesis}
            pagination={pagination}
            search={search}
            setIsOpenThesisDetailModal={setIsOpenThesisDetailModal}
            setThesis={setThesis}
          />
          {thesis && (
            <ThesisDetailView
              thesis={thesis}
              isOpen={isOpenThesisDetailModal}
              setIsOpen={setIsOpenThesisDetailModal}
            />
          )}
        </ThesisConsoleProvider>
      </Space>
    </PageLayout>
  );
};

export default ReferenceThesisPage;
