import styled from '@emotion/styled';
import { DEPTH_LIMIT, INITAL_POST } from '../../constants';
import { useAppDispatch } from 'store';
import { setSelectedPost, removeItem, addItem } from 'store/postsSlice';
import { ListItemInterface } from 'types/types';
import { v4 as uuidv4 } from 'uuid';
import { handleAlert } from 'utils/lib';

interface ItemInterface {
  item: ListItemInterface;
}

const ListItem = ({ item }: ItemInterface) => {
  const dispatch = useAppDispatch();

  const onItemClick = () => {
    dispatch(setSelectedPost(item));
  };

  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addItem({ ...INITAL_POST, id: uuidv4(), parentsId: [...item.parentsId, item.id] }));
  };

  const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const alertType = item.child.length > 0 ? 'depthDelete' : 'delete';
    if (handleAlert(alertType)) {
      dispatch(removeItem(item));
    }
  };

  return (
    <ListItemStyle depth={item.parentsId.length} onClick={() => onItemClick()}>
      <TitleStyle>{item.title ? item.title : '제목 없음'}</TitleStyle>
      <ButtonWrapper>
        {item.parentsId.length < DEPTH_LIMIT && <ListButtonStyle onClick={e => onAddClick(e)}>+</ListButtonStyle>}
        <ListButtonStyle onClick={e => onDeleteClick(e)}>-</ListButtonStyle>
      </ButtonWrapper>
    </ListItemStyle>
  );
};

export default ListItem;

const TitleStyle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const ListButtonStyle = styled.button`
  display: none;
  width: 22px;
  cursor: pointer;
`;

const ListItemStyle = styled.div<{ depth: number }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  padding-left: ${props => props.depth * 20}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: background-color 0.3s;

  :hover {
    background-color: #ebe6e2;
  }
  :hover ${ListButtonStyle} {
    display: block;
  }
`;
