export interface ListItemInterface {
  id: string;
  title: string;
  content: string;
  parentsId: string[];
  child: ListItemInterface[] | [];
}

export type ListInterface = ListItemInterface[] | [];

export interface ItemInterface {
  item: ListItemInterface;
}

export interface InitialStateInterface {
  posts: ListInterface;
  selectedPost: ListItemInterface | null;
}

export interface ChangePayloadInterface {
  key: string;
  data: ListInterface | ListItemInterface;
}
