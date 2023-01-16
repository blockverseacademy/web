import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogsService from "../services/BlogsService";
const initialState = {
    error: null,
    message: "idle",
    items: []
};

export const retrieveCategories = createAsyncThunk("blogs", 
async () => {

  const res = await BlogsService.getAllCategories(
    
  );
  return res.data;
});

const CatSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(retrieveCategories.pending, (state, action) => {
        return (state = { ...state, message: "loading" });
      })
      .addCase(retrieveCategories.fulfilled, (state, action) => {
        return (state = {
          ...state,
          message: "success",
          items: action.payload
          
        });
      })
      .addCase(retrieveCategories.rejected, (state, action) => {
        return (state = { ...state, message: "failed" });
      });
  }
});
const { reducer } = CatSlice;
export default reducer;
