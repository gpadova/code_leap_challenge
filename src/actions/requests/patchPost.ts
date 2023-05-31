import axios from "axios";
import { PatchPost } from "../../protocols";
import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { InitialState, setEditModal } from "../../redux/modals/modals-slicer";
import {
  setPatchContent,
  setPatchTitle,
} from "../../redux/patchPost/patch-post-slicer";
import {
  InitialStateReRender,
  setReRenderTrigger,
} from "../../redux/screenReRender/screen-re-render-slice";

export default async function patchPost(
  id: number,
  patchTitle: string,
  patchContent: string,
  dispatch: ThunkDispatch<
    {
      reRender: InitialStateReRender;
      modals: InitialState;
      patch: PatchPost;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>
) {
  const patchedObject: PatchPost = {
    title: patchTitle,
    content: patchContent,
  };

  try {
    await axios.patch(
      `https://dev.codeleap.co.uk/careers/${id}/`,
      patchedObject
    );
    dispatch(setEditModal(false));
    dispatch(setReRenderTrigger());
    dispatch(setPatchContent(""));
    dispatch(setPatchTitle(""));
  } catch (error) {
    console.log(error);
  }
}
