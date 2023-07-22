export interface ListItemInterface {
  id: string;
  title: string;
  content: string;
  child: ListItemInterface[] | [];
}

export type ListInterface = ListItemInterface[] | [];
