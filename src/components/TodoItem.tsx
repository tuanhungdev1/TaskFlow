interface Props {
  name: string;
  isInportant: boolean;
}

const TodoItem = ({ name, isInportant }: Props) => {
  return (
    <div className="todo-item">
      <p className="todo-item-text">{name}</p>
      {isInportant && <p>👿</p>}
    </div>
  );
};

export default TodoItem;
