import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import NotificationService from "../services/NotificationService";

const initialState = {
  notification: [],
  status: "idle",
  error: null
};

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async () => {
    const res = await NotificationService.getAll();

    return res.data;
  }
);

const NotificationSlice = createSlice({
  name: "notificationlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNotifications.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          notification: action.payload
        });
      })
      .addCase(getNotifications.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = NotificationSlice;
export default reducer;
