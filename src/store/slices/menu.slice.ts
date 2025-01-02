import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  menuOpen: boolean;
  activeDropdown: number | null;
}

const initialState: MenuState = {
  menuOpen: false,
  activeDropdown: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    setActiveDropdown(state, action: PayloadAction<number | null>) {
      state.activeDropdown = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveDropdown } = menuSlice.actions;
export default menuSlice.reducer;