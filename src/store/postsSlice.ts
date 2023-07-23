import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListInterface, ListItemInterface } from 'types/types';

interface InitialStateInterface {
  posts: ListInterface;
  selectedPost: ListItemInterface | {};
}

const initialState: InitialStateInterface = {
  posts: [],
  selectedPost: {},
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
    changeSelectedPost: (state, action: PayloadAction<ListItemInterface>) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { addItem, removeItem, changeSelectedPost } = postsSlice.actions;

export default postsSlice;
