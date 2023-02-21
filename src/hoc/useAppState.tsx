import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useContext,
} from "react";

type AppStateType = {
  appState: { editTodoId: number; isDrawerOpen: boolean };
  setAppState: Dispatch<
    SetStateAction<{ editTodoId: number; isDrawerOpen: boolean }>
  >;
};

export const AppSate = createContext<AppStateType>({
  appState: { editTodoId: -1, isDrawerOpen: false },
  setAppState: () => {},
});

export const useAppState = () => useContext(AppSate);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState({
    editTodoId: -1,
    isDrawerOpen: false,
  });

  return (
    <AppSate.Provider value={{ appState, setAppState }}>
      {children}
    </AppSate.Provider>
  );
};
