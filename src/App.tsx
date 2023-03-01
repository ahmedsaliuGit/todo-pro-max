import React from "react";
import "./styles/_base.scss";
import Header from "./_partials/Header/Header";
import { AppStateProvider } from "./hoc/useAppState";
import { Route, Routes } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspense";
import { PageLayout } from "./components/PageLayout/PageLayout";

const AsyncTodoContainer = withSuspense(
  () => import("./containers/TodoContainer")
);

const AsyncEditTodoItem = withSuspense(
  () => import("./containers/TodoContainer/EditTodoItem")
);

const AsyncStatsContainer = withSuspense(
  () => import("./containers/StatsContainer")
);

const AsyncAboutContainer = withSuspense(
  () => import("./containers/AboutContainer")
);

function App() {
  return (
    <>
      <AppStateProvider>
        <Header />
        <PageLayout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {AsyncTodoContainer}
                  {AsyncEditTodoItem}
                </>
              }
            ></Route>
            <Route path="/stats" element={AsyncStatsContainer} />
            <Route path="/about" element={AsyncAboutContainer} />
          </Routes>
        </PageLayout>
      </AppStateProvider>
    </>
  );
}

export default App;
