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
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    persisteDate(todos);
  }

  function deleteTodoHandler(index: number) {
    setTodos(
      todos.filter((todo: String, todoIndex: number) => todoIndex !== index)
    );

    persisteDate(todos);
  }

  function updateTodoHandler(index: number) {
    setTodoValue(todos[index]);
    deleteTodoHandler(index);
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
