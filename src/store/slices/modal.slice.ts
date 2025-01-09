import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPdfModalOpen: false,
  isContactModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openContactModal(state) {
      state.isContactModalOpen = true;
    },
    closeContactModal(state) {
      state.isContactModalOpen = false;
    },
  },
});

export const {  openContactModal, closeContactModal } = modalSlice.actions;
export default modalSlice.reducer;
