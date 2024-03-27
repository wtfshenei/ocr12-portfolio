import React from 'react';
import {
    ButtonSession,
    InputButtonContainer,
    LoginUserIcon,
    UserName,
    WrapperCenterTop,
    WrapperColumn
} from "./login.styled";
import {useNavigate} from "react-router-dom";
import {ComponentSeo} from "../loader/loader.styled";

const Login = () => {
    const navigate = useNavigate()

    /**
     * Envoie l'utilisateur vers le bureau.
     */
    const handleClick = () => {
        navigate('/desktop')
    }

    return (
        <WrapperCenterTop>
            <WrapperColumn>
                <ComponentSeo>Ludovic Parriaud - Développeur Front-End - Portfolio</ComponentSeo>
                <LoginUserIcon />
                <UserName>Invité</UserName>
                <InputButtonContainer>
                    <ButtonSession onClick={handleClick}>OK</ButtonSession>
                </InputButtonContainer>
            </WrapperColumn>
        </WrapperCenterTop>
    );
};

export default Login;