import { dependencies } from "../../dependencies";
import { withDependency } from "../../hoc/withDependencies";
import { TodoContainer } from "./TodoContainer";

export default withDependency(TodoContainer, {
  todoService: dependencies.TodoService,
});
