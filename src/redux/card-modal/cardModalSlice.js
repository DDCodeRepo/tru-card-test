import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardModalVal: {modVal:false, name:""}
};

export const cardModalSlice = createSlice({
  name: "cardModal",
  initialState,
  reducers: {
    modalData: (state, action) => {
      console.log({payload : action.payload})
      state.cardModalVal = action.payload
    },
  },
});

export const { modalData } = cardModalSlice.actions;

export default cardModalSlice.reducer;