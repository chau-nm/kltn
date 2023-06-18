import React, { SetStateAction, createContext, useState } from "react";
import UserModal from "~/components/UserModal";

interface UserModalContextInterface {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const initUserModalContext: UserModalContextInterface = {
  open: false,
  setOpen: () => null,
};

export const UserModalContext = createContext(initUserModalContext);

export const UserModalProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {

    const [open, setOpen] = useState<boolean>(false);

  return (
    <UserModalContext.Provider value={{
        open,
        setOpen
    }}>
        {children}
        <UserModal />
    </UserModalContext.Provider>
  );
};
