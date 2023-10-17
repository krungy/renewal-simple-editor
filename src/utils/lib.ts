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
      findParentIds(child, targetId, [...path, root.id]);
    }
  }

  return null;
};

const addItemDataInArray = (
  root: ListItemInterface[],
  targetValue: ListItemInterface,
  idList: string[]
): ListItemInterface[] => {
  return root.map(item => {
    if (idList[0] === item.id) {
      idList.shift();
      if (idList.length < 1) {
        return { ...item, child: [...item.child, targetValue] };
      }
      return { ...item, child: addItemDataInArray(item.child, targetValue, idList) };
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

const removeItemDataInArray = (
  root: ListItemInterface[],
  targetValue: ListItemInterface,
  idList: string[]
): ListItemInterface[] => {
  return root.map(item => {
    if (idList[0] === item.id) {
      idList.shift();
      if (idList.length < 1) {
        const updatedChild = item.child.filter(child => child.id !== targetValue.id);
        return { ...item, child: updatedChild };
      }
      return { ...item, child: removeItemDataInArray(item.child, targetValue, idList) };
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

const handleAlert = (type: string) => {
  let msg = '';

  if (type === 'delete') {
    msg = '정말 삭제하시겠습니까?';
  } else if (type === 'depthDelete') {
    msg = '해당 항목을 지우면, 하위 항목의 데이터도 삭제됩니다.';
  }

  return window.confirm(msg);
};

const setLocalStorage = (key: string, data: any): void => {
  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  } catch (e) {
    console.error(e);
  }
};

const getLocalStorage = (key: string): any | undefined => {
  try {
    const targetData = localStorage.getItem(key);

    return targetData ? JSON.parse(targetData) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export {
  isEmptyObject,
  findParentIds,
  addItemDataInArray,
  updateItemDataInArray,
  removeItemDataInArray,
  flattenItems,
  handleAlert,
  setLocalStorage,
  getLocalStorage,
};
