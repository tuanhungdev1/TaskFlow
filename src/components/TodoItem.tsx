interface Props {
  id: string;
  name: string;
  isInportant: boolean;
  isCompleted: boolean;
  onCompletedTask: (id: string) => void;
}

const TodoItem = ({
  id,
  name,
  isInportant,
  isCompleted,
  onCompletedTask,
}: Props) => {
  return (
    <div className="todo-item">
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCompletedTask(id)}
        />
        <p className="todo-item-text">{name}</p>
      </div>
      {isInportant && <p>⭐</p>}
    </div>
  );
};

export default TodoItem;
