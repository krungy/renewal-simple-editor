import styled from '@emotion/styled';
import { useState } from 'react';
import { RootState, useAppSelector } from 'store';
import { ListItemInterface } from 'types/types';

const Editor = () => {
  const { selectedPost } = useAppSelector((state: RootState) => state.posts);
  const [editPost, setEditPost] = useState<ListItemInterface | null>(selectedPost as ListItemInterface | null);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (editPost) {
      setEditPost({ ...editPost, title: e.target.value });
    }
  };

  const onChangeContent = (e: React.FormEvent<HTMLDivElement>): void => {
    if (editPost) {
      setEditPost({ ...editPost, content: e.currentTarget.textContent || '' });
    }
  };

  return (
    <>
      <EditorInputStyle
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        value={editPost ? editPost.title : ''}
        onChange={e => onChangeTitle(e)}
      />
      <EditorTextareaStyle
        contentEditable="true"
        placeholder="내용을 입력하세요."
        spellCheck="false"
        onInput={e => onChangeContent(e)}
      />
    </>
  );
};

export default Editor;

const EditorInputStyle = styled.input`
  border: none;
  height: 24px;
  padding: 12px;
  font-size: 24px;
  font-weight: 700;
  outline: none;
`;

const EditorTextareaStyle = styled.div`
  padding: 12px;
  font-size: 16px;
  border: none;
  resize: none;
  overflow-y: auto;
  outline: none;
  height: 90vh;
`;
