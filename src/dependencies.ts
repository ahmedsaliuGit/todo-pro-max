import { HttpAdapter } from "./adapters/HttpAdapter";
import { TodoService } from "./services/Todo.service";

class DependencyContainer {
  private _dependency = {};

  add<T>(key: symbol, dependency: T) {
    Object.defineProperty(this._dependency, key, {
      value: dependency,
    });
  }

  get<T>(key: symbol): T {
    return Object.getOwnPropertyDescriptor(this._dependency, key)?.value;
  }
}

const httpAdapter = new HttpAdapter({ baseUrl: "http://localhost:3001" });
const todoService = new TodoService(httpAdapter);

const dependencies = {
  TodoService: Symbol("TodoService"),
};

const container = new DependencyContainer();
container.add(dependencies.TodoService, todoService);

export { dependencies, container };
