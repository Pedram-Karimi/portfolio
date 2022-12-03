import { createContext, useContext, useState } from "react";

type ChildComponents = {
  children: JSX.Element;
};

const PhoneSideMenuCtx = createContext<any>(null);

export const PhoneSideMenuProvider = ({ children }: ChildComponents) => {
  const [sideMenuStatus, setSideMenuStatus] = useState<boolean>(false);

  const changeSideMenuStatus = () => {
    setSideMenuStatus(!sideMenuStatus);
  };

  return (
    <PhoneSideMenuCtx.Provider value={{ sideMenuStatus, changeSideMenuStatus }}>
      {children}
    </PhoneSideMenuCtx.Provider>
  );
};

export function usePhoneSideMenu() {
  return useContext(PhoneSideMenuCtx);
}
