import styled, {keyframes} from "styled-components";
import Button from "../../../components/button/button";

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
  height: 40px;
  background-color: burlywood;
  padding: 0 10px;
  
  input {
    width: 70%;
    height: 30px;
    border-radius: 30px;
    border: none;
    padding: 0 15px;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 35px;
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
  margin-right: 15px;
  
  svg {
    height: 15px;
    width: 15px;
    fill: ${({ disabled }) => disabled ? 'grey' : 'white' }
  }
`
export const RightMainBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: 15px;
  
  svg {
    height: 20px;
    width: 20px;
    fill: dodgerblue;
  }
`
export const BookmarksBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: cadetblue;
  padding: 0 15px;
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
  border: 4px solid darkgrey;
  border-top: 4px solid cornflowerblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
  margin-right: 5px;
  color: white;

  &:hover {
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    height: 15px;
    width: 15px;
    fill: ${({ disabled }) => disabled ? 'darkgrey' : 'white' }
  }
`
export const BookmarkButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  background: none;
  border: none;
  margin-right: 5px;
  color: white;

  ${({ isActive }) => isActive && `
    background-color: lightblue;
    border-radius: 50px;
    color: black;
    font-weight: bold;
    
    svg {
      fill: black;  
    }
  `}

  &:hover {
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    display: flex;
    align-items: center;
    height: 13px;
    width: 13px;
    margin-right: 5px;
    fill: white;
  }
`