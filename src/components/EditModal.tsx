import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setEditModal } from "../redux/modals/modals-slicer";
import {
  setPatchContent,
  setPatchTitle,
} from "../redux/patchPost/patch-post-slicer";
import patchPost from "../actions/requests/patchPost";

export default function EditModal() {
  const dispatch = useAppDispatch();
  const patchContent = useAppSelector((state) => state.patch.content);
  const patchTitle = useAppSelector((state) => state.patch.title);
  const postId = useAppSelector((state) => state.patch.id);

  function cancelAction() {
    dispatch(setEditModal(false));
  }

  return (
    <>
      <ModalOverlay>
        <div className="modal-box">
          <h2>Edit Item</h2>
          <p>Title</p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Hello World"
            value={patchTitle}
            onChange={(e) => dispatch(setPatchTitle(e.target.value))}
          />
          <p>Content</p>
          <textarea
            className="content"
            placeholder="Content here"
            value={patchContent}
            onChange={(e) => dispatch(setPatchContent(e.target.value))}
          />
          <div className="button-wrapper">
            <button className="cancel" onClick={cancelAction}>
              Cancel
            </button>
            <button
              type="submit"
              disabled={patchContent.length === 0 || patchTitle.length === 0}
              onClick={() =>
                patchPost(postId, patchTitle, patchContent, dispatch)
              }
            >
              Save
            </button>
          </div>
        </div>
      </ModalOverlay>
    </>
  );
}

const ModalOverlay = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-box {
    display: block;
    background: white;
    width: 60%;
    height: auto;
    padding: 1rem;
    border-radius: 1rem;
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
    }
    p {
      font-size: 16px;
      font-weight: 400;
      margin-top: 24px;
      margin-bottom: 8px;
    }
    input,
    textarea {
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
        background: #47b960;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        margin-bottom: 10px;
        margin-left: 10px;
      }
      button:disabled {
        background-color: #777777;
      }
      .cancel {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
      }
    }
  }
`;
