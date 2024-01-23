import React from 'react';
import ErrorInputFieldIcon from "./errorInputFieldIcon";
import {ErrorContainer, ErrorIcon} from "./errorInputField.styled";

const ErrorInputField = ({ error }) => {
    return (
        <ErrorContainer>
            <ErrorIcon>
                <ErrorInputFieldIcon/>
            </ErrorIcon>
            <p>{error}</p>
        </ErrorContainer>
    );
};

export default ErrorInputField;