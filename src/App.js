import React from 'react';
import {GlobalStyle} from "./assets/styles/globalStyle.styles";
import Router from "./router/router";
import {StyleSheetManager} from "styled-components";

const shouldForwardProp = (prop) => !['handleAxis'].includes(prop)

const App = () => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <>
                <GlobalStyle />
                <Router />
            </>
        </StyleSheetManager>
    )
};

export default App;