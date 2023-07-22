import styled from '@emotion/styled';
import DefaultContainer from 'modules/components/DefaultContainer';
import Editor from 'modules/components/Editor';

const MainContainer = () => {
  return (
    <MainContainerStyle>
      {/* <DefaultContainer /> */}
      <Editor />
    </MainContainerStyle>
  );
};

export default MainContainer;

const MainContainerStyle = styled.div`
  padding: 12px;
  width: 100%;
`;
