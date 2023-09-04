import { Spin, Typography } from "antd";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";
import RegisterThesisForm from "./RegisterThesisForm";
import * as ThesisService from "~/services/thesisService";
import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";

const RegisterThesisPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);

  const {
    data: thesisRegisterCalendar,
    isLoading: isLoadingViewThesisRegisterCalendar,
  } = useQuery(
    ["view-thesis-register-calendar"],
    ThesisRegisterCalendarService.view
  );

  const { data: myThesis, isLoading: myThesisLoading } = useQuery<
    ThesisModel[]
  >(
    ["find-my-thesis"],
    async () => await ThesisService.findMyThesis(user?.userId ?? ""),
    {
      onSuccess: () => {},
    }
  );

  return (
    <PageLayout pageTitle="Đăng ký khóa luận tốt nghiệp">
      <Spin spinning={isLoadingViewThesisRegisterCalendar || myThesisLoading}>
        {thesisRegisterCalendar == null ? (
          <Typography.Text>Chưa tới thời gian đăng ký</Typography.Text>
        ) : (myThesis?.length ?? 0) > 0 ? (
          <Typography.Text>Bạn đã đăng ký luận văn rồi.</Typography.Text>
        ) : (
          <RegisterThesisForm />
        )}
      </Spin>
    </PageLayout>
  );
};

export default RegisterThesisPage;
