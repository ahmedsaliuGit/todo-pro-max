import { Button } from "../../../components/Button/Button";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import { Todo } from "../../../models/Todo";
import classes from "./TodoItem.module.scss";

interface PropTypes {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, onDeleteTodo }: PropTypes) => {
  return (
    <div className={classes.TodoItem + " flex"}>
      <div>
        <CheckBox />
      </div>
      <p className="mr-auto ml-2">{todo.task}</p>
      <div>
        <Button>
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
