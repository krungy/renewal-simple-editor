import { ListItemInterface } from 'types/types';

const isEmptyObject = (obj: Object): boolean => {
  return Object.entries(obj).length === 0;
};

const findParentIds = (root: ListItemInterface, targetId: string, path: string[] = []): string[] | null => {
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

const addItemDataInArray = (
  root: ListItemInterface[],
  newValues: ListItemInterface,
  idList: string[]
): ListItemInterface[] => {
  return root.map(item => {
    if (idList[0] === item.id) {
      idList.shift();
      if (idList.length < 1) {
        return { ...item, child: [...item.child, newValues] };
      }
      return { ...item, child: addItemDataInArray(item.child, newValues, idList) };
    }
    return item;
  });
};

const updateItemDataInArray = (root: ListItemInterface[], newValues: ListItemInterface): ListItemInterface[] => {
  return root.map(item => {
    if (item.id === newValues.id) {
      return { ...item, ...newValues };
    } else if (Array.isArray(item.child)) {
      return { ...item, child: updateItemDataInArray(item.child, newValues) };
    }
    return item;
  });
};

const flattenItems = (items: ListItemInterface[]): ListItemInterface[] => {
  const result: ListItemInterface[] = [];

  items.forEach(item => {
    result.push(item);
    if (item.child.length > 0) {
      result.push(...flattenItems(item.child));
    }
  });

  return result;
};

export { isEmptyObject, findParentIds, addItemDataInArray, updateItemDataInArray, flattenItems };
