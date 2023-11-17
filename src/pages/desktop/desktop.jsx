import React, {useState} from 'react';
import {DesktopContainer, ShortcutsWrapper, TaskbarDisplay} from "./desktop.styles";
import Shortcut from "../../containers/shortcut/shortcut";
import Window from "../../containers/window/window";
import ThunderbirdIcon from "../../components/apps/thunderbird/thunderbirdIcon";

const Desktop = () => {
    const data = [
        {
            id: 'app1',
            name: 'Contact',
            icon: '/assets/logos/thunderbird/ThunderbirdLogo.png'
        },
        {
            id: 'app2',
            name: 'Test',
            icon: '/assets/logos/thunderbird/ThunderbirdLogo.png'
        }
    ]

    const [openApps, setOpenApps] = useState([])

    const openWindow = (app) => {
        const isAppAlreadyOpen = openApps.some(openApp => openApp.id === app.id)

        if (!isAppAlreadyOpen) {
            const offset = 30
            const x = 100 + openApps.length * offset
            const y = 100 + openApps.length * offset

            const newApp = {...app, position: {x, y}}
            setOpenApps(prevOpenApps => [...prevOpenApps, newApp])
        }
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
                <Window
                    key={`window-${app.id}`}
                    rel={app.id}
                    name={app.name}
                    initialPosition={app.position}
                    onClick={() => closeWindow(app.id)}
                />
            ))}
            <TaskbarDisplay openApps={openApps} />
        </DesktopContainer>
    );
};

export default Desktop;