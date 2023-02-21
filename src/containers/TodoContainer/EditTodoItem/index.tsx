import { dependencies } from "../../../dependencies";
import { withDependency } from "../../../hoc/withDependencies";
import { withSideDrawer } from "../../../hoc/withSideDrawer/withSideDrawer";
import { EditTodoItem } from "./EditTodoItem";

export default withSideDrawer(
  withDependency(EditTodoItem, {
    todoService: dependencies.TodoService,
  })
);
