import styled from '@emotion/styled';
import ListItem from 'modules/components/ListItem';
import { RootState, useAppDispatch, useAppSelector } from 'store';
import { addItem } from 'store/postsSlice';
import { v4 as uuidv4 } from 'uuid';

const SideMenu = () => {
  const { posts } = useAppSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();

  const onAddClick = () => {
    const newItem = {
      id: uuidv4(),
      title: '',
      content: '',
      child: [],
    };
    dispatch(addItem(newItem));
  };

  return (
    <SideMenuStyle>
      <HeaderStyle>개인 페이지</HeaderStyle>
      <ListStyle>
        {posts.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ListStyle>
      <AddButtonStyle onClick={() => onAddClick()}>+</AddButtonStyle>
    </SideMenuStyle>
  );
};

export default SideMenu;

const SideMenuStyle = styled.div`
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
  margin: 12px 0 8px 0;
`;

const AddButtonStyle = styled.button`
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #000;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  &hover: {
    background-color: #e8e7e4;
  }
`;
