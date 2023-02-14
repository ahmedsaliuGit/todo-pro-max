// import classes from "./TodoContainer.module.scss";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/Todo.service";

type TodoContainerProps = {
  todoService: TodoService;
};

export const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = () => {
    return todoService.getAllTodos().then((data) => setTodos(data));
  };

  useEffect(() => {
    fetchTodos();
  });

  const addToTodos = (task: string) => {
    todoService.addTodo(task).then(() => fetchTodos());
  };

  const deleteTodo = (todoId: number) => {
    todoService.deleteTodo(todoId).then(() => fetchTodos());
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
