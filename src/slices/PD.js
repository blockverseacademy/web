import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PDService from "../services/PDService";

const initialState = {
  personaldetails: [],
  status: "idle"
};

export const findPDByemail = createAsyncThunk(
  "details/pd/emailPD",
  async ({ email }) => {
    const res = await PDService.findByEmail(email);
    return res.data;
  }
);

export const createPD = createAsyncThunk(
  "details/pd/createPD",
  async ({ name, email, number, address }) => {
    const res = await PDService.create({
      name,
      email,
      number,
      address
    });
    return res.data;
  }
);

const PDSlice = createSlice({
  name: "PD",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(findPDByemail.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(findPDByemail.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          personaldetails: action.payload
        });
      })
      .addCase(findPDByemail.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      })
      .addCase(createPD.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(createPD.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          personaldetails: action.payload
        });
      })
      .addCase(createPD.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = PDSlice;
export default reducer;
