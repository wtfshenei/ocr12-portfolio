import React from 'react';
import {MessagesWrapperContent} from "../inbox/inboxContent.styled";
import {useSelector} from "react-redux";
import Dropdown from "../../../../../components/dropdown/dropdown";
import sortItems from "../../../../../utils/sortItems";

const DraftContent = ({ onEditDraft }) => {
    const drafts = useSelector((state) => state.mails.drafts)
    const sortedDrafts = sortItems(drafts)

    return (
        <MessagesWrapperContent>
            <ul>
                {sortedDrafts.map((draft) => (
                <Dropdown key={draft.id} id={draft.id} from={draft.from} subject={draft.subject} date={draft.id} message={draft.message} isDraft={true} onEditDraft={onEditDraft} />
                ))}
            </ul>
        </MessagesWrapperContent>
    );
}

export default DraftContent;