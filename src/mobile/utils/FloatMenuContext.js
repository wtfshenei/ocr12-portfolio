import React, { createContext, useContext, useState } from 'react';

const FloatMenuContext = createContext();

export const useFloatMenu = () => useContext(FloatMenuContext);

export const FloatMenuProvider = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(false);

    const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);
    const showMenuButton = (show) => setIsMenuButtonVisible(show);

    return (
        <FloatMenuContext.Provider value={{ isMenuVisible, toggleMenuVisibility, isMenuButtonVisible, showMenuButton }}>
            {children}
        </FloatMenuContext.Provider>
    );
};