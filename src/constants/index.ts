import { ListItemInterface } from 'types/types';

const INITAL_POST: ListItemInterface = {
  id: '',
  title: '',
  content: '',
  parentsId: [],
  child: [],
};

const TIMEOUT_MS = 1000;

const DEPTH_LIMIT = 3;

const POSTS_STORAGE_KEY = 'saved_posts';

export { INITAL_POST, TIMEOUT_MS, DEPTH_LIMIT, POSTS_STORAGE_KEY };
