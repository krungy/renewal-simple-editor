import styled from '@emotion/styled';
import { INITAL_POST } from '../../constants';
import ListItem from 'modules/components/ListItem';
import { RootState, useAppDispatch, useAppSelector } from 'store';
import { addPost } from 'store/postsSlice';
import { flattenItems } from 'utils/lib';
import { v4 as uuidv4 } from 'uuid';

const SideMenu = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state: RootState) => state.posts);

  const onAddClick = () => {
    dispatch(addPost({ ...INITAL_POST, id: uuidv4() }));
  };

  return (
    <SideMenuStyle>
      <HeaderStyle>개인 페이지</HeaderStyle>
      <ListStyle>
        {flattenItems(posts).map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ListStyle>
      <AddButtonStyle onClick={() => onAddClick()}>+</AddButtonStyle>
    </SideMenuStyle>
  );
};

export default SideMenu;

const SideMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  left: 0;
  top: 0;
  width: 320px;
  background-color: #f9f5f1;
`;

const HeaderStyle = styled.h3`
  font-size: 12px;
  margin: 12px 8px;
  color: #8c8c8c;
`;

const ListStyle = styled.ul`
  margin: 12px 4px 8px 2px;
  padding: 0;
`;

const AddButtonStyle = styled.button`
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #000;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  :hover {
    background-color: #e8e7e4;
  }
`;
