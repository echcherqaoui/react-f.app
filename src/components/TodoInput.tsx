import { Dispatch, SetStateAction } from "react";
import { TodoType } from "../App";

type TodoInputProps = {
  todoValue: TodoType | null;
  setTodoValue: Dispatch<SetStateAction<TodoType | null>>;
  onAddTodos: (newTodo: TodoType) => void;
};

export default function TodoInput({
  todoValue,
  setTodoValue,
  onAddTodos,
}: TodoInputProps) {
  function changeValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue((prev) => ({
      id: prev?.id ?? -1, // Default to -1 for new todos
      todo: event.target.value,
    }));
  }

  return (
    <header>
      <input
        value={todoValue?.todo || ""}
        onChange={changeValueHandler}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          if (todoValue?.todo.trim()) {
            onAddTodos(todoValue);
          }
        }}
      >
        {todoValue?.id === -1 ? "Add" : "Update"}
      </button>
    </header>
  );
}
