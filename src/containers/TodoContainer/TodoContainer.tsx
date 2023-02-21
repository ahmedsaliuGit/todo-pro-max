import { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/Todo.service";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import { useAppState } from "../../hoc/useAppState";

type TodoContainerProps = {
  todoService: TodoService;
};

export const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const { appState, setAppState } = useAppState();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoFilter, setTodoFilter] = useState<string>("all");

  const fetchTodos = () => {
    return todoService.getAllTodos().then((data) => setTodos(data));
  };

  useEffect(() => {
    if (appState.editTodoId === -1) {
      fetchTodos();
    }
    fetchTodos();
  }, [appState.editTodoId]);

  const addToTodos = (task: string) => {
    todoService.addTodo(task).then(() => fetchTodos());
  };

  const editTodo = (todoId: number) => {
    setAppState({ editTodoId: todoId, isDrawerOpen: true });
  };

  const handleDoneChecked = (todoId: number, isDone: boolean) => {
    todoService.updateTodo(todoId, { isDone }).then(() => fetchTodos());
  };

  const deleteTodo = (todoId: number) => {
    todoService.deleteTodo(todoId).then(() => fetchTodos());
  };

  const buttonSelectOptions = [
    { label: "All", value: "all" },
    { label: "Done", value: "true" },
    { label: "Not Done", value: "false" },
  ];

  const handleTodoFilterChange = (value: string) => {
    setTodoFilter(value);
    todoService
      .getAllTodos({ query: { isDone: value } })
      .then((data) => setTodos(data));
  };

  return (
    <>
      <AddTodoItem onAddClick={addToTodos} />
      <div className="mt-3">
        <ButtonSelect
          options={buttonSelectOptions}
          onInput={handleTodoFilterChange}
          value={todoFilter}
        />
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onEditTodo={editTodo}
          onDoneChecked={handleDoneChecked}
          onDeleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};
