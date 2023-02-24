import { useEffect, useState } from "react";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/Todo.service";
import classes from "./StatsContainer.module.scss";

type StatsContainerPropsType = {
  todoService: TodoService;
};

export const StatsContainer = ({ todoService }: StatsContainerPropsType) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoService.getAllTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  const doneTodos = todos.filter(({ isDone }) => isDone);
  const notDoneTodos = todos.filter(({ isDone }) => !isDone);

  return (
    <div>
      <h2 className={classes.Title}>Stats</h2>
      <div className={classes.StatsBoardContainer}>
        <div className={classes.StatsBoard}>
          <h3 className={classes.StatsTitle}>Done Todo ({doneTodos.length})</h3>
          <ul>
            {doneTodos.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </div>
        <div className={classes.StatsBoard}>
          <h3 className={classes.StatsTitle}>
            Not Done ({notDoneTodos.length})
          </h3>
          <ul>
            {notDoneTodos.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
