import React, {useEffect, useState} from 'react';
import {ButtonWindow, TitlebarLeft, TitlebarLeftIcon, TitlebarRight, WindowContainer, WindowContent, WindowTitlebar} from "./window.styled";
import Cross from "./assets/cross/cross";
import Minus from "./assets/minus/minus";
import Square from "./assets/square/square";
import Draggable from "react-draggable";
import Restore from "./assets/restore/restore";
import {useDispatch, useSelector} from "react-redux";
import {closeWindow, frontWindow, maximizeWindow, minimizeWindow, positionWindow, restoreWindow} from "../../redux/windows/windowsSlice";

const Window = ({ props, rel, name, content, icon, isFront, initialPosition}) => {
    const dispatch = useDispatch()
    const posWin = useSelector((state) => state.windows.window.find(win => win.id === rel))
    const [position, setPosition] = useState(posWin ? posWin.position : initialPosition || { x: 0, y: 0 })
    const [isFullScreen, setIsFullScreen] = useState(false)

    /**
     * Ouvre, par défaut, une fenêtre au milieu de l'écran.
     * Sinon l'ouvre à son dernier emplacement sauvegardé.
     */
    useEffect(() => {
        if (initialPosition && !posWin) {
            setPosition(initialPosition);
        } else if (posWin && posWin.position) {
            setPosition(posWin.position)
        }
    }, [initialPosition, posWin]);

    /**
     * Fonction qui sert à switch entre plein écran et fenêtré
     */
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
        if (isFullScreen) {
            dispatch(restoreWindow(rel))
        } else {
            dispatch(maximizeWindow(rel))
        }
    }

    /**
     * Fonction qui sert à enregistrer la position d'une fenêtre déplacée
     */
    const handleDragStop = (e, data) => {
        if (!isFullScreen) {
            const newPosition = { x: data.x, y: data.y };
            setPosition(newPosition);
            dispatch(positionWindow({ id: rel, position: newPosition}));
        }
    }

    /**
     * Fonction qui sert à minimiser une fenêtre
     */
    const handleMinimize = () => {
        dispatch(minimizeWindow(rel, isFullScreen))
    }

    /**
     * Fonction qui sert à fermer une fenêtre
     */
    const handleClose = () => {
        dispatch(closeWindow(rel))
    }

    /**
     * Fonction qui sert à mettre une fenêtre au 1er plan.
     * En cliquant sur la fenêtre.
     */
    const handleWindowClick = () => {
        dispatch(frontWindow(rel))
    }

    return (
        <Draggable
            handle={".handle"}
            bounds={"parent"}
            position={isFullScreen ? {x: 0, y: 0} : position}
            onStop={handleDragStop}
            disabled={isFullScreen}
        >
            <WindowContainer {...props} rel={rel} $isFullScreen={isFullScreen} $isFront={isFront} onClick={handleWindowClick}>
                <WindowTitlebar className={"handle"}>
                    <TitlebarLeft>
                        <TitlebarLeftIcon>
                            {icon}
                        </TitlebarLeftIcon>
                        {name}
                    </TitlebarLeft>
                    <TitlebarRight>
                        <ButtonWindow onClick={handleMinimize}>
                            <Minus />
                        </ButtonWindow>
                        {isFullScreen ?
                            <ButtonWindow onClick={toggleFullScreen}>
                                <Restore />
                            </ButtonWindow>
                            :
                            <ButtonWindow onClick={toggleFullScreen}>
                                <Square />
                            </ButtonWindow>}
                        <ButtonWindow onClick={handleClose}>
                            <Cross />
                        </ButtonWindow>
                    </TitlebarRight>
                </WindowTitlebar>
                <WindowContent>
                    {content}
                </WindowContent>
            </WindowContainer>
        </Draggable>
    );
};

export default Window;