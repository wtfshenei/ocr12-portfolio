import React from 'react';
import {ShortcutWrapper} from "./shortcut.styles";

const Shortcut = ( {rel, name, icon, onClick} ) => {
    return (
        <ShortcutWrapper rel={rel} onClick={onClick}>
            {icon}
            <h3>{name}</h3>
        </ShortcutWrapper>
    );
};

export default Shortcut;