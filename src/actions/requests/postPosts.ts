import axios from "axios";
import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { CountState } from "../../redux/username/username-slice";
import { PatchPost } from "../../protocols";
import { setContent, setTitle } from "../../redux/postPost/post-post-slice";
import { setReRenderTrigger } from "../../redux/screenReRender/screen-re-render-slice";

export default async function postPosts(
  username: string,
  title: string,
  content: string,
  dispatch: ThunkDispatch<
    {
      username: CountState;
      post: PatchPost;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>
) {
  const sentObject = {
    username,
    title,
    content,
  };

  try {
    await axios.post("https://dev.codeleap.co.uk/careers/", sentObject);
    dispatch(setTitle(""));
    dispatch(setContent(""));
    dispatch(setReRenderTrigger());
  } catch (error) {
    console.log(error);
  }
}
