import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setContent, setTitle } from "../redux/postPost/post-post-slice";
import postPosts from "../actions/requests/postPosts";

export default function ContentInput() {
  const username = useAppSelector((state) => state.username.username);
  const title = useAppSelector((state) => state.post.title);
  const content = useAppSelector((state) => state.post.content);
  const dispatch = useAppDispatch();

  return (
    <ContentInputBox>
      <h2>What’s on your mind?</h2>
      <p>Title</p>
      <input
        autoComplete="off"
        type="text"
        placeholder="Hello World"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <p>Content</p>
      <textarea
        className="content"
        placeholder="Content Here"
        value={content}
        onChange={(e) => dispatch(setContent(e.target.value))}
      />
      <div className="button-wrapper">
        <button
          type="submit"
          disabled={content.length === 0 || title.length === 0}
          onClick={() => postPosts(username, title, content, dispatch)}
        >
          Create
        </button>
      </div>
    </ContentInputBox>
  );
}

export const ContentInputBox = styled.div`
  width: 90%;
  min-height: 334px;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  font-family: "Roboto";
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-top: 24px;
    font-family: inherit;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 8px;
  }
  textarea,
  input {
    width: 90%;
    border-radius: 8px;
    height: 32px;
    border: 1px solid #777777;
    padding-left: 8px;
    font-family: "Roboto";
    font-size: 14px;
    resize: none;
  }
  .content {
    height: 74px;
  }
  .button-wrapper {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    button {
      width: 120px;
      height: 32px;
      background: #7695ec;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    button:disabled {
      background-color: #777777;
    }
  }
`;
