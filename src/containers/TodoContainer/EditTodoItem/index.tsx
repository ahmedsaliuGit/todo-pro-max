import { dependencies } from "../../../dependencies";
import { withDependency } from "../../../hoc/withDependencies";
import { EditTodoItem } from "./EditTodoItem";

export default withDependency(EditTodoItem, {
  todoService: dependencies.TodoService,
});
