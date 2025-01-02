import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone:'',
    message: '',
    isLoading: false,
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
        state.phone = action.payload;
      },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },

    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.message = '';
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setName, setEmail, setPhone, setMessage, resetForm, setLoader } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;