import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";

const PageNotFounded = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn muốn vào không tồn tại!"
      extra={
        <Button type="default" onClick={() => navigate(path.DASHBOARD)}>
          Trở về
        </Button>
      }
    />
  );
};

export default PageNotFounded;
