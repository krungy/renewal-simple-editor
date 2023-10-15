import { ListItemInterface } from 'types/types';

export const isEmptyObject = (obj: Object): boolean => {
  return Object.entries(obj).length === 0;
};

export const findParentIds = (root: ListItemInterface, targetId: string, path: string[] = []): string[] | null => {
  if (root.id === targetId) {
    return path;
  }

  if (root.child && Array.isArray(root.child)) {
    for (let i = 0; i < root.child.length; i++) {
      const child = root.child[i];
      // const result =
      findParentIds(child, targetId, [...path, root.id]);

      // if (result) {
      //   return result;
      // }
    }
  }

  return null; // 아무것도 찾지 못한 경우
};

export const updateItemDataInArray = (list: ListItemInterface[], newValues: ListItemInterface): ListItemInterface[] => {
  return list.map(item => {
    if (item.id === newValues.id) {
      return { ...item, ...newValues };
    } else if (Array.isArray(item.child)) {
      return { ...item, child: updateItemDataInArray(item.child, newValues) };
    }
    return item;
  });
};
