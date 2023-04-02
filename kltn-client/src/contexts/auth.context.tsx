import { SetStateAction, createContext, useState } from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  role: number | null;
  setRole: React.Dispatch<SetStateAction<number | null>>;
  user: UserModel | null;
  setUser: React.Dispatch<SetStateAction<UserModel | null>>;
  reset: () => void;
}

const initAuthContext: AuthContextInterface = {
  isAuthenticated: false,
  setAuthenticated: () => null,
  role: -1,
  setRole: () => null,
  user: null,
  setUser: () => null,
  reset: () => null,
};

export const AuthContext = createContext(initAuthContext);

export const AuthContextProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<number | null>(-1);
  const [user, setUser] = useState<UserModel | null>(null);

  const reset = () => {
    setAuthenticated(false);
    setRole(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        role,
        setRole,
        user,
        setUser,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
