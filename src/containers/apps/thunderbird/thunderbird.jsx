import React, {useEffect, useState} from 'react';
import {
    ContentContainer,
    ContentLeftBar,
    ContentLeftWrapper,
    ContentRightBar,
    ContentRightDisplay,
    ContentRightWrapper,
    MailingServiceButton,
    MailingServiceSpan,
    MailVisitor,
    MenuItemsLeft,
    MenuLeft,
    MenuTitleLeft,
    NewMessageButton,
    VerticalBar
} from "./thunderbird.styles";
import Envelope from "../../../components/utils/icons/mailApp/envelope";
import Inbox from "../../../components/utils/icons/mailApp/inbox";
import Paperplane from "../../../components/utils/icons/mailApp/paperplane";
import Note from "../../../components/utils/icons/mailApp/note";
import {theme} from "../../../assets/styles/theme.styles";
import InboxContent from "./contentFeatures/inbox/inboxContent";
import DraftContent from "./contentFeatures/draft/draftContent";
import SentMessagesContent from "./contentFeatures/sentMessages/sentMessagesContent";
import NewMessageContent from "./contentFeatures/newMessage/newMessageContent";
import {useDispatch} from "react-redux";
import {saveDraft, sendMail} from "../../../redux/emails/emailsSlice";

const Thunderbird = () => {
    const [activeFeature, setActiveFeature] = useState('InboxContent')
    const [activeFeatureTitle, setActiveFeatureTitle] = useState('Boîte de réception')
    const dispatch = useDispatch()

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
                dispatch(sendMail(sentMessage));
            })
        }
    }, [dispatch])

    const handleSetActiveFeature = (feature, title) => {
        setActiveFeature(feature)
        setActiveFeatureTitle(title)
    }
    const renderContent = () => {
        switch (activeFeature) {
            case 'InboxContent':
                return <InboxContent />
            case 'DraftContent':
                return <DraftContent />
            case 'SentMessagesContent':
                return <SentMessagesContent />
            case 'NewMessageContent':
                return <NewMessageContent />
            default:
                return null
        }
    }

    return (
        <ContentContainer>
            <ContentLeftWrapper>
                <ContentLeftBar>
                    <NewMessageButton onClick={() => handleSetActiveFeature('NewMessageContent', 'Nouveau Message')}>+ Nouveau Message</NewMessageButton>
                </ContentLeftBar>
                <MenuLeft>
                    <MenuTitleLeft>
                        <Envelope color={theme.colors.color1} />
                        <MailVisitor>visiteur@portfolio-LP</MailVisitor>
                    </MenuTitleLeft>
                    <MenuItemsLeft>
                        <li onClick={() => handleSetActiveFeature('InboxContent', 'Boîte de réception')}>
                            <MailingServiceButton active={activeFeature === 'InboxContent'}>
                                <Inbox color={theme.colors.color1} />
                                <MailingServiceSpan>Boîte de réception</MailingServiceSpan>
                            </MailingServiceButton>
                        </li>
                        <li onClick={() => handleSetActiveFeature('DraftContent', 'Brouillons')}>
                            <MailingServiceButton active={activeFeature === 'DraftContent'}>
                                <Note color={theme.colors.color11} />
                                <MailingServiceSpan>Brouillons</MailingServiceSpan>
                            </MailingServiceButton>
                        </li>
                        <li onClick={() => handleSetActiveFeature('SentMessagesContent', 'Messages Envoyés')}>
                            <MailingServiceButton active={activeFeature === 'SentMessagesContent'}>
                                <Paperplane color={theme.colors.color10} />
                                <MailingServiceSpan>Messages envoyés</MailingServiceSpan>
                            </MailingServiceButton>
                        </li>
                    </MenuItemsLeft>
                </MenuLeft>
            </ContentLeftWrapper>
            <VerticalBar />
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