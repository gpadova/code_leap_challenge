import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CountState {
    username: string
}

const initialState : CountState = {
    username: ""
};

const setuserInfo = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUsername: (state, action : PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { setUsername } = setuserInfo.actions; 
export default setuserInfo.reducer