import React from "react";
import TodoContainer from "./containers/TodoContainer";
import "./styles/_base.scss";
import classes from "./App.module.scss";
import Header from "./_partials/Header/Header";
import EditTodoItem from "./containers/TodoContainer/EditTodoItem";
import { AppStateProvider } from "./hoc/useAppState";

function App() {
  return (
    <>
      <Header />
      <div className={classes.TodoList + " mr-auto ml-auto"}>
        <AppStateProvider>
          <TodoContainer />
          <EditTodoItem />
        </AppStateProvider>
      </div>
    </>
  );
}

export default App;
