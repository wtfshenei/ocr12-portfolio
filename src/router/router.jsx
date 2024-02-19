import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/loader/loader";
import Login from "../pages/login/login";
import Desktop from "../pages/desktop/desktop";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Loader />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/desktop"} element={<Desktop />} />
                <Route path={"/*"} element={<Desktop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;