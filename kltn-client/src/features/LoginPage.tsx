import { Button, Card, Form, Input, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageConstants from "~/constants/loginPageConstants";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/AuthContext";
import { login} from "~/services/userServices";
import {useMutation} from 'react-query';

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isAuthenticated, setAuthenticated, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      const user: UserModel | null = data as UserModel;
      if (user == null) {
        alert('Login failed');
      }else{
        handleLoginSuccess(user);
      }
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate(path.DASHBOARD);
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    const loginCondition: LoginConditionModel = {
      username: username,
      password: password,
    };
    loginMutation.mutate(loginCondition);
  };

  const handleLoginSuccess = (user: UserModel) => {
    let accessToken = user.accessToken;
    let refeshToken = user.refreshToken;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refeshToken);

    setAuthenticated(true);
    setUser(user);    
  };

  return (
    <Spin spinning={loginMutation.isLoading}>
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
    </Spin>
  );
};

export default LoginPage;