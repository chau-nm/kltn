import { Space } from "antd";

const LoginLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <Space className="w-[100vw] h-[100vh] flex justify-center align-center">
        {children}
    </Space>
  );
};

export default LoginLayout;
