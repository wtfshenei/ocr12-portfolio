import {configureStore} from "@reduxjs/toolkit";
import windowsReducer from "../redux/windows/windowsSlice";
import emailsReducer from "../redux/emails/emailsSlice";

export const store = configureStore({
    reducer: {
        windows: windowsReducer,
        settings: '',
        mails: emailsReducer
    }
})