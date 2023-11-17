import styled from "styled-components";

export const WindowContainer = styled.div`
  position: fixed;
  width: ${({ $isFullScreen }) => $isFullScreen ? '100%' : '70vw'};
  height: ${({ $isFullScreen }) => $isFullScreen ? 'calc(100% - 45px)' : '70vh'};
  z-index: 1000;
  border: 2px solid black;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const WindowTitlebar = styled.div`
  width: 100%;
  height: 30px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &.handle {
    cursor: move;
  }
`;

export const TitlebarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  font-weight: bold;
`

export const TitlebarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  
  svg {
    width: 16px;
    height: 16px;
    margin-left: 15px;
    cursor: pointer;
  }
`

export const WindowContent = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  padding: 10px;
  overflow: auto;
`;

export const HandleResizable = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  right: 0;
  cursor: se-resize;
`