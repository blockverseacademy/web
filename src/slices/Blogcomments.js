import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogsService from "../services/BlogsService";
const initialState = {
   
    results: [],
   
    message: "Idle",
}

export const CreateBlogsComments = createAsyncThunk("blogs/createcomments", 
async ({ BlogID,comments ,commentedBy}) => {
 
  const res = await BlogsService.createcomments({ BlogID,comments ,commentedBy}
     
  );
  return res.data;
});

export const retrieveBlogsComments = createAsyncThunk("blogs/getComments", 
async ({ BlogID }) => {

  const res = await BlogsService.getAllComments(
    BlogID 
  );
  return res.data;
});

const BlogComments = createSlice({
  name: "BlogsComments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CreateBlogsComments.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(CreateBlogsComments.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          results: action.payload
        });
      })
      .addCase(CreateBlogsComments.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      })
      .addCase(retrieveBlogsComments.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(retrieveBlogsComments.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          results: action.payload
        });
      })
      .addCase(retrieveBlogsComments.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      });
  }
});
const { reducer } = BlogComments;
export default reducer;
