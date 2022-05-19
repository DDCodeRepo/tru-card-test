import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authToggle: (state, action) => {
      state.auth = action.payload;
      console.log(state.auth);
    },
  },
});

export const { authToggle } = userSlice.actions;

export default userSlice.reducer;
