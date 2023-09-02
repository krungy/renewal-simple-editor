import styled from '@emotion/styled';
import DefaultContainer from 'modules/components/DefaultContainer';
import Editor from 'modules/components/Editor';
import { RootState, useAppSelector } from 'store';

const MainContainer = () => {
  const { selectedPost } = useAppSelector((state: RootState) => state.posts);

  return <MainContainerStyle>{selectedPost ? <Editor /> : <DefaultContainer />}</MainContainerStyle>;
};

export default MainContainer;

const MainContainerStyle = styled.div`
  padding: 12px;
  width: 100%;
`;
