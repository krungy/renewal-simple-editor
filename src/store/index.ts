import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: initialState,
  enhancers: defaultEnhancers => [...defaultEnhancers],
});

// export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export type AppDispatch = typeof store.dispatch;

export default store;
