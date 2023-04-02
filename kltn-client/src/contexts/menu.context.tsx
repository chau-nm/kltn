import { useState } from "react";
import { SetStateAction } from "react";
import { createContext } from "react";
import MainLayouConstants from "~/constants/main-layout-constants";

interface MenuContextValuesInterface {
  menuActive: number;
  setMenuActive: React.Dispatch<SetStateAction<number>>;
}

const initMenuContextValues: MenuContextValuesInterface = {
  menuActive: 0,
  setMenuActive: () => null,
};

export const MenuContext = createContext<MenuContextValuesInterface>(
  initMenuContextValues
);

export const MenuContextProvider = ({ children }: React.PropsWithChildren) : JSX.Element => {
  const [menuActive, setMenuActive] = useState<number>(
    MainLayouConstants.MENU_LIST[0].menuId
  );

  return (
    <MenuContext.Provider
      value={{
        menuActive,
        setMenuActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
