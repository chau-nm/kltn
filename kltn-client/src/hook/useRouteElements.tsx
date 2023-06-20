import { Suspense, lazy, useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthConstants from "~/constants/auth-constants";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/auth.context";
import ConsoleLayout from "~/layouts/ConsoleLayout";

import LoginLayout from "~/layouts/LoginLayout";
import DashboardLayout from "~/layouts/DashboardLayout";
import ConsolePage from "~/pages/console";

import { hasCommonValue } from "~/utils/util";
import PageNotFounded from "~/pages/PageNotFounded";
import Notification from "~/components/home-page/Notification";

// const AccountsManagerPage = lazy(
//   () => import("~/pages/admin/acounts_manager-page")
// );
// const CounterArgumentFormPage = lazy(
//   () => import("~/pages/council/counter-argument-form-page")
// );
// const MarkFormPage = lazy(() => import("~/pages/mark-form-page"));
// const NotificationPage = lazy(
//   () => import("~/pages/ministry/send-notification-page")
// );
// const ThesisManagementPage = lazy(
//   () => import("~/pages/ministry/thesis-management-page")
// );
// const ReportSchedulePage = lazy(() => import("~/pages/report-schedule-page"));
// const RegisterThesisPage = lazy(
//   () => import("~/pages/student/register-thesis-page")
// );
// const ThesisListPage = lazy(() => import("~/pages/thesis-list-page"));
/** IMPORT PAGE START */
const LoginPage = lazy(() => import("~/pages/LoginPage"));

const HomePage = lazy(() => import("~/pages/dashboard"));
const ProfilePage = lazy(() => import( "~/pages/dashboard/ProfilePage"));
const NotificationConsolePage = lazy(() => import("~/pages/console/NotificationConsolePage"));


/** IMPORT PAGE END */


type AuthenticatedRouteProps = {
  roles: Array<string | null>;
};

/**
 * Route for rejected
 *
 * @returns
 */
const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
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
  const { isAuthenticated, user } = useContext(AuthContext);
  const userRoles = user?.roles ? user.roles : [];
  let hasRole = hasCommonValue(roles, userRoles);
  if (isAuthenticated && hasRole) {
    return <Outlet />;
  }else{
    return <Navigate to={path.LOGIN} />;
  }
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
            <DashboardLayout>
              <HomePage />
            </DashboardLayout>
          ),
        }
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={[
          AuthConstants.AUTH_ROLES.ADMIN,
          AuthConstants.AUTH_ROLES.MINISTRY,
          AuthConstants.AUTH_ROLES.WEB_MANAGER,
        ]} />
      ),
      children: [
        {
          path: path.CONSOLE,
          element: (
            <ConsoleLayout>
              <ConsolePage />
            </ConsoleLayout>
          )
        }
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={[
          AuthConstants.AUTH_ROLES.MINISTRY,
          AuthConstants.AUTH_ROLES.WEB_MANAGER,
        ]} />
      ),
      children: [
        {
          path: path.NOTIFICATION_CONSOLE,
          element: (
            <ConsoleLayout>
              <NotificationConsolePage />
            </ConsoleLayout>
          )
        }
      ],
    },
    {
      path: "*",
      element: <PageNotFounded/>
    }
  ]);
  return routerElements;
};

export default useRouteElements;
