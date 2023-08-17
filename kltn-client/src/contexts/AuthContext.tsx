import { createContext, useEffect, useState, type SetStateAction } from "react";
import { useMutation } from "react-query";
import LoadingPage from "~/features/LoadingPage";
import { getUsuerByToken } from "~/services/userServices";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  user: UserModel | undefined;
  setUser: React.Dispatch<SetStateAction<UserModel | undefined>>;
  signOut: () => void;
}

const initAuthContext: AuthContextInterface = {
  isAuthenticated: false,
  setAuthenticated: () => null,
  user: undefined,
  setUser: () => null,
  signOut: () => null,
};

export const AuthContext = createContext(initAuthContext);

export const AuthContextProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    const isAuthSession = localStorage.getItem("isAuthenticated");
    return isAuthSession ? JSON.parse(isAuthSession) : false;
  });
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const checkLogged = useMutation(getUsuerByToken, {
    onSuccess: (data) => {
      const user: UserModel | null = data as UserModel;
      if (user) {
        handleLogged(user);
      } else {
        signOut();
      }
    },
  });

  const handleLogged = (user: UserModel): void => {
    setAuthenticated(true);
    setUser(user);
  };

  const signOut = (): void => {
    setAuthenticated(false);
    setUser(undefined);
    localStorage.clear();
  };

  useEffect(() => {
    const accsessToken = localStorage.getItem("access_token");
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
