import {configureStore} from "@reduxjs/toolkit";
import windowsReducer from "../redux/windows/windowsSlice";

export const store = configureStore({
    reducer: {
        windows: windowsReducer,
        settings: ''
    }
})