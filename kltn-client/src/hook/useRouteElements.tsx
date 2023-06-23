import { Suspense, lazy, useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthConstants from "~/constants/authConstants";
import path from "~/constants/path";
import { AuthContext } from "~/contexts/AuthContext";
import ConsoleLayout from "~/layouts/ConsoleLayout";

import LoginLayout from "~/layouts/LoginLayout";
import DashboardLayout from "~/layouts/DashboardLayout";

import { hasCommonValue } from "~/common/util";
import PageNotFounded from "~/features/PageNotFounded";

/** IMPORT PAGE START */
const LoginPage = lazy(() => import("~/features/LoginPage"));

//Dashboard
const DashboardPage = lazy(() => import("~/features/Dashboard"));

//Console
const NotificationConsolePage = lazy(() => import("~/features/Console/NotificationPage"));
const ConsolePage = lazy(() => import("~/features/Console"));
const ThesisConsolePage = lazy(() => import("~/features/Console/ThesisPage"));


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
    <Navigate to={path.DASHBOARD} />
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
          path: path.DASHBOARD,
          element: (
            <DashboardLayout>
              <DashboardPage />
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
        },
        {
          path: path.NOTIFICATION_CONSOLE,
          element: (
            <ConsoleLayout>
              <NotificationConsolePage />
            </ConsoleLayout>
          )
        },
        {
          path: path.THESIS_CONSOLE,
          element: (
            <ConsoleLayout>
              <ThesisConsolePage />
            </ConsoleLayout>
          )
        }
      ],
    },
    {
      path: "",
      element: (
        <AuthenticatedRoute roles={[
          AuthConstants.AUTH_ROLES.ADMIN,
        ]} />
      ),
      children: [
        
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
