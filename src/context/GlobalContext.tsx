import { createContext, FC, ReactNode, useContext } from "react";

import { GlobalContextValue } from "./types";

interface ProviderProps extends GlobalContextValue {
  children?: ReactNode;
}

export const GlobalContext = createContext<GlobalContextValue | undefined>(
  undefined
);

export const GlobalContextProvider: FC<ProviderProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <GlobalContext.Provider value={rest}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextValue => {
  const value = useContext(GlobalContext);
  if (value === undefined) {
    throw new Error(
      "useGlobalContext must be used within the GlobalContextProvider"
    );
  }
  return value;
};
