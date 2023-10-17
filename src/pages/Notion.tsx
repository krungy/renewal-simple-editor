import styled from '@emotion/styled';
import { POSTS_STORAGE_KEY } from '../constants';
import MainContainer from 'modules/domain/MainContainer';
import SideMenu from 'modules/domain/SideMenu';
import { useEffect, useRef } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store';
import { getLocalStorage, setLocalStorage } from 'utils/lib';
import { changeData } from 'store/postsSlice';

const Notion = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state: RootState) => state.posts);
  const dispatchRef = useRef(dispatch);

  useEffect(() => {
    const savedData = getLocalStorage(POSTS_STORAGE_KEY);

    if (savedData.length > 0) {
      dispatchRef.current(changeData({ key: 'posts', data: savedData }));
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setLocalStorage(POSTS_STORAGE_KEY, posts);
    }
  }, [posts]);

  return (
    <NotionStyle>
      <SideMenu />
      <MainContainer />
    </NotionStyle>
  );
};

export default Notion;

const NotionStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: 'Noto Sans KR', sans-serif;
`;
