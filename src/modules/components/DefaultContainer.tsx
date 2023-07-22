import styled from '@emotion/styled';

const DefaultContainer = () => {
  return (
    <DefaultContainerStyle>
      <h2>Notion</h2>
      <div>문서를 추가하거나 선택해주세요!</div>
    </DefaultContainerStyle>
  );
};

export default DefaultContainer;

const DefaultContainerStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  > h2 {
    font-size: 36px;
  }
`;
