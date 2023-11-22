import {combineReducers, legacy_createStore} from "redux";
import {windowsReducer} from "../reducers/windowsReducer";
import {settingsReducer} from "../reducers/settingsReducer";

const rootReducer = combineReducers({
    windows: windowsReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)