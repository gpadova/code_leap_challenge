import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import usernameReducer from "./username/username-slice";
import postPostSlice from "./postPost/post-post-slice";
import setAllPosts from "./getPosts/get-posts-slice";
import setTrigger from "./screenReRender/screen-re-render-slice";
import setModals from "./modals/modals-slicer";
import setDelete from "./deletePost/delete-post-slicer";

import storage from "redux-persist/lib/storage";
import patchPostSlicer from "./patchPost/patch-post-slicer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usernameReducer);

export const store = configureStore({
  reducer: {
    username: persistedReducer,
    post: postPostSlice,
    patch: patchPostSlicer,
    allPosts: setAllPosts,
    reRender: setTrigger,
    modals: setModals,
    deleted: setDelete,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
