import React, {useEffect, useState} from 'react';
import {Message, MessageDisplay, MessagesListContainer, MessagesWrapperContent} from "../inbox/inboxContent.styles";
import {useDispatch, useSelector} from "react-redux";
import {theme} from "../../../../../assets/styles/theme.styles";
import {saveDraft} from "../../../../../redux/emails/emailsSlice";

const DraftContent = () => {
    const [activeDraft, setActiveDraft] = useState(false);
    const draft = useSelector((state) => state.mails.draft)
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const localDraft = localStorage.getItem('draft')
        if (localDraft) {
            const parsedLocalDraft = JSON.parse(localDraft)
            setFrom(parsedLocalDraft.from);
            setSubject(parsedLocalDraft.subject);
            setMessage(parsedLocalDraft.message);
        }
    }, [])

    useEffect(() => {
        if (from || subject || message) {
            dispatch(saveDraft({ from, subject, message }))
        }
    }, [from, subject, message, dispatch])

    const toggleActiveDraft = () => {
        setActiveDraft(!activeDraft);
    }

    return (
        <MessagesWrapperContent>
            {draft && (
                <MessagesListContainer onClick={toggleActiveDraft} style={{ backgroundColor: activeDraft ? theme.colors.color1 : '' }}>
                    <Message>
                        <span>{draft.from}</span>
                        <span>{draft.subject}</span>
                    </Message>
                </MessagesListContainer>
            )}
            {activeDraft && (
                <MessageDisplay>
                    <p>{draft.message}</p>
                </MessageDisplay>
            )}
        </MessagesWrapperContent>
    );
}

export default DraftContent;