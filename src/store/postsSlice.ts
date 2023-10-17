import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addItemDataInArray, removeItemDataInArray, updateItemDataInArray } from 'utils/lib';
import { ListInterface, ListItemInterface } from 'types/types';

interface InitialStateInterface {
  posts: ListInterface;
  selectedPost: ListItemInterface | null;
}

const initialState: InitialStateInterface = {
  posts: [],
  selectedPost: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItemInterface>) => {
      const { payload } = action;
      if (payload.parentsId.length > 0) {
        return {
          ...state,
          posts: addItemDataInArray(state.posts, payload, [...payload.parentsId]),
        };
      }
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    },
    changeItem: (state, action: PayloadAction<ListItemInterface>) => {
      const { payload } = action;

      return {
        ...state,
        posts: updateItemDataInArray(state.posts, payload),
      };
    },
    removeItem: (state, action: PayloadAction<ListItemInterface>) => {
      const { payload } = action;

      if (payload.parentsId.length > 0) {
        return {
          ...state,
          posts: removeItemDataInArray(state.posts, payload, [...payload.parentsId]),
        };
      }

      const selectedPost = state.selectedPost && state.selectedPost.id === payload.id ? null : state.selectedPost;

      return {
        ...state,
        posts: state.posts.filter(el => el.id !== payload.id),
        selectedPost,
      };
    },
    setSelectedPost: (state, action: PayloadAction<ListItemInterface>) => {
      const { payload } = action;

      return {
        ...state,
        selectedPost: payload,
      };
    },
  },
});

export const { addItem, changeItem, removeItem, setSelectedPost } = postsSlice.actions;

export default postsSlice;
