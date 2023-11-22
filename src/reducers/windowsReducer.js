const initialState = {
    window: [],
    frontWindow: null
}

export function windowsReducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_WINDOW':
            const newWindow = {
                ...action.payload,
                isMinimized: false,
                isMaximized: false
            }
            return {
                ...state,
                window: [...state.window, newWindow]
            }
        case 'CLOSE_WINDOW':
            return {
                ...state,
                window: state.window.filter(win => win.id !== action.payload)
            }
        case 'MAXIMIZE_WINDOW':
            return {
                ...state,
                window: state.window.map(win => win.id === action.payload ? {...win, isMaximized: true, lastPosition: win.position} : win)
            }
        case 'RESTORE_WINDOW':
            return {
                ...state,
                window: state.window.map(win => win.id === action.payload ? {...win, isMaximized: false, isMinimized: false, position: win.lastPosition} : win)
            }
        case 'MINIMIZE_WINDOW':
            return {
                ...state,
                window: state.window.map(win => win.id === action.payload ? {...win, isMinimized: true} : win)
            }
        case 'POSITION_WINDOW':
            return {
                ...state,
                window: state.window.map(win => win.id === action.payload.id ? {...win, position: action.payload.position} : win)
            }
        case 'FRONT_WINDOW':
            return {
                ...state,
                frontWindow: action.payload
            }
        default:
            return state
    }
}