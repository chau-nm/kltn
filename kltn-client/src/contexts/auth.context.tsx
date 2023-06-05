import { SetStateAction, createContext, useState } from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  role: string | null;
  setRole: React.Dispatch<SetStateAction<string | null>>;
  user: UserCusModel | null;
  setUser: React.Dispatch<SetStateAction<UserCusModel | null>>;
  reset: () => void;
}

const initAuthContext: AuthContextInterface = {
  isAuthenticated: false,
  setAuthenticated: () => null,
  role: null,
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
  const [role, setRole] = useState<string | null>(null);
  const [user, setUser] = useState<UserCusModel | null>(null);

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
