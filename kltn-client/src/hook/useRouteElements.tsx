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
import ThesisListPage from "~/pages/thesis-list-page";
import CounterArgumentFrom from "~/pages/evaluate-page";
import ReportSchedulePage from "~/pages/report-schedule-page";
import RegisterThesisPage from "~/pages/register-thesis-page";
import ThesisManagementPage from "~/pages/thesis-management-page";
import MarkFrom from "~/pages/mark-form-page";

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
        {
          path: path.THESIS_LIST_PAGE,
          element: (
            <MainLayout>
              <ThesisListPage />
            </MainLayout>
          ),
        },
        {
          path: path.COUNTER_ARGUMENT,
          element: (
            <MainLayout>
              <CounterArgumentFrom />
            </MainLayout>
          ),
        },
        {
          path: path.REPORT_SCHEDULE,
          element: (
            <MainLayout>
              <ReportSchedulePage />
            </MainLayout>
          ),
        },
        {
          path: path.REGISTER_THESIS,
          element: (
            <MainLayout>
              <RegisterThesisPage />
            </MainLayout>
          ),
        },
        {
          path: path.THESIS_MANAGEMENT,
          element: (
            <MainLayout>
              <ThesisManagementPage />
            </MainLayout>
          ),
        },
        {
          path: path.MARK,
          element: (
            <MainLayout>
              <MarkFrom />
            </MainLayout>
          ),
        },
      ],
    },
  ]);
  return routerElements;
};

export default useRouteElements;
