import { Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthConstants from "~/constants/auth-constants";
import path from "~/constants/path";

import LoginLayout from "~/layouts/login-layout";
import MainLayout from "~/layouts/main-layout";

const AccountsManagerPage = lazy(
  () => import("~/pages/admin/acounts_manager-page")
);
const CounterArgumentFormPage = lazy(
  () => import("~/pages/council/counter-argument-form-page")
);
const HomePage = lazy(() => import("~/pages/home-page"));
const LoginPage = lazy(() => import("~/pages/login-page"));
const MarkFormPage = lazy(() => import("~/pages/mark-form-page"));
const NotificationPage = lazy(
  () => import("~/pages/ministry/send-notification-page")
);
const ThesisManagementPage = lazy(
  () => import("~/pages/ministry/thesis-management-page")
);
const ReportSchedulePage = lazy(() => import("~/pages/report-schedule-page"));
const RegisterThesisPage = lazy(
  () => import("~/pages/student/register-thesis-page")
);
const ThesisListPage = lazy(() => import("~/pages/thesis-list-page"));

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
              <AccountsManagerPage />
            </MainLayout>
          ),
        },
        {
          path: path.SEND_NOTIFICATION,
          element: (
            <MainLayout>
              <NotificationPage />
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
              <CounterArgumentFormPage />
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
              <MarkFormPage />
            </MainLayout>
          ),
        },
      ],
    },
  ]);
  return routerElements;
};

export default useRouteElements;
