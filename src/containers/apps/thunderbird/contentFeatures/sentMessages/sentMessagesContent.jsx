import React from 'react';
import {MessagesWrapperContent} from "../inbox/inboxContent.styled";
import {useSelector} from "react-redux";
import Dropdown from "../../../../../components/dropdown/dropdown";
import sortItems from "../../../../../utils/sortItems";

const SentMessagesContent = () => {
    const sentMessages = useSelector((state) => state.mails.sentMessages)
    const sortedSentMessages = sortItems(sentMessages, 'sendDate')

    return (
        <MessagesWrapperContent>
            <ul>
                {sortedSentMessages.map((sentMessage) => (
                    <Dropdown key={sentMessage.id} id={sentMessage.id} from={sentMessage.from} subject={sentMessage.subject} date={sentMessage.sendDate} message={sentMessage.message} isDraft={false} />
                ))}
            </ul>
        </MessagesWrapperContent>
    );
}

export default SentMessagesContent;