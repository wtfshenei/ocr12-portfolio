import styled from "styled-components";
import {theme} from "../../assets/styles/theme.styles";

export const MenuButtonWrapper = styled.div`
    position: absolute;
    bottom: 3%;
    left: 5%;
    width: 5em;
    height: 5em;
    padding: 20px;
`
export const MenuButton = styled.button`
    z-index: 200;
    border: 1px solid black;
    border-radius: 50%;
    background: ${theme.colors.color3};
    width: 3em;
    height: 3em;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`
export const MenuDisplay = styled.div`
    position: fixed;
    left: 0;
    top: calc(0 + 2em);
    max-width: 340px;
    height: 30%;
    background-color: grey;
    z-index: 100;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
`