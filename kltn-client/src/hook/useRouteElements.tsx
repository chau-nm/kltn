import { useRoutes } from "react-router-dom";
import path from "~/constants/path";
import LoginPage from "~/pages/login-page";
import { Outlet, Navigate } from "react-router-dom";
import AuthConstants from "~/constants/auth-constants";
import HomePage from "~/pages/home-page";
import AccountsManager from "~/pages/acounts_manager-page";
import Notification from "~/pages/send-notification-page";
import MainLayout from "~/layouts/main-layout";
import LoginLayout from "~/layouts/login-layout";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth.context";

type AuthenticatedRouteProps = {
  roles: Array<number | null>;
};

/**
 * Route for rejected
 *
 * @returns
 */
const RejectedRoute = () => {
  const { isAuthenticated } = { isAuthenticated: true };
  return !isAuthenticated ? (
    <Navigate to={path.LOGIN} />
  ) : (
    <Navigate to={path.HOME} />
  );
};

/**
 * Route for Authenticated
 */
const AuthenticatedRoute = ({ roles }: AuthenticatedRouteProps) => {
  const { isAuthenticated, role } = {
    isAuthenticated: true,
    role: 0,
  };
  if (isAuthenticated && roles.indexOf(role) >= 0) {
    return <Outlet />;
  }
  return <Navigate to={path.LOGIN} />;
};

/**
 * Routes
 * @returns
 */
const useRouteElements = () => {
  const routerElements = useRoutes([
    {
      path: "",
      element: <RejectedRoute />,
    },
    {
      path: path.LOGIN,
      element: (
        <LoginLayout>
          <LoginPage />
        </LoginLayout>
      ),
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={Object.values(AuthConstants.AUTH_ROLES)} />
      ),
      children: [
        {
          path: path.HOME,
          element: (
            <MainLayout>
              <HomePage />
            </MainLayout>
          ),
        },
        {
          path: path.ACCOUNTS_MANAGER,
          element: (
            <MainLayout>
              <AccountsManager />
            </MainLayout>
          ),
        },
        {
          path: path.SEND_NOTIFICATION,
          element: (
            <MainLayout>
              <Notification />
            </MainLayout>
          ),
        },
      ],
    },
  ]);
  return routerElements;
};

export default useRouteElements;
