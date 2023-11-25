import React from 'react';
import {AppIconContainer, LogoWindowsSmall, TaskbarStyled, WrapperLeft, WrapperRight} from "./taskbar.styles";
import SystemClock from "../../components/systemClock/systemClock";
import {useDispatch, useSelector} from "react-redux";
import {frontWindow, restoreWindow, minimizeWindow} from '../../redux/windows/windowsSlice'
import {getIconComponent} from "../../utils/iconSelector";

const Taskbar = ({ props }) => {
    const dispatch = useDispatch()
    const openApps = useSelector((state) => state.windows.window)
    const frontApp = useSelector((state) => state.windows.frontWindow)

    const handleIconClick = (appId, isMinimized) => {
        if (isMinimized) {
            dispatch(restoreWindow(appId));
            dispatch(frontWindow(appId))
        } else {
            dispatch(minimizeWindow(appId));
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