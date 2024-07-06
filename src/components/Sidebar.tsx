import { useState } from "react";
import { IToDoItem } from "../types";
import "./Sidebar.css";

interface Props {
  onShowSidebarClick: () => void;
  onUpdateTask: (task: IToDoItem) => void;
  todoItem: IToDoItem | undefined;
}

const Sidebar = ({ onShowSidebarClick, onUpdateTask, todoItem }: Props) => {
  const [nameTask, setNameTask] = useState(todoItem?.name);
  const [isCompleted, setIsCompleted] = useState(todoItem?.isCompleted);
  const [isImportant, setIsImportant] = useState(todoItem?.isImportant);

  const handleUpdateTask = () => {
    onUpdateTask({
      ...todoItem,
      name: nameTask!,
      isCompleted: isCompleted!,
      isImportant: isImportant!,
    } as IToDoItem);
    onShowSidebarClick();
  };

  return (
    <div className="sidebar">
      <form action="" className="sb-form">
        <div className="sb-field-first">
          <label htmlFor="sb-name">Task Name</label>
          <input
            type="text"
            id="sb-name"
            value={nameTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNameTask(e.target.value);
            }}
          />
        </div>
        <div className="sb-field">
          <label htmlFor="sb-isCompeted">Is Completed?</label>
          <input
            type="checkbox"
            id="sb-isCompeted"
            checked={isCompleted}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setIsCompleted(e.target.checked);
            }}
          />
        </div>
        <div className="sb-field">
          <label htmlFor="sb-isImportant">Is Important?</label>
          <input
            type="checkbox"
            id="sb-isImportant"
            checked={isImportant}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setIsImportant(e.target.checked);
            }}
          />
        </div>
      </form>
      <div className="sb-button">
        <button onClick={handleUpdateTask}>Save</button>
        <button onClick={onShowSidebarClick}>Cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
