import { configureStore } from "@reduxjs/toolkit";
import { myHomepageReducer } from "./homepageSlice";

const store = configureStore({
    reducer: {
        homepage: myHomepageReducer,
    },
});

export default store;
