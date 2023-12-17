import styled from "styled-components";
import Button from "../../components/button/button";
import {theme} from "../../assets/styles/theme.styles";

export const WindowContainer = styled.div`
  position: fixed;
  width: ${({ $isFullScreen }) => $isFullScreen ? '100%' : '70vw'};
  height: ${({ $isFullScreen }) => $isFullScreen ? 'calc(100% - 3em)' : '70vh'};
  background-color: ${theme.colors.color3};
  box-shadow: 0 0.25em 0.53em rgba(0, 0, 0, 0.1);
  border: ${({ $isFront }) => $isFront ? `0.13em solid ${theme.colors.color8}` : `0.13em solid ${theme.colors.color4}`};
  z-index: ${({ $isFront }) => $isFront ? 2000 : 1000};
  overflow: auto;
  resize: both;
`;

export const WindowTitlebar = styled.div`
  width: 100%;
  height: 2em;
  background-color: ${theme.colors.color6};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.33em 0 0.66em;
  
  &.handle {
    cursor: move;
  }
`;

export const TitlebarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  font-weight: bold;
  margin-bottom: 0.13em;
`

export const TitlebarLeftIcon = styled.div`
  width: 1.33em;
  height: 1.33em;
  margin-right: 0.66em;
`

export const TitlebarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  
  svg {
    width: 1.1em;
    height: 1.1em;
    margin-left: 1em;
    cursor: pointer;
  }
`

export const WindowContent = styled.div`
  width: 100%;
  height: calc(100% - 2em);
  //padding: 10px;
  overflow: auto;
`;

// export const HandleResizable = styled.span`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   bottom: 0;
//   right: 0;
//   cursor: se-resize;
// `

export const ButtonWindow = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 1.66em;
  height: 2em;
  margin-right: 0.33em;
  
  svg {
    padding: 0;
    margin: 0;
  }
  
  &:nth-child(3) {
    margin-right: 0;
  }
`