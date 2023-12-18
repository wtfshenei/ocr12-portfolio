import React, {useState} from 'react';
import {Message, MessageDisplay, MessagesListContainer} from "../../containers/apps/thunderbird/contentFeatures/inbox/inboxContent.styled";
import {theme} from "../../assets/styles/theme.styles";
import {dateFormater} from "../../utils/dateFormater";
import Pencil from "../utils/icons/mailApp/pencil";
import Trash from "../utils/icons/mailApp/trash";
import Button from "../button/button";
import {useDispatch} from "react-redux";
import {deleteDraft} from "../../redux/emails/emailsSlice";

const Dropdown = ({ id, from, subject, message, date, isDraft, onEditDraft }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const dispatch = useDispatch()
    
    const toggleDropdown = () => {
        setIsDropdownActive(!isDropdownActive)
    }

    const handleDeleteItem = () => {
        dispatch(deleteDraft(id))
    }

    const handleEditItem = () => {
        onEditDraft({ id, from, subject, message })
    }
    
    return (
        <li>
            <MessagesListContainer onClick={toggleDropdown} style={{ backgroundColor: isDropdownActive ? `${theme.colors.color1}` : '' }}>
                <Message>
                    <div className={'first-line'}>
                        <span>{from}</span>
                        <span>{dateFormater(date)}</span>
                    </div>
                    <span>{subject}</span>
                </Message>
            </MessagesListContainer>
            {isDropdownActive && (
                <MessageDisplay>
                    {isDraft ? (<div className={'draft-display'}>
                        <Button onClick={handleEditItem}><Pencil /></Button>
                        <Button onClick={handleDeleteItem}><Trash /></Button>
                    </div>) : ''}
                    {message}
                </MessageDisplay>
            )}
        </li>
    );
};

export default Dropdown;