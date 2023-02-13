// import classes from "./TodoContainer.module.scss";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/Todo";

export const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = () => {
    return fetch("http://localhost:3001/todos").then((response) =>
      response.json().then((data) => setTodos(data))
    );
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addToTodos = (task: string) => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({ todo: task }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchTodos());
  };

  const deleteTodo = (todoId: number) => {
    fetch("http://localhost:3001/todos", {
      method: "DELETE",
      body: JSON.stringify({ id: todoId }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchTodos());
  };

  return (
    <>
      <AddTodoItem onAddClick={addToTodos} />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDeleteTodo={deleteTodo} />
      ))}
    </>
  );
};
