import React, {useEffect, useState} from 'react';
import Input from "../../../../../components/input/input";
import {FormButton, FormContainer, FormField, FormFieldsContainer, InputMessage, Notification, SubmitContainer} from "./newMessageContent.styled";
import Paperplane from "../../../../../components/utils/icons/mailApp/paperplane";
import {useDispatch, useSelector} from "react-redux";
import {deleteDraft, saveDraft, sendMail} from "../../../../../redux/emails/emailsSlice";
import emailjs from 'emailjs-com'

const NewMessageContent = ({onDraftSend}) => {
        const editDraft = useSelector(state => state.mails.editDraft)
        const [email, setEmail] = useState('')
        const [subject, setSubject] = useState('')
        const [message, setMessage] = useState('')
        const [draftId, setDraftId] = useState(null)
        const [isDraftStarted, setIsDraftStarted] = useState(!!editDraft)
        const [isModified, setIsModified] = useState(false)
        const [isSending, setIsSending] = useState(false)
        const [successSendMessage, setSuccessSendMessage] = useState('')
        const [errorSendMessage, setErrorSendMessage] = useState('')
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
                dispatch(saveDraft({id: draftId || Date.now(), from: email, subject, message}));
            }
        }, [email, subject, message, dispatch, draftId, isDraftStarted, isModified])

        const isValidEmail = (email) => {
            const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
            return emailRegexp.test(email)
        }

        const handleInputChange = (e, type) => {
            const value = e.target.value;
            setIsModified(true);
            if (!isDraftStarted && !editDraft) {
                setDraftId(Date.now());
                setIsDraftStarted(true);
            }
            if (type === 'email') {
                setEmail(value);
                if (errorSendMessage) setErrorSendMessage('')
            } else if (type === 'subject') {
                setSubject(value);
            } else if (type === 'message') {
                setMessage(value);
            }
        }

        const handleSendMail = (e) => {
            e.preventDefault()
            if (!isValidEmail(email)) {
                setErrorSendMessage('Veuillez entrer une adresse email valide !')
                return
            }
            setIsSending(true)
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
                from_name: email,
                to_name: 'Ludovic Parriaud',
                message: message,
                subject: subject
            }, process.env.REACT_APP_EMAILJS_USER_ID)
                .then((result) => {
                    console.log('Email successfully sent', result.status, result.text)
                    dispatch(sendMail({id: draftId, from: email, subject, message, sendDate: Date.now()}))
                    dispatch(deleteDraft(draftId))
                    setEmail('')
                    setSubject('')
                    setMessage('')
                    setDraftId(null)
                    setIsDraftStarted(false)
                    setIsModified(false)
                    if (onDraftSend) {
                        onDraftSend()
                    }
                    setSuccessSendMessage('Votre message a bien été envoyé !')
                    setTimeout(() => setSuccessSendMessage(''), 5000)
                    setIsSending(false)
                }, (error) => {
                    console.log('Failed to send email', error)
                    setErrorSendMessage(
                        <>
                            <span>Une erreur est survenue lors de l'envoi du message.</span>
                            <br/>
                            <span>Merci de réessayer ultérieurement.</span>
                        </>
                    )
                    setTimeout(() => setErrorSendMessage(''), 5000)
                    setIsSending(false)
                })
        }

        return (
            <FormContainer onSubmit={handleSendMail}>
                <FormFieldsContainer>
                    <FormField>
                        <label id={'to'}>A :</label>
                        <Input id={'to'} disabled value={'Ludovic Parriaud <ludovic.parriaud@gmail.com>'}/>
                    </FormField>
                    <FormField>
                        <label id={'from'}>De :</label>
                        <Input id={'from'} type={'email'} required onChange={(e) => handleInputChange(e, 'email')} value={email}/>
                    </FormField>
                    <FormField>
                        <label id={'subject'}>Objet :</label>
                        <Input id={'subject'} required onChange={(e) => handleInputChange(e, 'subject')} value={subject}/>
                    </FormField>
                    <InputMessage required onChange={(e) => handleInputChange(e, 'message')} value={message}/>
                </FormFieldsContainer>
                <SubmitContainer>
                    <FormButton type={'submit'} disabled={isSending}>
                        <Paperplane/>
                        Envoyer
                    </FormButton>
                    {successSendMessage && <Notification type={'success'}>{successSendMessage}</Notification>}
                    {errorSendMessage && <Notification type={'error'}>{errorSendMessage}</Notification>}
                </SubmitContainer>
            </FormContainer>
        );
    }
;

export default NewMessageContent;