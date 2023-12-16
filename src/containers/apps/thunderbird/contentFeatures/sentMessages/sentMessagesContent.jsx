import React, {useState} from 'react';
import {Message, MessageDisplay, MessagesListContainer, MessagesWrapperContent} from "../inbox/inboxContent.styles";
import {useSelector} from "react-redux";
import {theme} from "../../../../../assets/styles/theme.styles";
import {dateFormater} from "../../../../../utils/dateFormater";

const SentMessagesContent = () => {
    const [activeSentMessageId, setActiveSentMessageId] = useState(null);
    const sentMessages = useSelector((state) => state.mails.sentMessages)

    const toggleActiveSentMessages = (id) => {
        setActiveSentMessageId(activeSentMessageId === id ? null : id);
    }

    return (
        <MessagesWrapperContent>
            {sentMessages.map((sentMessage) => (
                <MessagesListContainer
                    key={sentMessage.id}
                    onClick={() => toggleActiveSentMessages(sentMessage.id)}
                    style={{ backgroundColor: activeSentMessageId === sentMessage.id ? theme.colors.color1 : '' }}
                >
                    <Message>
                        <div className={'first-line'}>
                            <span>{sentMessage.from}</span>
                            <span>{dateFormater(sentMessage.sendDate)}</span>
                        </div>
                        <span>{sentMessage.subject}</span>
                    </Message>
                </MessagesListContainer>
            ))}
            {sentMessages.map((sentMessage) => (
                activeSentMessageId === sentMessage.id && (
                    <MessageDisplay key={sentMessage.id}>
                        <p>{sentMessage.message}</p>
                    </MessageDisplay>
                )
            ))}
        </MessagesWrapperContent>
    );
}

export default SentMessagesContent;