import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "myHomepage",
    initialState: {
        repositories: [],
        pageThemeDark: false,
        status: "IDLE",
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.pageThemeDark = !state.pageThemeDark;
        },
        fetchRepositoriesRequest: (state, action) => {
            state.repositories = [];
            state.status = "LOADING";
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.status = "SUCCESS";
        },
        fetchRepositoriesFailure: (state, action) => {
            state.status = "ERROR";
        },
    }
});

export const { toggleTheme, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesFailure } = homepageSlice.actions;

export const selectThemeDark = (state) => state.homepage.pageThemeDark;
export const selectRepositories = (state) => state.homepage.repositories;
export const selectStatus = (state) => state.homepage.status;

export const myHomepageReducer = homepageSlice.reducer; 