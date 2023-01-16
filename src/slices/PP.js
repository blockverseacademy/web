import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PPService from "../services/PPService";

const initialState = {
  ppdetails: [],
  status: "idle",
  error: null
};

export const createPP = createAsyncThunk(
  "details/pp/createPP",
  async ({
    email,
    Python,
    Cplusplus,
    Chash,
    Golang,
    Rust,
    Solidity,
    Solana,
    Ethereum,
    React,
    Vuejs,
    Angular,
    Nodejs,
    Web3js,
    Ethersjs
  }) => {
    const res = await PPService.create({
      email,
      Python,
      Cplusplus,
      Chash,
      Golang,
      Rust,
      Solidity,
      Solana,
      Ethereum,
      React,
      Vuejs,
      Angular,
      Nodejs,
      Web3js,
      Ethersjs
    });
    return res.data;
  }
);

const PPSlice = createSlice({
  name: "PP",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPP.pending, (state, action) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(createPP.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "success",
          ppdetails: action.payload
        });
      })
      .addCase(createPP.rejected, (state, action) => {
        return (state = { ...state, status: "failed" });
      });
  }
});

const { reducer } = PPSlice;
export default reducer;
