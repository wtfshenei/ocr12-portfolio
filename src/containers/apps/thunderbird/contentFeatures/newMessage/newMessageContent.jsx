import React, {useEffect, useState} from 'react';
import Input from "../../../../../components/input/input";
import {FormButton, FormContainer, FormField, InputMessage} from "./newMessageContent.styles";
import Paperplane from "../../../../../components/utils/icons/mailApp/paperplane";
import {useDispatch} from "react-redux";
import {saveDraft} from "../../../../../redux/emails/emailsSlice";
import emailjs from 'emailjs-com'

const NewMessageContent = ({ draftId }) => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const draft = localStorage.getItem('draft');
        if (draft) {
            const parsedDraft = JSON.parse(draft);
            setEmail(parsedDraft.from);
            setSubject(parsedDraft.subject);
            setMessage(parsedDraft.message);
        }
    }, []);

    useEffect(() => {
        dispatch(saveDraft({ from: email, subject, message }));
    }, [email, subject, message, dispatch])

    const handleInputChange = (e, type) => {
        const value = e.target.value;
        if (type === 'email') {
            setEmail(value);
        } else if (type === 'subject') {
            setSubject(value);
        } else if (type === 'message') {
            setMessage(value);
        }
        dispatch(saveDraft({ from: email, subject, message }));
    }

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
            from_name: email,
            to_name: 'Ludovic Parriaud',
            message: message,
            subject: subject
        }, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log('Email successfully sent', result.status, result.text)
                // TODO : faire message de confirmation
            }, (error) => {
                console.log('Failed to send email', error)
                // TODO : faire message d'erreur
            })
    }

    return (
        <FormContainer onSubmit={sendMail}>
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