import {createSlice} from "@reduxjs/toolkit";

export const windowsSlice = createSlice({
    name: 'windows',
    initialState: {
        window: [],
        frontWindow: null
    },
    reducers: {
        openWindow: (state, action) => {
            const newWindow = {
                ...action.payload,
                iconType: action.payload.iconType,
                isMinimized: false,
                isMaximized: false
            };
            state.window.push(newWindow);
        },
        closeWindow: (state, action) => {
            state.window = state.window.filter(win => win.id !== action.payload);
        },
        maximizeWindow: (state, action) => {
            state.window = state.window.map(win =>
                win.id === action.payload ? {...win, isMaximized: true, lastPosition: win.position} : win
            );
        },
        restoreWindow: (state, action) => {
            state.window = state.window.map(win =>
                win.id === action.payload ? {...win, isMaximized: false, isMinimized: false, position: win.position} : win
            );
        },
        minimizeWindow: (state, action) => {
            state.window = state.window.map(win =>
                win.id === action.payload ? {...win, isMinimized: true, wasFullScreen: win.isMaximized} : win
            );
        },
        positionWindow: (state, action) => {
            state.window = state.window.map(win =>
                win.id === action.payload.id ? {...win, position: action.payload.position} : win
            );
        },
        frontWindow: (state, action) => {
            state.frontWindow = action.payload;
        }
    }
})

export const {
    openWindow,
    closeWindow,
    maximizeWindow,
    minimizeWindow,
    restoreWindow,
    positionWindow,
    frontWindow
} = windowsSlice.actions;

export default windowsSlice.reducer