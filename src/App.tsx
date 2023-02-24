import React from "react";
import TodoContainer from "./containers/TodoContainer";
import "./styles/_base.scss";
import classes from "./App.module.scss";
import Header from "./_partials/Header/Header";
import EditTodoItem from "./containers/TodoContainer/EditTodoItem";
import { AppStateProvider } from "./hoc/useAppState";
import StatsContainer from "./containers/StatsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutContainer } from "./containers/AboutContainer/AboutContainer";

function App() {
  return (
    <>
      <Header />
      <div className={classes.TodoList + " mr-auto ml-auto"}>
        <AppStateProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <TodoContainer />
                    <EditTodoItem />
                  </>
                }
              ></Route>
              <Route path="/stats" element={<StatsContainer />} />
              <Route path="/about" element={<AboutContainer />} />
            </Routes>
          </BrowserRouter>
        </AppStateProvider>
      </div>
    </>
  );
}

export default App;
