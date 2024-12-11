import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
export const myStore=configureStore({
    reducer:counterSlice.reducer,
})