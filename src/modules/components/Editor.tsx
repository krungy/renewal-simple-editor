import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useTimeoutFn from 'hooks/useTimeoutFn';
import { RootState, useAppDispatch, useAppSelector } from 'store';
import { changePost } from 'store/postsSlice';
import { ListItemInterface } from 'types/types';
import { TIMEOUT_MS } from '../../constants';

const Editor = () => {
  const dispatch = useAppDispatch();
  const { selectedPost } = useAppSelector((state: RootState) => state.posts);
  const [editPost, setEditPost] = useState<ListItemInterface | null>(selectedPost as ListItemInterface | null);

  const handleSave = (): void => {
    editPost && dispatch(changePost(editPost));
  };

  const [run] = useTimeoutFn(() => {
    handleSave();
  }, TIMEOUT_MS);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (editPost) {
      setEditPost({ ...editPost, title: e.target.value });
      run();
    }
  };

  const onChangeContent = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (editPost) {
      setEditPost({ ...editPost, content: e.currentTarget.value || '' });
      run();
    }
  };

  useEffect(() => {
    if (selectedPost && editPost && selectedPost.id === editPost.id) {
      return;
    }
    setEditPost(selectedPost);
  }, [selectedPost, editPost]);

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
        placeholder="내용을 입력하세요."
        spellCheck="false"
        value={editPost ? editPost.content : ''}
        onChange={e => onChangeContent(e)}
      />
    </>
  );
};

export default Editor;

const EditorInputStyle = styled.input`
  border: none;
  width: 100%;
  height: 24px;
  padding: 12px;
  font-size: 24px;
  font-weight: 700;
  outline: none;
`;

const EditorTextareaStyle = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: none;
  resize: none;
  overflow-y: auto;
  outline: none;
  height: 90vh;
  width: 100%;
`;
