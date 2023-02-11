import { Button } from "../../../components/Button/Button";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import classes from "./TodoItem.module.scss";

interface PropTypes {
  todo: string;
}

const TodoItem = ({ todo }: PropTypes) => {
  return (
    <div className={classes.TodoItem + " flex"}>
      <div>
        <CheckBox />
      </div>
      <p className="mr-auto ml-2">{todo}</p>
      <div>
        <Button>
          <i className="fa fa-pencil" />
        </Button>
      </div>
      <div className="ml-2">
        <Button>
          <i className="fa fa-trash" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
