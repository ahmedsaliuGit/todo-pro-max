// import classes from "./TodoContainer.module.scss";
import TodoItem from "./TodoItem/TodoItem";

export const TodoContainer = () => {
  const todos = ["Task to do", "Task to do 2", "Task yourself"];

  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
};
