import { Table } from "antd";
import { type ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import CommonConstants from "~/constants/commonConstants";
import { AuthContext } from "~/contexts/AuthContext";
import * as ThesisService from "~/services/thesisService";
import CriticalAssessmentFormModal from "./CriticalAssessmentFormModal";
import { CriticalAssessmentDashboardContext } from "~/contexts/CriticalAssessmentDashboardContext";
import ThesisDetailView from "~/components/ThesisDetailView";

const CriticalAssessmentPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const {
    setIsOpenCriticalAssessmentFormModal,
    setThesis,
    thesis,
    setIsOpenThesisDetail,
    isOpenThesisDetail,
  } = useContext(CriticalAssessmentDashboardContext);

  const { data: thesisList } = useQuery(
    ["search-thesis-ca-by-user-id"],
    async () => {
      if (user?.userId) {
        return [];
        // await ThesisService.searchThesisCAByUserId(user?.userId);
      }
    }
  );

  useEffect(() => {
    console.log(thesisList);
  }, [thesisList]);

  const columns: Array<ColumnType<ThesisModel>> = [
    {
      title: "STT",
      render: (value, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Đề tài",
      dataIndex: "topic",
    },
    {
      title: "Trạng thái",
      render: (value, record, index) => {
        return CommonConstants.THESIS_STATUS.filter(
          (ts) => ts.value === record.status
        )[0].text;
      },
    },
    {
      title: "",
      render: (value, record, index) => {
        return (
          <span
            className="text-blue-400 cursor-pointer select-none hover:text-blue-500 duration-300"
            onClick={() => {
              setThesis(record);
              setIsOpenCriticalAssessmentFormModal(true);
            }}
          >
            Đánh giá
          </span>
        );
      },
    },
  ];

  return (
    <PageLayout pageTitle="Phản biện">
      <Table columns={columns} dataSource={thesisList} />
      <CriticalAssessmentFormModal />
      {thesis != null && (
        <ThesisDetailView
          thesis={thesis}
          isOpen={isOpenThesisDetail}
          setIsOpen={setIsOpenThesisDetail}
        />
      )}
    </PageLayout>
  );
};

export default CriticalAssessmentPage;
