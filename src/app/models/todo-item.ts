import { TodoSubItem } from './todo-subitem';

export interface TodoItem {
  id?: number;
  name: string;
  description: string;
  isComplete: boolean;

  todoSubItems?: TodoSubItem[];
}
