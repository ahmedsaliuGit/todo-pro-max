import { HttpAdapter } from "../adapters/HttpAdapter";
import { Todo } from "../models/Todo";

export class TodoService {
  private readonly http: HttpAdapter;

  constructor(httpAdapter: HttpAdapter) {
    this.http = httpAdapter;
  }

  getTodo(todoId: number) {
    return this.http.get<Todo>("/todos/" + todoId);
  }

  getAllTodos(params?: { query: { isDone: string } }) {
    return this.http.get<Todo[]>("/todos", params);
  }

  addTodo(task: string) {
    return this.http.post("/todos", { todo: task });
  }

  updateTodo(todoId: number, task: Partial<Todo>) {
    return this.http.patch<Partial<Todo>>("/todos/" + todoId, task);
  }

  deleteTodo(todoId: number) {
    return this.http.delete("/todos", { id: todoId });
  }
}
