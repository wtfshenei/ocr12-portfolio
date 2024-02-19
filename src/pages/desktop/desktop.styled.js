import styled from "styled-components";
import Taskbar from "../../containers/taskbar/taskbar";

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100dvh - 2.9em);
  overflow: hidden;
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