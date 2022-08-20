import { createContext, useState, useContext } from "react";
const sideBarLiContext = createContext();

export function SideBarContextProvider({ children }) {
  const [pagesPosition, setPagesPosition] = useState({});
  function changePagePosition(change) {
    setPagesPosition((pervPages) => {
      return { ...pervPages, ...change };
    });
  }
  return (
    <sideBarLiContext.Provider value={{ pagesPosition, changePagePosition }}>
      {children}
    </sideBarLiContext.Provider>
  );
}

export function usePagePosition() {
  return useContext(sideBarLiContext);
}
