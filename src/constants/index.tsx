import { AiOutlineProfile } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { LuPlane } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { CategoryItem } from "../types";

export const CatigoriesListItem: CategoryItem[] = [
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
