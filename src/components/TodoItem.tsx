interface Props {
  name: string;
}

const TodoItem = ({ name }: Props) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default TodoItem;
