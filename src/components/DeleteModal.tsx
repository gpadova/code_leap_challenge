import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setDeleteModal } from "../redux/modals/modals-slicer";
import deletePost from "../actions/requests/deletePost";

export default function DeleteModal() {
  const dispatch = useAppDispatch();
  const postId = useAppSelector((state) => state.deleted.deletedId);

  function cancelAction() {
    dispatch(setDeleteModal(false));
  }

  return (
    <>
      <ModalOverlay>
        <div className="modal-box">
          <h2>Are you sure you want to delete this item?</h2>
          <div className="button-wrapper">
            <button className="cancel" onClick={cancelAction}>
              Cancel
            </button>
            <button type="submit" onClick={() => deletePost(postId, dispatch)}>
              Delete
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
    background: #ffffff;
    width: 60%;
    height: auto;
    padding: 1rem 1rem 1rem 3rem;
    border: 1px solid #999999;
    border-radius: 16px;
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
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
    input {
      width: 90%;
      border-radius: 8px;
      height: 32px;
      border: 1px solid #777777;
      padding-left: 8px;
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
        background: #ff5151;
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
