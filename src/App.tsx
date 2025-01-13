import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    if (!localStorage) return;
    const localTodos = localStorage.getItem("todos");
    if (localTodos) setTodos(JSON.parse(localTodos).todos);
  }, []);

  const [todoValue, setTodoValue] = useState("");

  function persisteDate(newList: string[]) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addTodosHandler(newTodo: string) {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    persisteDate(updatedTodos);
  }

  function deleteTodoHandler(index: number) {
    const updatedTodos = todos.filter(
      (_, todoIndex: number) => todoIndex !== index
    );
    setTodos(updatedTodos);

    persisteDate(updatedTodos);
  }

  function updateTodoHandler(index: number) {
    setTodoValue(todos[index]);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        onAddTodos={addTodosHandler}
      />
      <TodoList
        onUpdateTodo={updateTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        todos={todos}
      />
    </>
  );
}

export default App;
