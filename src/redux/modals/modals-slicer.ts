import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  editModal: boolean;
  deleteModal: boolean;
}

const initialState: InitialState = {
  editModal: false,
  deleteModal: false,
};

const setModals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setEditModal: (state, action: PayloadAction<boolean>) => {
      state.editModal = action.payload;
    },
    setDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { setEditModal, setDeleteModal } = setModals.actions;
export default setModals.reducer;
