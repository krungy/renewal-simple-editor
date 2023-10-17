import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addItemDataInArray, removeItemDataInArray, updateItemDataInArray } from 'utils/lib';
import { ListInterface, ListItemInterface } from 'types/types';

interface InitialStateInterface {
  posts: ListInterface;
  selectedPost: ListItemInterface | null;
}

interface ChangePayloadInterface {
  key: string;
  data: ListInterface | ListItemInterface;
}

const initialState: InitialStateInterface = {
  posts: [],
  selectedPost: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<ListItemInterface>) => {
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
    changePost: (state, action: PayloadAction<ListItemInterface>) => {
      const { payload } = action;

      return {
        ...state,
        posts: updateItemDataInArray(state.posts, payload),
      };
    },
    removePost: (state, action: PayloadAction<ListItemInterface>) => {
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
    changeData: (state, action: PayloadAction<ChangePayloadInterface>) => {
      const { payload } = action;
      const { key, data } = payload;

      return {
        ...state,
        [key]: data,
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

export const { addPost, changePost, removePost, changeData, setSelectedPost } = postsSlice.actions;

export default postsSlice;
