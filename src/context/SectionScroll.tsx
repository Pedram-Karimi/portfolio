import { createContext, useState, useContext } from "react";

const SideBarLiContext = createContext<any>(null);

type ChildComponents = {
  children: JSX.Element;
};

export function SideBarContextProvider({ children }: ChildComponents) {
  const [pagesPosition, setPagesPosition] = useState({});
  function changePagePosition(change: any) {
    setPagesPosition((pervPages) => {
      return { ...pervPages, ...change };
    });
  }
  return (
    <SideBarLiContext.Provider value={{ pagesPosition, changePagePosition }}>
      {children}
    </SideBarLiContext.Provider>
  );
}

export function usePagePosition() {
  return useContext(SideBarLiContext);
}
