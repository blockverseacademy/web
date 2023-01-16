import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CSService from "../services/CSService";

const initialState = {
  computersciencedetails: [],
  status: "idle",
  error: null
};

export const createCS = createAsyncThunk(
  "details/pd/createCS",
  async ({ email, CSS, HTML, Networking, Data_Structures_and_Algorithms }) => {
    const res = await CSService.create({ 
      email,
      CSS,
      HTML,
      Networking,
      Data_Structures_and_Algorithms
    });
    return res.data;
  }
);

const CSSlice = createSlice({
  name: "CS",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCS.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(createCS.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          computersciencedetails: action.payload
        });
      })
      .addCase(createCS.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = CSSlice;
export default reducer;
