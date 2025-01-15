import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export type TodoType = {
  id: number;
  todo: string;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoValue, setTodoValue] = useState<TodoType | null>(null);

  useEffect(() => {
    if (!localStorage) return;
    const localTodos = localStorage.getItem("todos");
    if (localTodos) setTodos(JSON.parse(localTodos).todos);
  }, []);

  function persisteDate(newList: TodoType[]) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addOrUpdateTodoHandler(newTodo: TodoType) {
    let updatedTodos;
    if (newTodo.id === -1) {
      // Add new todo
      updatedTodos = [...todos, { ...newTodo, id: todos.length }];
      setTodos(updatedTodos);
    } else {
      // Update existing todo
      updatedTodos = todos.map((todo) =>
        todo.id === newTodo.id ? newTodo : todo
      );
      setTodos(updatedTodos);
    }

    persisteDate(updatedTodos);
    setTodoValue(null); // Reset input after adding/updating
  }

  function deleteTodoHandler(index: number) {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
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
        onAddTodos={addOrUpdateTodoHandler}
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