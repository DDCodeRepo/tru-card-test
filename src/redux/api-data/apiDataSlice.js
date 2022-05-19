import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiDataVal: []
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    saveData: (state, action) => {
      console.log({payload : action.payload})
      state.apiDataVal = action.payload
    },
  },
});

export const { saveData } = apiDataSlice.actions;

export default apiDataSlice.reducer;
