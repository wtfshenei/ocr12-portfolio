import React from 'react';
import {GlobalStyle} from "./assets/styles/globalStyle.styles";
import Router from "./router/router";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    )
};

export default App;