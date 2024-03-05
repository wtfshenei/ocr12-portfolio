import styled from "styled-components";
import {theme} from "../../../assets/styles/theme.styles";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`
export const ContentLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${({isMobile}) => isMobile ? 'none' : '250px'};
    width: ${({isMobile}) => isMobile ? '100%' : '25%'};
    height: 100%;
    padding: 0.25em;
    border-right: solid 0.1em ${theme.colors.color6};
`
export const ContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1em;
    gap: 2em;
    
    span {
        font-weight: bold;
    }
`
export const RowItemsTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.35em;
    height: 1.5em;
    
    svg {
        margin-top: 0.15em;
        width: 1em;
        height: 1em;
    }
    
    p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        text-transform: uppercase;
    }
`
export const RowItems = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.35em;
    height: 1.5em;
    
    .js-color {
        fill: yellow;
    }
    
    svg {
        width: 1em;
        height: 1em;
    }
    
    p {
        margin: 0;
        padding: 0;
    }
`
export const MenuItemsLeft = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin: 0 1em;

    svg {
        height: 1em;
        width: 1em;
        margin-top: 0.5em;
    }
    
    .child2 {
        margin: 0 1.5em;
    }

    .child3 {
        margin: 0 3.5em;
    }

    a {
        text-decoration: none;
        color: inherit;
        
        &:hover, &:visited, &:active {
            text-decoration: none;
            color: inherit;
        }
    }
`
export const PictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        }
    }
`
export const TxtsContainer = styled.div`
    p {
        margin-bottom: 1.5em;
    }
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 100%;
`
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    transition: transform 0.3s ease;
    position: relative;
    
    svg {
        width: 100%;
        height: 100%;
        fill: ${theme.colors.color1};
        transition: opacity 0.3s ease;
    }
    
    span {
        position: absolute;
        bottom: -2em;
        width: 100%;
        text-align: center;
        font-size: 0.75em;
        color: ${theme.colors.color1};
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(100,149,237, 0.8);
    }
`