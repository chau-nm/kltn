import React, { type SetStateAction, createContext, useState } from "react";
import ChangePasswordComponent from "~/components/ChangPasswordCompoent";
import UserModal from "~/components/UserModal";

interface UserModalContextInterface {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;

  isOpenChangePasswordModal: boolean;
  setIsOpenChangePasswordModal: React.Dispatch<SetStateAction<boolean>>;
}

const initUserModalContext: UserModalContextInterface = {
  open: false,
  setOpen: () => null,

  isOpenChangePasswordModal: false,
  setIsOpenChangePasswordModal: () => null,
};

export const UserModalContext = createContext(initUserModalContext);

export const UserModalProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] =
    useState<boolean>(false);

  return (
    <UserModalContext.Provider
      value={{
        open,
        setOpen,

        isOpenChangePasswordModal,
        setIsOpenChangePasswordModal,
      }}
    >
      {children}
      <UserModal />
      <ChangePasswordComponent />
    </UserModalContext.Provider>
  );
};
