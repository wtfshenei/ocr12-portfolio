import React from 'react';
import {DesktopContainer, ShortcutsWrapper, TaskbarDisplay} from "./desktop.styles";
import Shortcut from "../../containers/shortcut/shortcut";
import Window from "../../containers/window/window";
import {useDispatch, useSelector} from "react-redux";
import {frontWindow, openWindow} from "../../redux/windows/windowsSlice";
import {getIconComponent} from "../../utils/iconSelector";
import {getContentComponent} from "../../utils/contentSelector";

const Desktop = () => {
    const data = [
        {
            id: 'app1',
            name: 'Contacts',
            iconType: 'thunderbird',
            contentType: 'thunderbird'
        },
        {
            id: 'app2',
            name: 'C.V.',
            iconType: 'acrobatreader',
            contentType: 'acrobatreader'
        },
        {
            id: 'app3',
            name: 'Projets',
            iconType: 'chrome',
            contentType: 'chrome'
        },
        {
            id: 'app4',
            name: 'Présentation',
            iconType: 'vscode',
            contentType: 'vscode'
        }
    ]

    const dispatch = useDispatch()
    const openApps = useSelector((state) => state.windows.window)
    const frontApp = useSelector((state) => state.windows.frontWindow)

    /**
     * Crée une nouvelle fenêtre lorsque l'on ouvre une app pour la 1ère fois.
     * Crée un décalage lors de l'ouverture de plusieurs apps.
     * Empêche l'ouverture d'une même app plusieurs fois.
     * Met au 1er plan l'app lors de son ouverture.
     */
    const handleOpenWindow = (app) => {
        const isAppAlreadyOpen = openApps.some(openApp => openApp.id === app.id);
        if (!isAppAlreadyOpen) {
            const offset = 30;
            const defaultWindowSize = { width: window.innerWidth * 0.7, height: window.innerHeight * 0.7 };
            const numberOfOpenApps = openApps.length;

            let x = (window.innerWidth - defaultWindowSize.width) / 2 + numberOfOpenApps * offset;
            let y = (window.innerHeight - defaultWindowSize.height) / 2 + numberOfOpenApps * offset;

            const newApp = {
                ...app,
                iconType: app.iconType,
                position: { x, y },
                isMinimized: false
            };
            dispatch(openWindow(newApp));
            dispatch(frontWindow(app.id))
        }
    }

    /**
     * Fonction qui sert à mettre au 1er plan une app.
     */
    const handleBringToFront = (rel) => {
        dispatch(frontWindow(rel))
    }

    return (
        <DesktopContainer>
            <ShortcutsWrapper>
                {data.map(app => (
                    <Shortcut
                        key={`shortcut-${app.id}`}
                        rel={app.id}
                        name={app.name}
                        icon={getIconComponent(app.iconType)}
                        onClick={() => handleOpenWindow(app)}
                    />
                ))}
            </ShortcutsWrapper>
            {openApps.map(app => (
                !app.isMinimized && (
                    <Window
                        key={`window-${app.id}`}
                        rel={app.id}
                        name={app.name}
                        icon={getIconComponent(app.iconType)}
                        content={getContentComponent(app.contentType)}
                        initialPosition={app.position}
                        isFront={app.id === frontApp}
                        bringToFront={() => handleBringToFront(app.id)}
                    />
                )
            ))}
            <TaskbarDisplay openApps={openApps} frontApp={frontApp} />
        </DesktopContainer>
    );
};

export default Desktop;