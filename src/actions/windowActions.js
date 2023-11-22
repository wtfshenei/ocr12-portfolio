// Action Types
export const OPEN_WINDOW = 'OPEN_WINDOW'
export const CLOSE_WINDOW = 'CLOSE_WINDOW'
export const MAXIMIZE_WINDOW = 'MAXIMIZE_WINDOW'
export const RESTORE_WINDOW = 'RESTORE_WINDOW'
export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW'
export const POSITION_WINDOW = 'POSITION_WINDOW'
export const FRONT_WINDOW = 'FRONT_WINDOW'


// Action Creators

export const openWindow = (app) => ({
    type: 'OPEN_WINDOW',
    payload: app
})

export const closeWindow = (appId) => ({
    type: 'CLOSE_WINDOW',
    payload: appId
})

export const maximizeWindow = (appId) => ({
    type: 'MAXIMIZE_WINDOW',
    payload: appId
})

export const restoreWindow = (appId) => ({
    type: 'RESTORE_WINDOW',
    payload: appId
})

export const minimizeWindow = (appId) => ({
    type: 'MINIMIZE_WINDOW',
    payload: appId
})

export const positionWindow = (appId, position) => ({
    type: 'POSITION_WINDOW',
    payload: { appId, position }
})

export const frontWindow = (appId) => ({
    type: 'FRONT_WINDOW',
    payload: appId
})