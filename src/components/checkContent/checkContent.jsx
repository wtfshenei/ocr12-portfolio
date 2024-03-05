import React, {useEffect, useRef, useState} from 'react';
import MenuIcon from "../utils/icons/menu/menuIcon";
import {MenuButton, MenuButtonWrapper, MenuDisplay} from "./checkContent.styled";
import {useMobile} from "../../mobile/utils/MobileContext";

const CheckContent = ({children}) => {
    const isMobile = useMobile();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        const handleItemMenuClick = (event) => {
            if (event.target.closest('.item-menu')) {
                setMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('click', handleItemMenuClick)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('click', handleItemMenuClick)
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    if (isMobile) {
        return (
            <>
                <MenuButtonWrapper>
                    <MenuButton ref={buttonRef} onClick={toggleMenu}>
                        <MenuIcon/>
                    </MenuButton>
                </MenuButtonWrapper>
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