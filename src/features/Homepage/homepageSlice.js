import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "myHomepage",
    initialState: {
        repositories: [],
        pageThemeDark: false,
        loading: false,
        error: false,
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.pageThemeDark = !state.pageThemeDark;
        },
        fetchRepositoriesRequest: (state, action) => {
            state.loading = true;
        },

        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.loading = false;
        },
        fetchRepositoriesFailure: (state, action) => {
            state.error = true;
            state.loading = false;
        },
    }
});

export const { toggleTheme, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesFailure } = homepageSlice.actions;


export const selectThemeDark = (state) => state.homepage.pageThemeDark;
export const selectRepositories = (state) => state.homepage.repositories;
export const selectLoading = (state) => state.homepage.loading;
export const selectError = (state) => state.homepage.error;


export const myHomepageReducer = homepageSlice.reducer; 