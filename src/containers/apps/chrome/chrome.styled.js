import styled, {keyframes} from "styled-components";
import Button from "../../../components/button/button";
import {theme} from "../../../assets/styles/theme.styles";
import Carousel from "../../../components/carousel/carousel";

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
  padding: 0 0.5em;
  position: relative;
  max-width: 100vw;
  gap: 15px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
  }

  ul li::before {
    content: '★';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.color1};
    font-size: 16px;
  }
  
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  
  h3 {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    background-color: ${theme.colors.color6};
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  
  a {
    padding-bottom: 10px;
    
    &:visited, &:link {
      color: blue;
      text-decoration: underline;
    }
  }
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
export const CarouselProjects = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
    height: 100%;

    svg {
      height: 50px;
      width: 50px;
      fill: grey;
    }
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
  
  .img-container {
    position: relative;

    img {
      max-width: 100%;
      height: auto;
    }
    
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.15));
    }
    
    .img-txt {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
    }
  }
  
  
`;