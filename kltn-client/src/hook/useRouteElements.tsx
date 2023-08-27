import { lazy, useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthConstants from "~/constants/authConstants";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/AuthContext";
import ConsoleLayout from "~/layouts/ConsoleLayout";

import LoginLayout from "~/layouts/LoginLayout";
import DashboardLayout from "~/layouts/DashboardLayout";

import { hasCommonValue } from "~/common/util";
import PageNotFounded from "~/features/PageNotFounded";
import ThesisConsoleProvider from "~/contexts/ThesisConsoleContext";
import { CriticalAssessmentDashboardProvider } from "~/contexts/CriticalAssessmentDashboardContext";

/** IMPORT PAGE START */
const LoginPage = lazy(async () => await import("~/features/LoginPage"));

// Dashboard
const DashboardPage = lazy(async () => await import("~/features/Dashboard"));
const NotificationDetailPage = lazy(
  async () => await import("~/features/Dashboard/NotificationDetailPage")
);
const DashboardThesisRegisterPage = lazy(
  async () => await import("~/features/Dashboard/RegisterThesisPage")
);
const MyThesisPage = lazy(
  async () => await import("~/features/Dashboard/MyThesisPage")
);
const ReferenceThesisPage = lazy(
  async () => await import("~/features/Dashboard/ReferenceThesis")
);
const OutlineReviewPage = lazy(
  async () => await import("~/features/Dashboard/OutlineReviewPage")
);
const CriticalAssessmentPage = lazy(
  async () => await import("~/features/Dashboard/CriticalAssessmentPage")
);
const ProtectionPage = lazy(
  async () => await import("~/features/Dashboard/ProtectionPage")
);

// Console
const NotificationConsolePage = lazy(
  async () => await import("~/features/Console/NotificationPage")
);
const ConsolePage = lazy(async () => await import("~/features/Console"));
const ThesisConsolePage = lazy(
  async () => await import("~/features/Console/ThesisPage")
);
const UserPage = lazy(async () => await import("~/features/Console/UserPage"));

/** IMPORT PAGE END */

type AuthenticatedRouteProps = {
  roles: Array<string | null>;
};

/**
 * Route for rejected
 *
 * @returns
 */
const RejectedRoute = (): JSX.Element => {
  const { isAuthenticated } = useContext(AuthContext);

  return !isAuthenticated ? (
    <Navigate to={path.LOGIN} />
  ) : (
    <Navigate to={path.DASHBOARD} />
  );
};

/**
 * Route for Authenticated
 */
const AuthenticatedRoute = ({
  roles,
}: AuthenticatedRouteProps): JSX.Element => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const userRoles = user?.roles != null ? user.roles : [];
  const hasRole = hasCommonValue(roles, userRoles);

  if (isAuthenticated && hasRole) {
    return <Outlet />;
  } else {
    return <Navigate to={path.LOGIN} />;
  }
};

/**
 * Routes
 * @returns
 */
const useRouteElements = (): React.ReactElement | null => {
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
          path: path.DASHBOARD,
          element: (
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          ),
        },
        {
          path: `${path.NOTIFICATION_DETAIL}/:id`,
          element: (
            <DashboardLayout>
              <NotificationDetailPage />
            </DashboardLayout>
          ),
        },
        {
          path: path.MY_THESIS,
          element: (
            <DashboardLayout>
              <MyThesisPage />
            </DashboardLayout>
          ),
        },
        {
          path: path.REFERENCE_THESIS,
          element: (
            <DashboardLayout>
              <ReferenceThesisPage />
            </DashboardLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute
          roles={[
            AuthConstants.AUTH_ROLES.ADMIN,
            AuthConstants.AUTH_ROLES.MINISTRY,
          ]}
        />
      ),
      children: [
        {
          path: path.CONSOLE,
          element: (
            <ConsoleLayout>
              <ConsolePage />
            </ConsoleLayout>
          ),
        },
        {
          path: path.NOTIFICATION_CONSOLE,
          element: (
            <ConsoleLayout>
              <NotificationConsolePage />
            </ConsoleLayout>
          ),
        },
        {
          path: path.THESIS_CONSOLE,
          element: (
            <ConsoleLayout>
              <ThesisConsoleProvider>
                <ThesisConsolePage />
              </ThesisConsoleProvider>
            </ConsoleLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: <AuthenticatedRoute roles={[AuthConstants.AUTH_ROLES.ADMIN]} />,
      children: [
        {
          path: path.USER_CONSOLE,
          element: (
            <ConsoleLayout>
              <UserPage />
            </ConsoleLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={[AuthConstants.AUTH_ROLES.STUDENT]} />
      ),
      children: [
        {
          path: path.DASHBOARD_REGISTER_THESIS_CALENDAR,
          element: (
            <DashboardLayout>
              <DashboardThesisRegisterPage />
            </DashboardLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={[AuthConstants.AUTH_ROLES.TEACHER]} />
      ),
      children: [
        {
          path: path.OUTLINE_REVIEW,
          element: (
            <DashboardLayout>
              <OutlineReviewPage />
            </DashboardLayout>
          ),
        },
        {
          path: path.CRITICAL_ASSESSMENT,
          element: (
            <DashboardLayout>
              <CriticalAssessmentDashboardProvider>
                <CriticalAssessmentPage />
              </CriticalAssessmentDashboardProvider>
            </DashboardLayout>
          ),
        },
        {
          path: path.PROTECTION,
          element: (
            <DashboardLayout>
              <ProtectionPage />
            </DashboardLayout>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFounded />,
    },
  ]);
  return routerElements;
};

export default useRouteElements;
