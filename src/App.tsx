import React, { useEffect, useState } from "react";
import "./styles/_base.scss";
import classes from "./App.module.scss";
import Header from "./_partials/Header/Header";
import { AppStateProvider } from "./hoc/useAppState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Loading = () => <div>Loading...</div>;

const withAsync = (importFn: any) => {
  return () => {
    const [Component, setComponent] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      importFn().then((module: any) => {
        setComponent(() => module.default);
        setIsLoading(false);
      });
    }, []);

    return isLoading ? <Loading /> : <Component />;
  };
};

const AsyncTodoContainer = withAsync(
  () => import("./containers/TodoContainer")
);

const AsyncEditTodoItem = withAsync(
  () => import("./containers/TodoContainer/EditTodoItem")
);

const AsyncStatsContainer = withAsync(
  () => import("./containers/StatsContainer")
);

const AsyncAboutContainer = withAsync(
  () => import("./containers/AboutContainer")
);

function App() {
  return (
    <>
      <AppStateProvider>
        <BrowserRouter>
          <Header />
          <div className={classes.TodoList + " mr-auto ml-auto"}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AsyncTodoContainer />
                    <AsyncEditTodoItem />
                  </>
                }
              ></Route>
              <Route path="/stats" element={<AsyncStatsContainer />} />
              <Route path="/about" element={<AsyncAboutContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppStateProvider>
    </>
  );
}

export default App;
