import "./FilterPannel.css";
import { FaRegListAlt } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { MdOutlineAutoDelete } from "react-icons/md";
import { IToDoItem } from "../types";
import { useMemo } from "react";
import CategoriesList from "./CategoriesList";

interface Props {
  selectedFilterId: string;
  todoList: IToDoItem[];
  onSelectedFilter: (id: string) => void;
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FilterItem {
  id: string;
  icon: React.ReactNode;
  title: string;
}

interface CountFilter {
  all: number;
  completed: number;
  important: number;
  deleted: number;
}

const FilterPanelItem: FilterItem[] = [
  {
    id: "all",
    icon: <FaRegListAlt fontSize={"30px"} />,
    title: "All",
  },
  {
    id: "completed",
    icon: <GrCompliance fontSize={"30px"} />,
    title: "Completed",
  },
  {
    id: "important",
    icon: <MdOutlineNotificationImportant fontSize={"30px"} />,
    title: "Important",
  },
  {
    id: "deleted",
    icon: <MdOutlineAutoDelete fontSize={"30px"} />,
    title: "Deleted",
  },
];

const FilterPanel = ({
  selectedFilterId,
  todoList,
  onSelectedFilter,
  searchValue,
  onSearchChange,
}: Props) => {
  const countFilterforPannel = useMemo(() => {
    return todoList.reduce(
      (prev, curr) => {
        const tempCountFilter = { ...prev } as CountFilter;
        if (curr.isCompleted) {
          tempCountFilter.completed++;
        }
        if (curr.isImportant) {
          tempCountFilter.important++;
        }
        if (curr.isDeleted) {
          tempCountFilter.deleted++;
        }
        return tempCountFilter;
      },
      {
        all: todoList.length,
        completed: 0,
        important: 0,
        deleted: 0,
      } as CountFilter
    );
  }, [todoList]);

  return (
    <div className="filter-panel">
      <input
        type="text"
        className="search"
        placeholder="Search Todo..."
        onChange={onSearchChange}
        value={searchValue}
      />

      <div className="filter-item-list">
        {FilterPanelItem.map((item) => {
          return (
            <div
              className={`filter-item ${
                selectedFilterId === item.id ? "selected" : ""
              }`}
              key={item.id}
              onClick={() => onSelectedFilter(item.id)}
            >
              <div className="filter-item-top">
                {item.icon}
                <p>{countFilterforPannel[item.id as keyof CountFilter]}</p>
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      <CategoriesList />
    </div>
  );
};

export default FilterPanel;
