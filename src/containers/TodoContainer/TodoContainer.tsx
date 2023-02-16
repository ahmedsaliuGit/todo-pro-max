// import classes from "./TodoContainer.module.scss";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/Todo.service";
import EditTodoItem from "./EditTodoItem";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";

type TodoContainerProps = {
  todoService: TodoService;
};

export const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selected, setSelected] = useState<number>(-1);
  const [todoFilter, setTodoFilter] = useState<string>("all");

  const fetchTodos = () => {
    return todoService.getAllTodos().then((data) => setTodos(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addToTodos = (task: string) => {
    todoService.addTodo(task).then(() => fetchTodos());
  };

  const editTodo = (todoId: number) => {
    setSelected(todoId);
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

  const closeDrawer = () => {
    fetchTodos();
    setSelected(-1);
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
      {selected !== -1 && (
        <EditTodoItem
          todoId={selected}
          onClose={closeDrawer}
          onSave={closeDrawer}
        />
      )}
    </>
  );
};
