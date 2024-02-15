import React, {useEffect, useState} from 'react';
import {
    ContentContainer,
    ContentLeftBar,
    ContentLeftWrapper,
    ContentRightBar,
    ContentRightDisplay,
    ContentRightWrapper, FloatingMessageButton,
    MailingServiceButton,
    MailingServiceSpan,
    MailVisitor,
    MenuItemsLeft,
    MenuLeft,
    MenuTitleLeft,
    NewMessageButton,
    VerticalBar
} from "./thunderbird.styled";
import Envelope from "../../../components/utils/icons/mailApp/envelope";
import Inbox from "../../../components/utils/icons/mailApp/inbox";
import Paperplane from "../../../components/utils/icons/mailApp/paperplane";
import Note from "../../../components/utils/icons/mailApp/note";
import {theme} from "../../../assets/styles/theme.styles";
import InboxContent from "./contentFeatures/inbox/inboxContent";
import DraftContent from "./contentFeatures/draft/draftContent";
import SentMessagesContent from "./contentFeatures/sentMessages/sentMessagesContent";
import NewMessageContent from "./contentFeatures/newMessage/newMessageContent";
import {useDispatch, useSelector} from "react-redux";
import {saveDraft, sendMail, setEditDraft} from "../../../redux/emails/emailsSlice";
import AngleDown from "../../../components/utils/icons/angles/angleDown";
import AngleRight from "../../../components/utils/icons/angles/angleRight";
import CheckContent from "../../../components/checkContent/checkContent";
import {useMobile} from "../../../mobile/utils/MobileContext";

const Thunderbird = () => {
    const [activeFeature, setActiveFeature] = useState('InboxContent')
    const [activeFeatureTitle, setActiveFeatureTitle] = useState('Boîte de réception')
    const dispatch = useDispatch()
    const sentMessagesInStore = useSelector(state => state.mails.sentMessages)
    const [isEditingDraft, setIsEditingDraft] = useState(false)
    const [draftToEdit, setDraftToEdit] = useState(null)
    const isMobile = useMobile()
    const showFloatingMessageButton = isMobile && activeFeature !== 'NewMessageContent'
    // const showNewMessageButtonDefault = !isMobile || activeFeature === 'NewMessageContent'

    useEffect(() => {
        const draftsFromLocalStorage = localStorage.getItem('drafts');
        const sentMessagesFromLocalStorage = localStorage.getItem('sentMessages');

        if (draftsFromLocalStorage) {
            const drafts = JSON.parse(draftsFromLocalStorage);
            drafts.forEach(draft => {
                dispatch(saveDraft(draft));
            });
        }

        if (sentMessagesFromLocalStorage) {
            const sentMessages = JSON.parse(sentMessagesFromLocalStorage);
            sentMessages.forEach(sentMessage => {
                const isMessageInStore = sentMessagesInStore.some(message => message.id === sentMessage.id);
                if (!isMessageInStore) {
                    dispatch(sendMail(sentMessage));
                }
            });
        }
    }, [dispatch, sentMessagesInStore])

    const handleSetActiveFeature = (feature, title) => {
        setActiveFeature(feature)
        setActiveFeatureTitle(title)
        if (isEditingDraft) {
            setIsEditingDraft(false)
            setDraftToEdit(null)
            dispatch(setEditDraft(null))
        }
    }

    const handleEditDraft = (draft) => {
        dispatch(setEditDraft(draft))
        setIsEditingDraft(true)
        setActiveFeature('NewMessageContent')
    }

    const handleDraftSent = () => {
        setIsEditingDraft(false)
        setDraftToEdit(null)
    }

    const renderContent = () => {
        if (isEditingDraft) {
            return <NewMessageContent draft={draftToEdit} onDraftSend={handleDraftSent}/>
        }
        switch (activeFeature) {
            case 'InboxContent':
                return <InboxContent/>
            case 'DraftContent':
                return <DraftContent onEditDraft={handleEditDraft}/>
            case 'SentMessagesContent':
                return <SentMessagesContent/>
            case 'NewMessageContent':
                return <NewMessageContent/>
            default:
                return null
        }
    }

    return (
        <ContentContainer>
            <CheckContent>
                <ContentLeftWrapper isMobile={isMobile}>
                    {!isMobile && (
                        <ContentLeftBar>
                            <NewMessageButton onClick={() => handleSetActiveFeature('NewMessageContent', 'Nouveau Message')}>
                                + Nouveau Message
                            </NewMessageButton>
                        </ContentLeftBar>
                    )}
                    <MenuLeft>
                        <MenuTitleLeft>
                            <AngleDown/>
                            <Envelope color={theme.colors.color1}/>
                            <MailVisitor>visiteur@portfolio-LP</MailVisitor>
                        </MenuTitleLeft>
                        <MenuItemsLeft>
                            <li onClick={() => handleSetActiveFeature('InboxContent', 'Boîte de réception')}>
                                <MailingServiceButton active={activeFeature === 'InboxContent'}>
                                    <AngleRight/>
                                    <Inbox color={theme.colors.color1}/>
                                    <MailingServiceSpan>Boîte de réception (1)</MailingServiceSpan>
                                </MailingServiceButton>
                            </li>
                            <li onClick={() => handleSetActiveFeature('DraftContent', 'Brouillons')}>
                                <MailingServiceButton active={activeFeature === 'DraftContent'}>
                                    <AngleRight/>
                                    <Note color={theme.colors.color11}/>
                                    <MailingServiceSpan>Brouillons ({useSelector(state => state.mails.drafts).length})</MailingServiceSpan>
                                </MailingServiceButton>
                            </li>
                            <li onClick={() => handleSetActiveFeature('SentMessagesContent', 'Messages Envoyés')}>
                                <MailingServiceButton active={activeFeature === 'SentMessagesContent'}>
                                    <AngleRight/>
                                    <Paperplane color={theme.colors.color10}/>
                                    <MailingServiceSpan>Messages envoyés ({useSelector(state => state.mails.sentMessages).length})</MailingServiceSpan>
                                </MailingServiceButton>
                            </li>
                        </MenuItemsLeft>
                    </MenuLeft>
                </ContentLeftWrapper>
            </CheckContent>
            {showFloatingMessageButton && (
                <FloatingMessageButton onClick={() => handleSetActiveFeature('NewMessageContent', 'Nouveau Message')}>
                    + Nouveau Message
                </FloatingMessageButton>
            )}
            <VerticalBar/>
            <ContentRightWrapper>
                <ContentRightBar>
                    <h2>{activeFeatureTitle.toUpperCase()}</h2>
                </ContentRightBar>
                <ContentRightDisplay>
                    {renderContent()}
                </ContentRightDisplay>
            </ContentRightWrapper>
        </ContentContainer>
    );
};

export default Thunderbird;