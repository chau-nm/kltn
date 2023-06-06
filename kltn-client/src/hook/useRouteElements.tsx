import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthConstants from "~/constants/auth-constants";
import path from "~/constants/path";

import LoginLayout from "~/layouts/login-layout";
import MainLayout from "~/layouts/main-layout";

import AccountsManagerPage from "~/pages/admin/acounts_manager-page";
import CounterArgumentFrom from "~/pages/council/evaluate-page";
import HomePage from "~/pages/home-page";
import LoginPage from "~/pages/login-page";
import RegisterThesisPage from "~/pages/student/register-thesis-page";
import ReportSchedulePage from "~/pages/report-schedule-page";
import SendNotificationPage from "~/pages/ministry/send-notification-page";
import ThesisListPage from "~/pages/thesis-list-page";
import ThesisManagementPage from "~/pages/ministry/thesis-management-page";
import MarkFrom from "~/pages/mark-form-page";
import EvalueThesisOutlinePage from "~/pages/council/evaluate-thesis-outline-page";
import NotificationPage from "~/pages/notification-page";
import AggregateRatingPage from "~/pages/aggregate-rating-page";
import AddReportPage from "~/pages/add-report-schedule-page";

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
              <SendNotificationPage />
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
        {
          path: path.EVALUE_THESIS_OUTLINE_PAGE,
          element: (
            <MainLayout>
              <EvalueThesisOutlinePage />
            </MainLayout>
          ),
        },
        {
          path: path.NOTIFICATION,
          element: (
            <MainLayout>
              <NotificationPage showTitle />
            </MainLayout>
          ),
        },
        {
          path: path.AGGREGATERATING,
          element: (
            <MainLayout>
              <AggregateRatingPage />
            </MainLayout>
          ),
        },
        {
          path: path.ADDREPORT,
          element: (
            <MainLayout>
              <AddReportPage />
            </MainLayout>
          ),
        },
      ],
    },
  ]);
  return routerElements;
};

export default useRouteElements;
