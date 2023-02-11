// import classes from "./TodoContainer.module.scss";
import { Button } from "../../components/Button/Button";
import TodoItem from "./TodoItem/TodoItem";
import { TextField } from "../../components/TextField/TextField";

export const TodoContainer = () => {
  const todos = ["Task to do", "Task to do 2", "Task yourself"];

  return (
    <>
      <form className="flex">
        <div className="flex-grow-1 mr-2">
          <TextField />
        </div>
        <div>
          <Button primary>Add</Button>
        </div>
      </form>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </>
  );
};
