import React from 'react';
import {CircleIcon} from "./userIcon.styled";
import UserIconImg from "./userIconImg";

const UserIcon = (props) => {
    return (
        <CircleIcon {...props}>
            <UserIconImg></UserIconImg>
        </CircleIcon>
    );
};

export default UserIcon;