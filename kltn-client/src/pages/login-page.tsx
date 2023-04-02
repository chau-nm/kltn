import { Card, Form, Input, Button } from "antd";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageConstants from "~/constants/login-page-constant";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/auth.context";
import UserService from "~/services/user-service";

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const { isAuthenticated,setAuthenticated, setRole, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated){
      navigate(path.home);
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    let user = UserService.login(username, password);
    if (user){
      setAuthenticated(true);
      setUser(user);
      setRole(user.role);
    }
  };

  return (
    <Card title={LoginPageConstants.TITLE} className="w-[400px]">
      <Form layout="vertical">
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Tên đăng nhập"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" htmlType="submit" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
