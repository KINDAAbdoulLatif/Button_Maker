import { configureStore } from "@reduxjs/toolkit";
import shadow from "./features/shadow";
import boxProperties from "./features/boxProperties";

export const store = configureStore({
    reducer: {
        shadow,
        boxProperties,

    }
})