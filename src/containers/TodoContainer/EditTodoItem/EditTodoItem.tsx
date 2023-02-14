import { TextField } from "../../../components/TextField/TextField";
import { TextArea } from "../../../components/TextArea/TextArea";
import classes from "./EditTodoItem.module.scss";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import { Button } from "../../../components/Button/Button";
import { CanvasField } from "../../../components/CanvasField/CanvasField";

export const EditTodoItem = () => {
  return (
    <div className={classes.EditTodoItem}>
      <h2>Edit Todo</h2>
      <TextField
        onInput={() => console.log("WIP")}
        value=""
        label
        labelName="Task"
        name="task"
      />
      <CheckBox value={false} label labelName="Is Done" />
      <TextArea value="213" name="description" label="Description" />
      <CanvasField />
      <div>
        <Button primary>Save</Button>
        <Button secondary>Cancel</Button>
      </div>
    </div>
  );
};
