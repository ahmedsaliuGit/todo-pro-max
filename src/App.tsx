import React from "react";
import { TodoContainer } from "./containers/TodoContainer/TodoContainer";
import "./styles/_base.scss";
import classes from "./App.module.scss";
import Header from "./_partials/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className={classes.TodoList + " mr-auto ml-auto"}>
        <TodoContainer />
      </div>
    </>
  );
}

export default App;
