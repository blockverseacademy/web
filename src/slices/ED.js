import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EDService from "../services/EDService";

const initialState = {
  educationaldetails: [],
  status: "idle"
};

export const createED = createAsyncThunk(
  "details/pd/createED",
  async ({
    email,
    eddescription,
    edadyear,
    edyg,
    radio,
    radiobr,
    bsy,
    bey
  }) => {
    const res = await EDService.create({
      email,
      eddescription,
      edadyear,
      edyg,
      radio,
      radiobr,
      bsy,
      bey
    });
    return res.data;
  }
);

const EDSlice = createSlice({
  name: "ED",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createED.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(createED.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          educationaldetails: action.payload
        });
      })
      .addCase(createED.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = EDSlice;
export default reducer;
