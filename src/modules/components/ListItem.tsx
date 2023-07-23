import styled from '@emotion/styled';
import { useAppDispatch } from 'store';
import { changeSelectedPost, removeItem } from 'store/postsSlice';
import { ListItemInterface } from 'types/types';

interface ItemInterface {
  item: ListItemInterface;
}
const ListItem = ({ item }: ItemInterface) => {
  const dispatch = useAppDispatch();

  const onItemClick = () => {
    dispatch(changeSelectedPost(item));
  };

  const onDeleteClick = () => {
    dispatch(removeItem(item));
  };

  return (
    <ListItemStyle onClick={() => onItemClick()}>
      {item.title ? item.title : '제목 없음'}
      <ListButtonStyle onClick={() => onDeleteClick()}>-</ListButtonStyle>
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
