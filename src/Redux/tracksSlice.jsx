import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    currenttrack: null,
    currenttrackinfo: null,
    isLoading: false,
  },
  reducers: {
    // Search
    getDataStart: (state) => {
      state.isLoading = true
    },

    getDataSuccess: (state, action) => {
      state.currenttrack = action.payload
      state.isLoading = false;
    },

    getDataFaild: (state) => {
      state.isLoading = false
    },
  },
});

export const { 
  getDataStart,
  getDataSuccess,
  getDataFaild } = tracksSlice.actions;

export default tracksSlice.reducer;
