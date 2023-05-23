import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  deletedId: number;
}

const initialState: InitialState = {
  deletedId: 0,
};

const setDelete = createSlice({
  name: "delete",
  initialState,
  reducers: {
    setDeletedId: (state, action: PayloadAction<number>) => {
      state.deletedId = action.payload;
    },
  },
});

export const { setDeletedId } = setDelete.actions;
export default setDelete.reducer;
