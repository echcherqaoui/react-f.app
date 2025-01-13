import { Dispatch, SetStateAction } from "react";

type TodoInputProps = {
  todoValue: string;
  setTodoValue: Dispatch<SetStateAction<string>>;
  onAddTodos: (newTodo: string) => void;
};

export default function TodoInput({
  todoValue,
  setTodoValue,
  onAddTodos,
}: TodoInputProps) {
  function changeValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(event.target.value);
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={changeValueHandler}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          onAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
