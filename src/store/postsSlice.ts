import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  posts: [];
}

const initialState: InitialStateInterface = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    test: (state, action) => {
      state = action.payload;
    },
  },
});

export const { test } = postsSlice.actions;
