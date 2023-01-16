import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import SupportReducer from "./slices/Support";
import PDReducer from "./slices/PD";
import EDReducer from "./slices/ED";
import IDReducer from "./slices/ID";
import CSReducer from "./slices/CS";
import PPReducer from "./slices/PP";
import CourseReducer from "./slices/Course";
import NotificationReducer from "./slices/Notification";
import BlogsReducer from "./slices/Blogs";
import CatReducer from "./slices/BlogCategory";
import BlogCommentsReducer from "./slices/Blogcomments";
import BlogReactionsReducer from "./slices/BlogReactions";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  Support: SupportReducer,
  PD: PDReducer,
  ED: EDReducer,
  ID: IDReducer,
  CS: CSReducer,
  PP: PPReducer,
  CourseRed: CourseReducer,
  NotReducer: NotificationReducer,
  BlogsReducer: BlogsReducer,
  CatReducer:CatReducer,
  BlogCommentsReducer: BlogCommentsReducer,
  BlogReactionsReducer: BlogReactionsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export const persistor = persistStore(store);
