import styled, {keyframes} from "styled-components";
import Button from "../../../components/button/button";
import {theme} from "../../../assets/styles/theme.styles";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`
export const HeaderNavigator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MainBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 2.2em;
  background-color: burlywood;
  padding: 0 0.8em;
  
  input {
    width: 70%;
    height: 2em;
    border-radius: 2em;
    border: none;
    padding: 0 1em;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 2.1em;
    background: none;
    border: none;
    
    &:hover {
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`
export const LeftMainBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-right: 1em;
  
  svg {
    height: 1em;
    width: 1em;
    fill: ${({ disabled }) => disabled ? theme.colors.color2 : theme.colors.color3 }
  }
`
export const RightMainBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: 1em;
  
  svg {
    height: 1.2em;
    width: 1.2em;
    margin-right: 1em;
  }
`
export const BookmarksBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 2em;
  background-color: cadetblue;
  padding: 0 1em;
`
export const ContentNavigator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Loading = styled.div`
  border: 0.25em solid ${theme.colors.color2};
  border-top: 0.25em solid ${theme.colors.color1};
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  animation: ${spin} 1s linear infinite;
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const ButtonNavigator = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  background: none;
  border: none;
  margin-right: 0.3em;
  color: ${theme.colors.color3};

  &:hover {
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    height: 1em;
    width: 1em;
    fill: ${({ disabled }) => disabled ? theme.colors.color2 : theme.colors.color3 }
  }
`
export const BookmarkButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  background: none;
  border: none;
  margin-right: 0.33em;
  color: ${theme.colors.color3};

  ${({ isActive }) => isActive && `
    background-color: ${theme.colors.color5};
    border-radius: 50px;
    color: ${theme.colors.color4};
    font-weight: bold;
    
    svg {
      fill: ${theme.colors.color4};  
    }
  `}

  &:hover {
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    display: flex;
    align-items: center;
    height: 0.98em;
    width: 0.98em;
    margin-right: 0.33em;
    fill: ${theme.colors.color3};
  }
`