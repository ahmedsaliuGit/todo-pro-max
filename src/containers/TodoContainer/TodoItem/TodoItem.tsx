import { Button } from "../../../components/Button/Button";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import { Todo } from "../../../models/Todo";
import classes from "./TodoItem.module.scss";

interface PropTypes {
  todo: Todo;
  onEditTodo: (todoId: number) => void;
  onDeleteTodo: (id: number) => void;
  onDoneChecked: (id: number, isDone: boolean) => void;
}

const TodoItem = ({
  todo,
  onDeleteTodo,
  onEditTodo,
  onDoneChecked,
}: PropTypes) => {
  return (
    <div className={classes.TodoItem + " flex"}>
      <div>
        <CheckBox
          value={todo.isDone}
          onInput={(value) => onDoneChecked(todo.id, value)}
        />
      </div>
      <p className={`mr-auto ml-2 ${todo.isDone && classes.TodoIsDone}`}>
        {todo.task}
      </p>
      <div>
        <Button onClick={() => onEditTodo(todo.id)}>
          <i className="fa fa-pencil" />
        </Button>
      </div>
      <div className="ml-2">
        <Button
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          <i className="fa fa-trash" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
