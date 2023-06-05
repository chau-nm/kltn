import { Button, Card, Form, Input, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageConstants from "~/constants/login-page-constant";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/auth.context";
import {checkLogged, login} from "~/services/user-service";
import {useMutation} from 'react-query';

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isAuthenticated, role, setAuthenticated, setRole, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      const user: UserCusModel | null = data as UserCusModel;
      // if (user == null) {
      //   alert('Login failed');
      // }else{
      //   handleSaveUserToContext(user);
      // }
      checkLoggedMutation.mutate();
    }
  });

  const checkLoggedMutation = useMutation(checkLogged, {
    onSuccess: (data) => {
      const user: UserCusModel | null = data as UserCusModel;
      // if (user == null) {
      // }else{
      //   handleSaveUserToContext(user);
      // }
    }
  })

  useEffect(() => {
    
  }, [loginMutation.isSuccess]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(path.HOME);
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    const loginCondition: LoginCondition = {
      username: username,
      password: password,
    };
    loginMutation.mutate(loginCondition);
  };

  const handleSaveUserToContext = (user: UserCusModel) => {
    setUser(user);
    setRole(user.role);
    setAuthenticated(true);
  };

  return (
    <Spin spinning={loginMutation.isLoading || checkLoggedMutation.isLoading}>
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
