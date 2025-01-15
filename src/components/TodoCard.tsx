type TodoCardProps = {
  index: number;
  onUpdateTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
  children: React.ReactNode;
};

export default function TodoCard({
  index,
  onUpdateTodo,
  onDeleteTodo,
  children,
}: TodoCardProps) {
  return (
    <li className={false ? "selectedTodo todoItem" : "todoItem"}>
      {children}
      <div className="actionContainer">
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {
            onUpdateTodo(index);
          }}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => onDeleteTodo(index)}
        ></i>
      </div>
    </li>
  );
}
