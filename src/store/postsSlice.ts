import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListInterface, ListItemInterface } from 'types/types';

interface InitialStateInterface {
  posts: ListInterface;
}

const initialState: InitialStateInterface = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItemInterface>) => {
      state.posts = [...state.posts, action.payload];
    },
    removeItem: (state, action: PayloadAction<ListItemInterface>) => {
      state.posts = state.posts.filter(el => el.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = postsSlice.actions;

export default postsSlice;
