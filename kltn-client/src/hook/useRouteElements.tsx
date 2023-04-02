import { useRoutes } from "react-router-dom";
import path from "~/constants/path";
import LoginPage from "~/pages/login-page";
import { Outlet, Navigate } from "react-router-dom";
import AuthConstants from "~/constants/auth-constants";
import HomePage from "~/pages/home-page";
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
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? (
    <Navigate to={path.login} />
  ) : (
    <Navigate to={path.home} />
  );
};

/**
 * Route for Authenticated
 */
const AuthenticatedRoute = ({ roles }: AuthenticatedRouteProps) => {
  const { isAuthenticated, role } = useContext(AuthContext);
  if (isAuthenticated && roles.indexOf(role) >= 0) {
    return <Outlet />;
  }
  return <Navigate to={path.login} />;
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
      path: path.login,
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
          path: path.home,
          element: (
            <MainLayout>
              <HomePage />
            </MainLayout>
          ),
        },
      ],
    },
  ]);
  return routerElements;
};

export default useRouteElements;
