import styled from "styled-components";
import { TbTrashXFilled } from "react-icons/tb";
import { HiPencilSquare } from "react-icons/hi2";
import { GetPost } from "../protocols";
import { minutesBetween } from "../assets/minutesBetween";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import EditModal from "./EditModal";
import { setDeleteModal, setEditModal } from "../redux/modals/modals-slicer";
import { setPatchPostId } from "../redux/patchPost/patch-post-slicer";
import DeleteModal from "./DeleteModal";
import { setDeletedId } from "../redux/deletePost/delete-post-slicer";

export default function PostBlock({
  content,
  created_datetime,
  title,
  username,
  id,
}: GetPost) {
  const dispatch = useAppDispatch();
  const contentOwner = useAppSelector((state) => state.username.username);
  const editModalState = useAppSelector((state) => state.modals.editModal);
  const deleteModalState = useAppSelector((state) => state.modals.deleteModal);

  function editPost() {
    dispatch(setEditModal(true));
    dispatch(setPatchPostId(id));
  }

  function deletePost() {
    dispatch(setDeleteModal(true));
    dispatch(setDeletedId(id));
  }

  return (
    <Box>
      {editModalState && <EditModal />}
      {deleteModalState && <DeleteModal />}
      <TitleHeader>
        <h2>{title}</h2>
        <div>
          {contentOwner === username && (
            <>
              <TbTrashXFilled className="icon1" onClick={deletePost} />
              <HiPencilSquare className="icon2" onClick={editPost} />
            </>
          )}
        </div>
      </TitleHeader>
      <PostContent>
        <div className="owner-and-time">
          <p className="username">@{username}</p>
          <p>{minutesBetween(created_datetime)}</p>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
      </PostContent>
    </Box>
  );
}

const Box = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
`;
const TitleHeader = styled.div`
  background: #7695ec;
  color: #ffffff;
  width: 100%;
  height: 70px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 25px;

  .icon1 {
    padding-right: 10px;
  }
  .icon1:hover,
  .icon2:hover {
    cursor: grab;
  }
  h2 {
    padding-left: 1em;
    font-size: 22px;
    font-family: "Roboto";
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 30px;
    }
  }
`;

const PostContent = styled.div`
  width: 100%;
  height: auto;
  .owner-and-time {
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
    p {
      color: #777777;
      font-size: 18px;
      font-family: "Roboto";
    }
    .username {
      font-weight: 700;
    }
  }
  .content {
    margin: 1em 2em;
    font-size: 18px;
    font-family: "Roboto";
    p {
      text-align: justify;
    }
  }
  @media (max-width: 480px) {
    .owner-and-time {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
