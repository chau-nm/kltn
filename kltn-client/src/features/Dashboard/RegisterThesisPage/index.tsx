import { Spin, Typography } from "antd";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";
import RegisterThesisForm from "./RegisterThesisForm";

const RegisterThesisPage = (): JSX.Element => {
  const {
    data: thesisRegisterCalendar,
    isLoading: isLoadingViewThesisRegisterCalendar,
  } = useQuery(
    ["view-thesis-register-calendar"],
    ThesisRegisterCalendarService.view
  );

  const RegisterContent = (): JSX.Element => {
    return <RegisterThesisForm />;
  };

  return (
    <PageLayout pageTitle="Đăng ký khóa luận tốt nghiệp">
      <Spin spinning={isLoadingViewThesisRegisterCalendar}>
        {!thesisRegisterCalendar ? (
          <Typography.Text>Chưa tới thời gian đăng ký</Typography.Text>
        ) : (
          <RegisterContent />
        )}
      </Spin>
    </PageLayout>
  );
};

export default RegisterThesisPage;
