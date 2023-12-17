import React, {useEffect, useState} from 'react';
import Input from "../../../../../components/input/input";
import {FormButton, FormContainer, FormField, InputMessage} from "./newMessageContent.styles";
import Paperplane from "../../../../../components/utils/icons/mailApp/paperplane";
import {useDispatch, useSelector} from "react-redux";
import {deleteDraft, saveDraft, sendMail} from "../../../../../redux/emails/emailsSlice";
import emailjs from 'emailjs-com'

const NewMessageContent = ({ onDraftSend }) => {
    const editDraft = useSelector(state => state.mails.editDraft)
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [draftId, setDraftId] = useState(null)
    const [isDraftStarted, setIsDraftStarted] = useState(!!editDraft)
    const [isModified, setIsModified] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (editDraft) {
            setEmail(editDraft.from);
            setSubject(editDraft.subject);
            setMessage(editDraft.message);
            setDraftId(editDraft.id);
            setIsDraftStarted(true);
        }
    }, [editDraft])

    useEffect(() => {
        if (isDraftStarted && isModified) {
            dispatch(saveDraft({ id: draftId || Date.now(), from: email, subject, message }));
        }
    }, [email, subject, message, dispatch, draftId, isDraftStarted, isModified])

    const handleInputChange = (e, type) => {
        const value = e.target.value;
        setIsModified(true);
        if (!isDraftStarted && !editDraft) {
            setDraftId(Date.now());
            setIsDraftStarted(true);
        }
        if (type === 'email') setEmail(value);
        else if (type === 'subject') setSubject(value);
        else if (type === 'message') setMessage(value);
    }

    const handleSendMail = (e) => {
        e.preventDefault()
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
            from_name: email,
            to_name: 'Ludovic Parriaud',
            message: message,
            subject: subject
        }, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log('Email successfully sent', result.status, result.text)
                dispatch(sendMail({ id: draftId, from: email, subject, message, sendDate: Date.now() }))
                dispatch(deleteDraft(draftId))
                // setEmail('')
                // setSubject('')
                // setMessage('')
                // setDraftId(null)
                setIsDraftStarted(false)
                setIsModified(false)
                onDraftSend()
                // TODO : faire message de confirmation
            }, (error) => {
                console.log('Failed to send email', error)
                // TODO : faire message d'erreur
            })
    }

    return (
        <FormContainer onSubmit={handleSendMail}>
            <FormField>
                <label>A :</label>
                <Input disabled value={'Ludovic Parriaud <wtfshenei@gmail.com>'} />
            </FormField>
            <FormField>
                <label>De :</label>
                <Input type={'email'} required onChange={(e) => handleInputChange(e, 'email')} value={email} />
            </FormField>
            <FormField>
                <label>Objet :</label>
                <Input required onChange={(e) => handleInputChange(e, 'subject')} value={subject} />
            </FormField>
            <InputMessage required onChange={(e) => handleInputChange(e, 'message')} value={message} />
            <FormButton type={'submit'}>
                <Paperplane />
                Envoyer
            </FormButton>
        </FormContainer>
    );
};

export default NewMessageContent;