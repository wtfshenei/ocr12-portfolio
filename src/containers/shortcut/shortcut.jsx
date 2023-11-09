import React from 'react';
import {ShortcutWrapper} from "./shortcut.styles";
import LogoWindows from "../../components/logoWindows/logoWindows";

const Shortcut = ( {onClick} ) => {
    return (
        <ShortcutWrapper onClick={onClick}>
            <LogoWindows />
            <h3>TEST</h3>
        </ShortcutWrapper>
    );
};

export default Shortcut;