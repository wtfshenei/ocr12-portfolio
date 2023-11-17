import React from 'react';
import {AppIcon, LogoWindowsSmall, TaskbarStyled, WrapperLeft, WrapperRight} from "./taskbar.styles";
import SystemClock from "../../components/systemClock/systemClock";

const Taskbar = ({props, openApps }) => {
    return (
        <TaskbarStyled {...props}>
            <WrapperLeft>
                <LogoWindowsSmall />
                {openApps.map(app => (
                    <AppIcon key={`icon-${app.id}`} rel={app.id} src={app.icon} alt={app.name} />
                ))}
            </WrapperLeft>
            <WrapperRight>
                <SystemClock />
            </WrapperRight>
        </TaskbarStyled>
    );
};

export default Taskbar;