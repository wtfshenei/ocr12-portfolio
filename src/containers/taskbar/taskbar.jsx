import React from 'react';
import {AppIconContainer, LogoWindowsSmall, TaskbarStyled, WrapperLeft, WrapperRight} from "./taskbar.styled";
import SystemClock from "../../components/systemClock/systemClock";
import {useDispatch, useSelector} from "react-redux";
import {frontWindow, restoreWindow, minimizeWindow} from '../../redux/windows/windowsSlice'
import {getIconComponent} from "../../utils/iconSelector";

const Taskbar = ({ props }) => {
    const dispatch = useDispatch()
    const openApps = useSelector((state) => state.windows.window)
    const frontApp = useSelector((state) => state.windows.frontWindow)

    /**
     * Pour icônes de la barre des tâches.
     * Fonction qui sert à minimiser une app si celle-ci est présente sur le bureau et au 1er plan.
     * Sinon met au 1er plan une app présente sur le bureau en arrière-plan.
     * Sinon fait réapparaitre une app minimisée en la mettant au 1er plan.
     */
    const handleIconClick = (appId) => {
        const app = openApps.find(win => win.id === appId);
        if (app) {
            if (app.isFront) {
                dispatch(minimizeWindow(appId));
            } else {
                if (app.isMinimized) {
                    dispatch(restoreWindow(appId));
                }
                dispatch(frontWindow(appId));
            }
        }
    }

    return (
        <TaskbarStyled {...props}>
            <WrapperLeft>
                <LogoWindowsSmall />
                {openApps.map(app => (
                    <AppIconContainer
                        key={`icon-${app.id}`}
                        onClick={() => handleIconClick(app.id, app.isMinimized)}
                        $isActive={app.id === frontApp}
                    >
                        {getIconComponent(app.iconType)}
                    </AppIconContainer>
                ))}
            </WrapperLeft>
            <WrapperRight>
                <SystemClock />
            </WrapperRight>
        </TaskbarStyled>
    );
};

export default Taskbar;