import { TextField } from "../../../components/TextField/TextField";
import { TextArea } from "../../../components/TextArea/TextArea";
import classes from "./EditTodoItem.module.scss";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import { Button } from "../../../components/Button/Button";
import { CanvasField } from "../../../components/CanvasField/CanvasField";
import { useEffect, useState } from "react";
import { TodoService } from "../../../services/Todo.service";

type EditTodoItemPropsType = {
  todoId: number;
  onClose: () => void;
  todoService: TodoService;
  onSave: () => void;
};

type TodoState = {
  task: string;
  description: string;
  handNotes: string;
  isDone: boolean;
};

export const EditTodoItem = ({
  onClose,
  todoId,
  todoService,
  onSave,
}: EditTodoItemPropsType) => {
  const [todo, setTodo] = useState<TodoState>({
    task: "",
    description: "",
    handNotes: "",
    isDone: false,
  });

  useEffect(() => {
    todoService.getTodo(todoId).then((todo) => {
      setTodo(todo);
    });
  }, [todoId, todoService]);

  const saveButtonClicked = () => {
    todoService.updateTodo(todoId, todo).then(() => {
      onSave();
    });
  };

  const cancelButtonClicked = () => onClose();

  const onFormChanged = (updatedState: Partial<TodoState>) => {
    setTodo((currentState) => ({
      ...currentState,
      ...updatedState,
    }));
  };

  return (
    <div className={classes.EditTodoItem}>
      <h2>Edit Todo</h2>
      <TextField
        onInput={(value) => onFormChanged({ task: value })}
        value={todo.task}
        label
        labelName="Task"
        name="task"
      />
      <CheckBox
        value={todo.isDone}
        label
        labelName="Is Done"
        onInput={(value) => onFormChanged({ isDone: value })}
      />
      <TextArea
        value={todo.description}
        name="description"
        label="Description"
        onInput={(value) => onFormChanged({ description: value })}
      />
      <CanvasField label="Hand Notes" value={todo.handNotes} />
      <div>
        <Button primary onClick={saveButtonClicked}>
          Save
        </Button>
        <Button secondary onClick={cancelButtonClicked}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
