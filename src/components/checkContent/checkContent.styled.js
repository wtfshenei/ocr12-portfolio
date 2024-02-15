import styled from "styled-components";

export const MenuButtonOff = styled.button`
    position: absolute; 
    bottom: 3%; 
    left: 5%; 
    z-index: 200;
    border: 1px solid black;
    border-radius: 50%;
    background: none;
    width: 3em;
    height: 3em;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`
export const MenuButtonOn = styled.button`
    position: absolute;
    bottom: 3%;
    left: 5%; 
    z-index: 200;
    border: 1px solid white;
    border-radius: 50%;
    background: none;
    width: 3em;
    height: 3em;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    
    svg {
        fill: white;
    }
`
export const MenuDisplay = styled.div`
    position: fixed;
    left: 0;
    top: calc(0 + 2em);
    max-width: 340px;
    height: 50%;
    background-color: grey;
    z-index: 100;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
`
export const CloseMenuIcon = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
`;