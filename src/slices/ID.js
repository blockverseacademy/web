import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IDService from "../services/IDService";

const initialState = {
  internshipdetails: [],
  status: "idle",
  error: null
};

export const createID = createAsyncThunk(
  "details/id/createID",
  async ({ email, Internship1, Internship2, Internship3, Internship4 }) => {
    const res = await IDService.create({
      email,
      Internship1,
      Internship2,
      Internship3,
      Internship4
    });
    return res.data;
  }
);

const IDSlice = createSlice({
  name: "ID",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createID.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(createID.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          internshipdetails: action.payload
        });
      })
      .addCase(createID.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = IDSlice;
export default reducer;
