import { SetStateAction, createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import path from "~/constants/path";
import LoadingPage from "~/pages/LoadingPage";
import { getUsuerByToken } from "~/services/user-service";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  user: UserCusModel | null;
  setUser: React.Dispatch<SetStateAction<UserCusModel | null>>;
  signOut: () => void;
}

const initAuthContext: AuthContextInterface = {
  isAuthenticated: false,
  setAuthenticated: () => null,
  user: null,
  setUser: () => null,
  signOut: () => null,
};

export const AuthContext = createContext(initAuthContext);

export const AuthContextProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    let isAuthSession = localStorage.getItem("isAuthenticated");
    return isAuthSession ? JSON.parse(isAuthSession) : false;
  });
  const [user, setUser] = useState<UserCusModel | null>(() => {
    let userSession = localStorage.getItem('user');
    return userSession ? JSON.parse(userSession) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({
      ...user,
      password: 'Protected'
    }));
  }, [user])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const checkLogged = useMutation(getUsuerByToken, {
    onSuccess: (data) => {
      const user: UserCusModel | null = data as UserCusModel;
      if (user) {
        handleLogged(user);
      } else {
        signOut();
      }
    },
  });

  const handleLogged = (user: UserCusModel) => {
    setAuthenticated(true);
    setUser(user);
  };

  const signOut = () => {
    setAuthenticated(false);
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    let accsessToken = localStorage.getItem("access_token");
    if (accsessToken) {
      checkLogged.mutate({
        accessToken: accsessToken,
      });
    }
  }, []);

  if (checkLogged.isLoading) {
    return <LoadingPage />;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        user,
        setUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
