import React, {useState} from 'react';
import {DesktopContainer, ShortcutsWrapper, TaskbarDisplay} from "./desktop.styles";
import Shortcut from "../../containers/shortcut/shortcut";
import Window from "../../containers/window/window";
import ThunderbirdIcon from "../../containers/apps/thunderbird/thunderbirdIcon";
import AcrobatreaderIcon from "../../containers/apps/acrobatreader/acrobatreaderIcon";
import ChromeIcon from "../../containers/apps/chrome/chromeIcon";
import Thunderbird from "../../containers/apps/thunderbird/thunderbird";
import Acrobatreader from "../../containers/apps/acrobatreader/acrobatreader";
import Chrome from "../../containers/apps/chrome/chrome";

const Desktop = () => {
    const data = [
        {
            id: 'app1',
            name: 'Contacts',
            icon: <ThunderbirdIcon />,
            content: <Thunderbird />
        },
        {
            id: 'app2',
            name: 'C.V.',
            icon: <AcrobatreaderIcon />,
            content: <Acrobatreader />
        },
        {
            id: 'app3',
            name: 'Projets',
            icon: <ChromeIcon />,
            content: <Chrome />
        }
    ]

    const [openApps, setOpenApps] = useState([])
    const [frontApp, setFrontApp] = useState(null)

    const openWindow = (app) => {
        const isAppAlreadyOpen = openApps.some(openApp => openApp.id === app.id)

        if (!isAppAlreadyOpen) {
            const offset = 30
            const x = 100 + openApps.length * offset
            const y = 100 + openApps.length * offset

            const newApp = {...app, position: {x, y}, isMinimized: false}
            setOpenApps(prevOpenApps => [...prevOpenApps, newApp])

            bringToFront(app.id)
        }
    }

    const bringToFront = (appId) => {
        setFrontApp(appId)
    }

    const minimizeWindow = (appId) => {
        setOpenApps(prevOpenApps =>
            prevOpenApps.map(app =>
                app.id === appId ? {...app, isMinimized: true} : app
            )
        );
    }

    const handleMinimize = (appId, position) => {
        const updatedApps = openApps.map(app =>
            app.id === appId ? { ...app, isMinimized: true, minimizedPosition: position } : app
        );
        setOpenApps(updatedApps);
    };

    const restoreWindow = (appId) => {
        const updatedApps = openApps.map(app =>
            app.id === appId ? { ...app, isMinimized: false, position: app.minimizedPosition } : app
        );
        setOpenApps(updatedApps);
        setFrontApp(appId);
    }

    const closeWindow = (appId) => {
        setOpenApps(prevOpenApps => prevOpenApps.filter(app => app.id !== appId))
    }

    return (
        <DesktopContainer>
            <ShortcutsWrapper>
                {data.map(app => (
                    <Shortcut
                        key={`shortcut-${app.id}`}
                        rel={app.id}
                        name={app.name}
                        icon={app.icon}
                        onClick={() => openWindow(app)}
                    />
                ))}
            </ShortcutsWrapper>
            {openApps.map(app => (
                !app.isMinimized && (
                    <Window
                        key={`window-${app.id}`}
                        rel={app.id}
                        name={app.name}
                        content={app.content}
                        icon={app.icon}
                        initialPosition={app.position}
                        isFront={app.id === frontApp}
                        isMinimized={app.isMinimized}
                        bringToFront={() => bringToFront(app.id)}
                        onMinimize={(id, pos) => handleMinimize(id, pos)}
                        minimize={() => minimizeWindow(app.id)}
                        onClick={() => closeWindow(app.id)}
                    />
                )
            ))}
            <TaskbarDisplay openApps={openApps} frontApp={frontApp} bringToFront={bringToFront} restoreWindow={restoreWindow} />
        </DesktopContainer>
    );
};

export default Desktop;