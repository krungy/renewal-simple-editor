export interface ListItemInterface {
  id: string;
  title: string;
  content: string;
  parentsId: [];
  child: ListItemInterface[] | [];
}

export type ListInterface = ListItemInterface[] | [];
