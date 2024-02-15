import React, {useEffect, useRef, useState} from 'react';
import MenuIcon from "../utils/icons/menu/menuIcon";
import {MenuButtonOff, MenuDisplay} from "./checkContent.styled";
import {useMobile} from "../../mobile/utils/MobileContext";

const CheckContent = ({children}) => {
    const isMobile = useMobile();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    if (isMobile) {
        return (
            <>
                <MenuButtonOff ref={buttonRef} onClick={toggleMenu}>
                    <MenuIcon/>
                </MenuButtonOff>
                {menuOpen && (
                    <MenuDisplay ref={menuRef}>
                        {children}
                    </MenuDisplay>
                )}
            </>
        );
    } else {
        return <>{children}</>;
    }
};

export default CheckContent;