import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    draft: {
        from: '',
        subject: '',
        message: ''
    },
    sentMessages: []
}

export const mailsSlice = createSlice({
    name: 'mails',
    initialState,
    reducers: {
        saveDraft: (state, action) => {
            state.draft = { ...state.draft, ...action.payload }
            localStorage.setItem('draft', JSON.stringify(state.draft))
        },
        sendMail: (state, action) => {
            state.sentMessages.push(action.payload)
            localStorage.setItem('sentMessages', JSON.stringify(state.sentMessages))
            state.draft = initialState.draft
            localStorage.removeItem('draft')
        }
    }
})

export const { saveDraft, sendMail } = mailsSlice.actions

export default mailsSlice.reducer