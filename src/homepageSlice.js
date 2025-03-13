import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "myHomepage",
    initialState: {
        pageThemeDark: false,
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.pageThemeDark = !state.pageThemeDark;
            console.log(state.pageThemeDark);
        }
    }
});

export const { toggleTheme } = homepageSlice.actions; // to są akcje

// a to selektory:
export const selectThemeDark = (state) => state.homepage.pageThemeDark;


export const myHomepageReducer = homepageSlice.reducer; 