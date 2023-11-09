import React from 'react';
import {LogoWindowsSmall, TaskbarStyled, WrapperLeft, WrapperRight} from "./taskbar.styles";
import SystemClock from "../../components/systemClock/systemClock";

const Taskbar = (props) => {
    return (
        <TaskbarStyled {...props}>
            <WrapperLeft>
                <LogoWindowsSmall />
            </WrapperLeft>
            <WrapperRight>
                <SystemClock />
            </WrapperRight>
        </TaskbarStyled>
    );
};

export default Taskbar;