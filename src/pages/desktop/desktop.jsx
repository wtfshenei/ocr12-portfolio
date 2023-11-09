import React, {useState} from 'react';
import {DesktopContainer, ShortcutsWrapper, TaskbarDisplay} from "./desktop.styles";
import Shortcut from "../../containers/shortcut/shortcut";
import Window from "../../containers/window/window";

const Desktop = () => {
    const [isWindowOpen, setIsWindowOpen] = useState(false)

    const openWindow = () => {
        setIsWindowOpen(true)
    }

    return (
        <DesktopContainer>
            <ShortcutsWrapper>
                <Shortcut onClick={openWindow} />
                <Shortcut onClick={openWindow} />
                <Shortcut onClick={openWindow} />
                <Shortcut onClick={openWindow} />
                <Shortcut onClick={openWindow} />
            </ShortcutsWrapper>
            {isWindowOpen && <Window />}
            <TaskbarDisplay />
        </DesktopContainer>
    );
};

export default Desktop;