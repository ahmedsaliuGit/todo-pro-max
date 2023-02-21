import { TextField } from "../../../components/TextField/TextField";
import { TextArea } from "../../../components/TextArea/TextArea";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import { Button } from "../../../components/Button/Button";
import { CanvasField } from "../../../components/CanvasField/CanvasField";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../../../services/Todo.service";
import { useAppState } from "../../../hoc/useAppState";

type EditTodoItemPropsType = {
  todoService: TodoService;
};

type TodoState = {
  task: string;
  description: string;
  handNotes: string;
  isDone: boolean;
};

export const EditTodoItem = ({ todoService }: EditTodoItemPropsType) => {
  const { appState, setAppState } = useAppState();
  const [todo, setTodo] = useState<TodoState>({
    task: "",
    description: "",
    handNotes: "",
    isDone: false,
  });

  useEffect(() => {
    todoService.getTodo(appState.editTodoId).then((todo) => {
      setTodo(todo);
    });
  }, [appState.editTodoId, todoService]);

  const saveButtonClicked = () => {
    todoService.updateTodo(appState.editTodoId, todo).then(() => {
      setAppState({ ...appState, isDrawerOpen: false });
    });
  };

  const cancelButtonClicked = () =>
    setAppState({ ...appState, isDrawerOpen: false });

  const onFormChanged = (updatedState: Partial<TodoState>) => {
    setTodo((currentState) => ({
      ...currentState,
      ...updatedState,
    }));
  };

  const onTaskChanged = useCallback(
    (value: string) => onFormChanged({ task: value }),
    []
  );

  const onDoneChanged = useCallback(
    (value: boolean) => onFormChanged({ isDone: value }),
    []
  );

  const onDescriptionChanged = useCallback(
    (value: string) => onFormChanged({ description: value }),
    []
  );

  const onHandNoteChanged = useCallback(
    (value: string) => onFormChanged({ handNotes: value }),
    []
  );

  return (
    <div>
      <h2>Edit Todo</h2>
      <TextField
        onInput={onTaskChanged}
        value={todo.task}
        label
        labelName="Task"
        name="task"
      />
      <CheckBox
        value={todo.isDone}
        label
        labelName="Is Done"
        onInput={onDoneChanged}
      />
      <TextArea
        value={todo.description}
        name="description"
        label="Description"
        onInput={onDescriptionChanged}
      />
      <CanvasField
        label="Hand Notes"
        value={todo.handNotes}
        onInput={onHandNoteChanged}
      />
      <div className="flex mt-2">
        <Button
          className="flex-grow-1 mr-2"
          primary
          onClick={saveButtonClicked}
        >
          Save
        </Button>
        <Button className="flex-grow-1" secondary onClick={cancelButtonClicked}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
