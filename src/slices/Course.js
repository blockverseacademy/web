import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CourseService from "../services/CourseService";

const initialState = {
  courses: [],
  status: "idle",
  error: null
};

export const getCourses = createAsyncThunk(
  "course/getCourseDetails",
  async () => {
    const res = await CourseService.getAll();

    return res.data;
  }
);

const CourseSlice = createSlice({
  name: "courseslice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCourses.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          courses: action.payload
        });
      })
      .addCase(getCourses.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = CourseSlice;
export default reducer;
