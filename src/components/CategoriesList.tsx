import { AiOutlineProfile } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { LuPlane } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import "./CategoriesList.css";

interface CategoryItem {
  id: string;
  title: string;
  amount: number;
  icon: React.ReactNode;
}

const CatigoriesListItem: CategoryItem[] = [
  {
    id: "personal",
    title: "Personal",
    amount: 2,
    icon: <AiOutlineProfile size={30} />,
  },
  {
    id: "company",
    title: "Company",
    amount: 2,
    icon: <BsBuilding size={30} />,
  },
  {
    id: "travel",
    title: "Travel",
    amount: 2,
    icon: <LuPlane size={30} />,
  },
  {
    id: "ideal",
    title: "Ideal",
    amount: 2,
    icon: <LuMessageCircle size={30} />,
  },
];

const CategoriesList = () => {
  return (
    <div className="category">
      <span className="category-title">Categories</span>
      <div className="category-container">
        {CatigoriesListItem.map((item) => {
          return (
            <div key={item.id} className="category-list">
              <div className="category-name">
                {item.icon} <span>{item.title}</span>
              </div>

              <span className="category-amount">{item.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
