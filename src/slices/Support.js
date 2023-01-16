import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SupportService from "../services/SupportService";
const initialState = [];
export const createSupport = createAsyncThunk(
  "support/createSupport",
  async ({ name, email, number, subject, message, optionname }) => {
    const res = await SupportService.create({
      name,
      email,
      number,
      subject,
      message,
      optionname
    });
    return res.data;
  }
);
export const retrieveSupport = createAsyncThunk("support", async () => {
  const res = await SupportService.getAll();
  return res.data;
});
// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }) => {
//     const res = await SupportService.update(id, data);
//     return res.data;
//   }
// );
// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }) => {
//     await SupportService.remove(id);
//     return { id };
//   }
// );
// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await SupportService.removeAll();
//     return res.data;
//   }
// );
// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await SupportService.findByTitle(title);
//     return res.data;
//   }
// );
const SupportSlice = createSlice({
  name: "Support",
  initialState,
  extraReducers: {
    [createSupport.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveSupport.fulfilled]: (state, action) => {
      return [...action.payload];
    }
    // [updateTutorial.fulfilled]: (state, action) => {
    //   const index = state.findIndex(
    //     tutorial => tutorial.id === action.payload.id
    //   );
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload
    //   };
    // }
    // [deleteTutorial.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
    // [deleteAllTutorials.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // }
  }
});
const { reducer } = SupportSlice;
export default reducer;
