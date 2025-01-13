import TodoCard from "./TodoCard";

type TodoListProps = {
  onUpdateTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
  todos: string[];
};

export default function TodoList(props: TodoListProps) {
  return (
    <ul className="main">
      {props.todos.map((todo, todoIndex) => (
        <TodoCard index={todoIndex} {...props} key={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
