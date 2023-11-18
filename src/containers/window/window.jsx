import React, {useEffect, useState} from 'react';
import {HandleResizable, TitlebarLeft, TitlebarLeftIcon, TitlebarRight, WindowContainer, WindowContent, WindowTitlebar} from "./window.styles";
import Cross from "./assets/cross/cross";
import Minus from "./assets/minus/minus";
import Square from "./assets/square/square";
import Draggable from "react-draggable";
import Restore from "./assets/restore/restore";
import { Resizable } from 'react-resizable'

const Window = ({ props, onClick, isFront, rel, name, content, icon, initialPosition, bringToFront, minimize, isMinimized, onMinimize}) => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [lastPosition, setLastPosition] = useState(null)
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const width = window.innerWidth * 0.7
        const height = window.innerHeight * 0.7
        setSize({ width, height  })

        if (initialPosition) {
            setPosition(initialPosition)
        } else {
            const x = (window.innerWidth - width) / 2;
            const y = (window.innerHeight - height) / 2;
            setPosition({x, y});
        }
    }, [initialPosition]);

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            setLastPosition(position)
        } else {
            setPosition(lastPosition)
        }
        setIsFullScreen(!isFullScreen)
    }

    const handleDragStop = (e, data) => {
        if (!isFullScreen) {
            setPosition({ x: data.x, y: data.y })
        }
    }

    const handleWindowClick = () => {
        bringToFront()
    }

    const handleMinimize = () => {
        onMinimize(rel, position)
        minimize()
    }

    return (
        !isMinimized && (
            <Draggable
                handle={".handle"}
                bounds={"parent"}
                position={isFullScreen ? {x: 0, y: 0} : position}
                onStop={handleDragStop}
                disabled={isFullScreen}
            >
                <Resizable
                    width={size.width}
                    height={size.height}
                    handle={<HandleResizable/>}
                    onResize={(event, {size}) => setSize(size)}
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
                                <Minus onClick={handleMinimize}/>
                                {isFullScreen ? <Restore onClick={toggleFullScreen}/> : <Square onClick={toggleFullScreen}/>}
                                <Cross onClick={onClick}/>
                            </TitlebarRight>
                        </WindowTitlebar>
                        <WindowContent>
                            {content}
                        </WindowContent>
                    </WindowContainer>
                </Resizable>
            </Draggable>
        )
    );
};

export default Window;