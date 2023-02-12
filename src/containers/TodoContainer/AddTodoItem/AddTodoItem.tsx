import { FormEventHandler, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { TextField } from "../../../components/TextField/TextField";
import { useAutoFocus } from "../../../customHooks/useAutoFocus";

type AddTodoItemProps = {
  onAddClick: (task: string) => void;
};

export const AddTodoItem = ({ onAddClick }: AddTodoItemProps) => {
  const textFieldFocus = useAutoFocus();

  const [task, setTask] = useState<string>("");

  const onTaskFieldChange = (value: string) => {
    setTask(value);
  };

  const handleAddSubmited: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddClick(task);
    setTask("");
    textFieldFocus.current?.focus();
  };

  return (
    <form className="flex" onSubmit={handleAddSubmited}>
      <div className="flex-grow-1 mr-2">
        <TextField
          value={task}
          onInput={onTaskFieldChange}
          ref={textFieldFocus}
        />
      </div>
      <div>
        <Button type="submit" primary>
          Add
        </Button>
      </div>
    </form>
  );
};
