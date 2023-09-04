import { type SetStateAction, createContext, useState } from "react";

interface DefenseDashboarContextInterface {
  isOpenDefenseForm: boolean;
  setIsOpenDefenseForm: React.Dispatch<SetStateAction<boolean>>;

  thesis: ThesisModel | undefined;
  setThesis: React.Dispatch<SetStateAction<ThesisModel | undefined>>;

  isOpenThesisDetail: boolean;
  setIsOpenThesisDetail: React.Dispatch<SetStateAction<boolean>>;
}

const initDefenseDashboarContext: DefenseDashboarContextInterface = {
  isOpenDefenseForm: false,
  setIsOpenDefenseForm: () => null,

  thesis: undefined,
  setThesis: () => null,

  isOpenThesisDetail: false,
  setIsOpenThesisDetail: () => null,
};

export const DefenseDashboardContext = createContext(
  initDefenseDashboarContext
);

export const DefenseDashboardProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [isOpenDefenseForm, setIsOpenDefenseForm] = useState(false);

  const [thesis, setThesis] = useState<ThesisModel>();

  const [isOpenThesisDetail, setIsOpenThesisDetail] = useState(false);

  return (
    <DefenseDashboardContext.Provider
      value={{
        isOpenDefenseForm,
        setIsOpenDefenseForm,
        thesis,
        setThesis,
        isOpenThesisDetail,
        setIsOpenThesisDetail,
      }}
    >
      {children}
    </DefenseDashboardContext.Provider>
  );
};
