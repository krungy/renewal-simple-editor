import styled from "@emotion/styled";
import { ListItemInterface } from "types/types";

const ListItem = ({ id, title }: ListItemInterface) => {
  return (
    <ListItemStyle>
      {id}
      {title ? title : "제목 없음"}
      <ListButtonStyle data-id="deleteDocument">-</ListButtonStyle>
    </ListItemStyle>
  );
};

export default ListItem;

const ListItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
  padding: 0 8px;
  &hover: {
    background-color: #e8e7e4;
  }
`;

const ListButtonStyle = styled.button`
  cursor: pointer;
`;
