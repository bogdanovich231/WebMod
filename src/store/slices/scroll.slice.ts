import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isScrolled: false,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrolled(state, action) {
      state.isScrolled = action.payload;
    },
  },
});

export const { setScrolled } = scrollSlice.actions;
export default scrollSlice.reducer;