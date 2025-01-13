import { ReactNode } from "react";
type TodoCardProps = {
  index: number;
  onDeleteTodo: (index: number) => void;
  onUpdateTodo: (index: number) => void;
  children: ReactNode;
};
export default function TodoCard({
  index,
  onUpdateTodo,
  onDeleteTodo,
  children,
}: TodoCardProps) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button onClick={() => onUpdateTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => onDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
