// import classes from "./TodoContainer.module.scss";
import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";

export const TodoContainer = () => {
  const [todos, setTodos] = useState<string[]>([
    "Task to do",
    "Task to do 2",
    "Task yourself",
  ]);

  const addToTodos = (task: string) => {
    setTodos((prevTodos) => [...prevTodos, task]);
  };

  return (
    <>
      <AddTodoItem onAddClick={addToTodos} />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </>
  );
};
