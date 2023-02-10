import React from "react";
import { TodoContainer } from "./containers/TodoContainer/TodoContainer";
import "./styles/_base.scss";
import Header from "./_partials/Header/Header";

function App() {
  return (
    <>
      <Header />
      <TodoContainer />
    </>
  );
}

export default App;
