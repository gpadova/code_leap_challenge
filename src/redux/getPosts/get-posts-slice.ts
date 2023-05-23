import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { GetPost } from "../../protocols";
import axios from "axios";

export interface PostState {
  posts: GetPost[];
}

const initialState: PostState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(import.meta.env.VITE_BASE_REQUEST_URL);
  return response.data.results.map((user: GetPost) => user);
});

const setAllPosts = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
  reducers: {},
});

export default setAllPosts.reducer;