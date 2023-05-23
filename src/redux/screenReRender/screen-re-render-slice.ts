import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateReRender {
  reRenderTrigger: boolean;
}

const initialState: InitialStateReRender = {
  reRenderTrigger: false,
};

const setTrigger = createSlice({
  name: "reRenderTrigger",
  initialState,
  reducers: {
    setReRenderTrigger: (state) => {
      state.reRenderTrigger = !state.reRenderTrigger;
    },
  },
});

export const { setReRenderTrigger } = setTrigger.actions;
export default setTrigger.reducer;
