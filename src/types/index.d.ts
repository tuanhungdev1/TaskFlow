export interface IToDoItem {
  id: string;
  name: string;
  isImportant: boolean;
  isCompleted: boolean;
  isDeleted: boolean;
  categoryId: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  amount: number;
  icon: React.ReactNode;
}
