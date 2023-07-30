import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Navbar {
  showNavbar: boolean;
}

const initialState: Navbar = {
  showNavbar: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state, action: PayloadAction<boolean>) => {
      state.showNavbar = action.payload;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
