import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PatchPost } from "../../protocols";

const initialState: PatchPost = {
  content: "",
  title: "",
};

const setSearch = createSlice({
  name: "post",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setContent, setTitle } = setSearch.actions;
export default setSearch.reducer;
