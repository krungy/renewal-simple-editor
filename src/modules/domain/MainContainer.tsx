import styled from '@emotion/styled';
import DefaultContainer from 'modules/components/DefaultContainer';
import Editor from 'modules/components/Editor';
import { isEmptyObject } from 'modules/utils/lib';
import { RootState, useAppSelector } from 'store';

const MainContainer = () => {
  const { selectedPost } = useAppSelector((state: RootState) => state.posts);

  return <MainContainerStyle>{isEmptyObject(selectedPost) ? <DefaultContainer /> : <Editor />}</MainContainerStyle>;
};

export default MainContainer;

const MainContainerStyle = styled.div`
  padding: 12px;
  width: 100%;
`;
