import { dependencies } from "../../dependencies";
import { withDependency } from "../../hoc/withDependencies";
import { StatsContainer } from "./StatsContainer";

export default withDependency(StatsContainer, {
  todoService: dependencies.TodoService,
});
