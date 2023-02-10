import classes from "./TodoContainer.module.scss";

export const TodoContainer = () => {
  return (
    <div className={classes.TodoItem + "flex"}>
      <div>
        <input type="checkbox" />
      </div>
      <h2>Task to do</h2>
      <div>
        <button>
          <i className="fa fa-pencil" />
        </button>
      </div>
      <div>
        <button>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};
