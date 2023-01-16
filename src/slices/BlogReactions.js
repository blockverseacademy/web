import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogsService from "../services/BlogsService";
const initialState = {
   
    results: [],
   
    message: "Idle",
}

export const CreateReactions = createAsyncThunk("blogs/createreactions", 
async ({ BlogID,likes ,love,funny,sad,info}) => {

  const res = await BlogsService.createreactions({BlogID,likes ,love,funny,sad,info}
     
  );
  return res.data;
});

export const retrieveBlogsReactions = createAsyncThunk("blogs/getBlogreactions", 
async ({ BlogID }) => {

  const res = await BlogsService.getAllReactions({BlogID}
     
  );
  return res.data;
});

const BlogReactions = createSlice({
  name: "Reactions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CreateReactions.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(CreateReactions.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          results: action.payload
        });
      })
      .addCase(CreateReactions.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      })
      .addCase(retrieveBlogsReactions.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(retrieveBlogsReactions.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          results: action.payload
        });
      })
      .addCase(retrieveBlogsReactions.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      });
  }
});
const { reducer } = BlogReactions;
export default reducer;
