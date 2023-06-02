export interface TodoSubItem {
  id?: number;
  name: string;
  description: string;

  dateAdded: Date;
  dateCompleted?: Date;
  priority: number;
}
