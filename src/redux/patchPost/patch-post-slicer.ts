import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PatchPostWithId } from "../../protocols";

const initialState: PatchPostWithId = {
  id: 0,
  content: "",
  title: "",
};

const setPatch = createSlice({
  name: "patch",
  initialState,
  reducers: {
    setPatchContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setPatchTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setPatchPostId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setPatchContent, setPatchTitle, setPatchPostId } =
  setPatch.actions;
export default setPatch.reducer;
