import { createContext, useContext, useState, ReactNode } from "react";
import { IToDoItem } from "../types";

interface Props {
  children: ReactNode;
}

interface IAppContext {
  selectedCategoryId: string;
  setCategoryId: (id: string) => void;
  todoList: IToDoItem[];
  hanldeAddTask: (task: IToDoItem) => void;
  handleCheckedTask: (id: string) => void;
  handleUpdateTask: (task: IToDoItem) => void;
}

const AppContext = createContext<IAppContext>({
  selectedCategoryId: "",
  setCategoryId: () => {},
  todoList: [],
  hanldeAddTask: () => {},
  handleCheckedTask: () => {},
  handleUpdateTask: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<IToDoItem[]>([
    {
      id: "1",
      name: "Đi học thêm",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      categoryId: "company",
    },
    {
      id: "2",
      name: "Đi học võ",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      categoryId: "ideal",
    },
    {
      id: "3",
      name: "Đi chơi với bạn bè",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      categoryId: "personal",
    },
  ]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const setCategoryId = (id: string) => {
    setSelectedCategoryId(id);
  };

  const handleUpdateTask = (task: IToDoItem) => {
    const newTodoListUpdated = todoList.map((todo) => {
      if (todo.id === task.id) {
        return {
          ...todo,
          ...task,
        };
      } else {
        return todo;
      }
    });

    setTodoList([...newTodoListUpdated]);
  };

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

  const hanldeAddTask = (task: IToDoItem) => {
    setTodoList([
      ...todoList,
      {
        id: task.id,
        name: task.name,
        isImportant: task.isImportant,
        isCompleted: task.isCompleted,
        isDeleted: task.isDeleted,
        categoryId: task.categoryId,
      },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCategoryId,
        setCategoryId,
        todoList,
        hanldeAddTask,
        handleCheckedTask,
        handleUpdateTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
