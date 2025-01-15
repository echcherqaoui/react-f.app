import { TodoType } from "../App";
import TodoCard from "./TodoCard";

type TodoListProps = {
  onUpdateTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
  todos: TodoType[];
};

export default function TodoList(props: TodoListProps) {
  return (
    <ul className="main">
      {props.todos.map((todo, todoIndex) => (
        <TodoCard
          index={todoIndex}
          onDeleteTodo={props.onDeleteTodo}
          onUpdateTodo={props.onUpdateTodo}
          key={todoIndex}
        >
          <p>{todo.todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
