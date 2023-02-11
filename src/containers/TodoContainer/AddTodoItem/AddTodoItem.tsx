import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { TextField } from "../../../components/TextField/TextField";

type AddTodoItemProps = {
  onAddClick: (task: string) => void;
};

export const AddTodoItem = ({ onAddClick }: AddTodoItemProps) => {
  const [task, setTask] = useState<string>("");

  const onTaskFieldChange = (value: string) => {
    setTask(value);
  };

  const handleAddClick = () => {
    onAddClick(task);
    setTask("");
  };

  return (
    <form className="flex">
      <div className="flex-grow-1 mr-2">
        <TextField value={task} onInput={onTaskFieldChange} />
      </div>
      <div>
        <Button onClick={handleAddClick} primary>
          Add
        </Button>
      </div>
    </form>
  );
};
