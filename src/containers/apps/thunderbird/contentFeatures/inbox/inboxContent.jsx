import React, {useState} from 'react';
import {Message, MessageDisplay, MessagesListContainer, MessagesWrapperContent} from "./inboxContent.styled";
import {theme} from "../../../../../assets/styles/theme.styles";
import {dateFormater} from "../../../../../utils/dateFormater";

const InboxContent = () => {
    const [activeMail, setActiveMail] = useState(false)

    const toggleActiveMail = () => {
        setActiveMail(!activeMail)
    }

    return (
        <MessagesWrapperContent>
            <MessagesListContainer onClick={toggleActiveMail} style={{ backgroundColor: activeMail ? `${theme.colors.color1}` : '' }}>
                <Message>
                    <div className={'first-line'}>
                        <span>Ludovic Parriaud</span>
                        <span>{dateFormater(Date.now())}</span>
                    </div>
                    <span>Bienvenue sur mon portfolio !</span>
                </Message>
            </MessagesListContainer>
            {activeMail && (
                <MessageDisplay>
                    <p>Bonjour !</p>
                    <p>Je vous souhaite la bienvenue sur mon portfolio.</p>
                    <p>Cette application vous permet de me contacter directement en m'envoyant un message via le bouton '+ Nouveau Message' présent en haut à gauche.</p>
                    <p>Tant que votre message n'a pas été envoyé avec succès, celui-ci reste accessible en tant que Brouillon.</p>
                    <p>En vous souhaitant une agréable visite,</p>
                    <p>Ludovic Parriaud</p>
                </MessageDisplay>
            )}
        </MessagesWrapperContent>
    );
};

export default InboxContent;