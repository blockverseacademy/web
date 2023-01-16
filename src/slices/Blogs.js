import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogsService from "../services/BlogsService";
const initialState = {
    totalBlogs: 0,
    currentPage: 0,
    results: [],
    status: 0,
    message: "Error",
    totalPages: 0,
    totalRecords:0
};

export const retrieveBlogs = createAsyncThunk("blogs", 
async ({ catID, username,recCount,page }) => {

  const res = await BlogsService.getAll(
    catID, username,recCount,page 
  );
  return res.data;
});

const BlogsSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(retrieveBlogs.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(retrieveBlogs.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          results: action.payload,
          totalBlogs: action.payload.totalBlogs,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalRecords: action.payload.totalRecords
        });
      })
      .addCase(retrieveBlogs.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      });
  }
});
const { reducer } = BlogsSlice;
export default reducer;
