import { Spin } from "antd";

const LoadingPage = (): JSX.Element => {
  return (
    <Spin>
      <div className="w-[100vw] h-[100vh]"></div>
    </Spin>
  );
};

export default LoadingPage;
