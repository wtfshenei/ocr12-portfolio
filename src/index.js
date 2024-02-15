import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {MobileProvider} from "./mobile/utils/MobileContext";
import {FloatMenuProvider} from "./mobile/utils/FloatMenuContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MobileProvider>
            <FloatMenuProvider>
                <App/>
            </FloatMenuProvider>
        </MobileProvider>
    </Provider>
);