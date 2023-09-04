import { type ColumnType } from "antd/es/table";
import { useContext } from "react";
import { useQuery } from "react-query";
import ThesisDetailView from "~/components/ThesisDetailView";
import PageLayout from "~/components/common/PageLayout";
import TableCommon from "~/components/common/TableCommon";
import CommonConstants from "~/constants/commonConstants";
import { AuthContext } from "~/contexts/AuthContext";
import { DefenseDashboardContext } from "~/contexts/DefenseDashboardContext";
import DefenseRatingFormModal from "./DefenseRatingFormModal";
import * as ThesisService from "~/services/thesisService";

const ProtectionPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const {
    thesis,
    setThesis,
    setIsOpenThesisDetail,
    isOpenThesisDetail,
    setIsOpenDefenseForm,
  } = useContext(DefenseDashboardContext);

  const { data: thesisList } = useQuery(
    ["search-thesis-ca-by-user-id"],
    async () => {
      if (user?.userId) {
        return await ThesisService.findThesisByDefenseRater(user.userId);
      }
    }
  );

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
              setIsOpenDefenseForm(true);
            }}
          >
            Đánh giá
          </span>
        );
      },
    },
  ];

  return (
    <PageLayout pageTitle="Bảo vệ luận văn">
      <TableCommon columns={columns} dataSource={thesisList} />
      <DefenseRatingFormModal />
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

export default ProtectionPage;
