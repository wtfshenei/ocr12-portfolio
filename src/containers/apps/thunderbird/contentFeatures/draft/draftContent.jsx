import React, {useState} from 'react';
import {Message, MessageDisplay, MessagesListContainer, MessagesWrapperContent} from "../inbox/inboxContent.styles";
import {useSelector} from "react-redux";
import {theme} from "../../../../../assets/styles/theme.styles";
import {dateFormater} from "../../../../../utils/dateFormater";

const DraftContent = () => {
    const [activeDraftId, setActiveDraftId] = useState(null);
    const drafts = useSelector((state) => state.mails.drafts)

    const toggleActiveDraft = (id) => {
        setActiveDraftId(activeDraftId === id ? null : id);
    }

    return (
        <MessagesWrapperContent>
            {drafts.map((draft) => (
                <MessagesListContainer
                    key={draft.id}
                    onClick={() => toggleActiveDraft(draft.id)}
                    style={{ backgroundColor: activeDraftId === draft.id ? theme.colors.color1 : '' }}
                >
                    <Message>
                        <div className={'first-line'}>
                            <span>{draft.from}</span>
                            <span>{dateFormater(draft.id)}</span>
                        </div>
                        <span>{draft.subject}</span>
                    </Message>
                </MessagesListContainer>
            ))}
            {drafts.map((draft) => (
                activeDraftId === draft.id && (
                    <MessageDisplay key={draft.id}>
                        <p>{draft.message}</p>
                    </MessageDisplay>
                )
            ))}
        </MessagesWrapperContent>
    );
}

export default DraftContent;