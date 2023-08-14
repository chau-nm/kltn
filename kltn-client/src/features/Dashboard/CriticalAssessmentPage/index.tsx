import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import CommonConstants from "~/constants/commonConstants";
import { AuthContext } from "~/contexts/AuthContext";
import * as ThesisService from "~/services/thesisService";
import CriticalAssessmentFormModal from "./CriticalAssessmentFormModal";

const CriticalAssessmentPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);

  const { data: thesisList } = useQuery(["search-thesis-ca-by-user-id"], () =>
    ThesisService.searchThesisCAByUserId(user?.userId!)
  );

  useEffect(() => {
    console.log(thesisList);
  }, [thesisList]);

  const columns: ColumnType<ThesisModel>[] = [
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
        return "Đánh giá";
      },
    },
  ];

  return (
    <PageLayout pageTitle="Phản biện">
      <Table columns={columns} dataSource={thesisList} />
      <CriticalAssessmentFormModal />
    </PageLayout>
  );
};

export default CriticalAssessmentPage;
