import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    removeItem: (state, action: PayloadAction<ListItemInterface>) => {
      return {
        ...state,
        posts: state.posts.filter(el => el.id !== action.payload.id),
        selectedPost: null,
      };
    },
    changeSelectedPost: (state, action: PayloadAction<ListItemInterface>) => {
      return {
        ...state,
        selectedPost: action.payload,
      };
    },
  },
});

export const { addItem, removeItem, changeSelectedPost } = postsSlice.actions;

export default postsSlice;
