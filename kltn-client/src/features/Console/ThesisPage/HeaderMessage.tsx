import { Typography } from "antd";
import { useContext } from "react";
import { dateTimeDisplay } from "~/common/util";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

const HeaderMessage = (): JSX.Element => {
  const { thesisRegisterCalendar } = useContext(ThesisConsoleContext);

  if (thesisRegisterCalendar != null) {
    return (
      <Typography.Text type="secondary" className="italic">
        Đang mở đăng ký khóa luận:{" "}
        {dateTimeDisplay(new Date(thesisRegisterCalendar.startAt as number))} -{" "}
        {dateTimeDisplay(new Date(thesisRegisterCalendar.endAt as number))}
      </Typography.Text>
    );
  }

  return <></>;
};

export default HeaderMessage;
