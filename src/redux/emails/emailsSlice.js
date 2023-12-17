import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drafts: [],
    sentMessages: [],
    editDraft: null
}

export const mailsSlice = createSlice({
    name: 'mails',
    initialState,
    reducers: {
        saveDraft: (state, action) => {
            const existingDraftIndex = state.drafts.findIndex(d => d.id === action.payload.id);
            if (existingDraftIndex !== -1) {
                state.drafts[existingDraftIndex] = action.payload;
            } else {
                state.drafts.push(action.payload);
            }
            localStorage.setItem('drafts', JSON.stringify(state.drafts));
        },
        deleteDraft: (state, action) => {
            state.drafts = state.drafts.filter(draft => draft.id !== action.payload);
            if (state.editDraft && state.editDraft.id === action.payload) {
                state.editDraft = null;
            }
            localStorage.setItem('drafts', JSON.stringify(state.drafts));
        },
        sendMail: (state, action) => {
            state.sentMessages.push(action.payload);
            localStorage.setItem('sentMessages', JSON.stringify(state.sentMessages));
        },
        setEditDraft: (state, action) => {
            state.editDraft = action.payload
        }
    }
})

export const { saveDraft, sendMail, deleteDraft, setEditDraft } = mailsSlice.actions

export default mailsSlice.reducer