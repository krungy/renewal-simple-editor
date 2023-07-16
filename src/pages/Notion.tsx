import styled from "@emotion/styled";
import MainContainer from "modules/domain/MainContainer";
import SideMenu from "modules/domain/SideMenu";

const Notion = () => {
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
  font-family: "Noto Sans KR", sans-serif;
`;
