export interface ListItemInterface {
  id: string;
  title: string;
  content: string;
  parentsId: string[];
  child: ListItemInterface[] | [];
}

export type ListInterface = ListItemInterface[] | [];
