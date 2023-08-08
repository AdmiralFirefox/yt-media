import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import videoReducer from "@/features/video/videoSlice";
import navbarReducer from "@/features/navbar/navbarSlice";
import searchReducer from "@/features/search/searchSlice";
import channelReducer from "@/features/channel/channelSlice";

const reducers = combineReducers({
  video: videoReducer,
  navbar: navbarReducer,
  search: searchReducer,
  channel: channelReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navbar"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
