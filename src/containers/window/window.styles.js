import styled from "styled-components";

export const WindowContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
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
  cursor: move;
`;

export const WindowContent = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  padding: 10px;
  overflow: auto;
`;