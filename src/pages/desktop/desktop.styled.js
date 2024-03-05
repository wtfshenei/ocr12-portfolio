import styled from "styled-components";
import Taskbar from "../../containers/taskbar/taskbar";
import logoBackground from "./logoLP.png"

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100dvh - 2.9em);
  overflow: hidden;
  background-image: url(${logoBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;  
`

export const TaskbarDisplay = styled(Taskbar)`
  position: fixed;
  bottom: 0;
`

export const ShortcutsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em;
`