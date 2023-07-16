import styled from "@emotion/styled";

const Editor = () => {
  return (
    <>
      <EditorInputStyle
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
      />
      <EditorTextareaStyle
        // name="content"
        contentEditable="true"
        placeholder="내용을 입력하세요."
        spellCheck="false"
      ></EditorTextareaStyle>
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
