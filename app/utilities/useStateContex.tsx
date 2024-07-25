import React, { createContext, useContext, useState, ReactNode } from "react";

type ToggleState = {
  [key: string]: boolean;
};

type StateContextType = {
  state: {
    toggles: ToggleState;
  };
  setToggle: (key: string, value: boolean) => void;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<{ toggles: ToggleState }>({
    toggles: {},
  });

  const setToggle = (key: string, value: boolean) => {
    setState((prevState) => ({
      ...prevState,
      toggles: { ...prevState.toggles, [key]: value },
    }));
  };

  return (
    <StateContext.Provider value={{ state, setToggle }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
