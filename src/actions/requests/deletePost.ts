import axios from "axios";
import {
  InitialStateReRender,
  setReRenderTrigger,
} from "../../redux/screenReRender/screen-re-render-slice";
import { InitialState, setDeleteModal } from "../../redux/modals/modals-slicer";
import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default async function deletePost(
  id: number,
  dispatch: ThunkDispatch<
    {
      reRender: InitialStateReRender;
      modals: InitialState;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>
) {
  try {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);
    dispatch(setReRenderTrigger());
    dispatch(setDeleteModal(false));
  } catch (error) {
    console.log(error);
  }
}
