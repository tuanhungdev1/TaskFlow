import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { IToDoItem } from "./types";
const App = () => {
  const [todoList, setTodoList] = useState<IToDoItem[]>([
    {
      id: "1",
      name: "Đi học thêm",
      isInportant: true,
      isCompleted: false,
    },
    {
      id: "2",
      name: "Đi học võ",
      isInportant: false,
      isCompleted: true,
    },
    {
      id: "3",
      name: "Đi chơi với bạn bè",
      isInportant: true,
      isCompleted: false,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckedTask = (id: string) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });

    setTodoList([...newTodoList]);
  };

  const todos = todoList.map((todo) => {
    return (
      <TodoItem
        name={todo.name}
        key={todo.id}
        isInportant={todo.isInportant}
        id={todo.id}
        isCompleted={todo.isCompleted}
        onCompletedTask={handleCheckedTask}
      />
    );
  });

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            const value = e.currentTarget.value;

            setTodoList([
              ...todoList,
              {
                id: crypto.randomUUID(),
                name: value,
                isInportant: true,
                isCompleted: false,
              },
            ]);

            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }
        }}
      />
      <div>{todos}</div>
    </div>
  );
};

export default App;
