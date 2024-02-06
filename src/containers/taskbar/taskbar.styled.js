import styled from "styled-components";
import LogoWindows from "../../components/logoWindows/logoWindows";
import {theme} from "../../assets/styles/theme.styles";

export const TaskbarStyled = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 1em;
  width: 100%;
  height: 2.9em;
  background-color: ${theme.colors.color6};
  color: ${theme.colors.color3};
`

export const WrapperLeft = styled.div`
    display: flex;
    justify-content: ${({ isMobile }) => isMobile ? 'center' : 'flex-start'};
    align-items: center;
    width: ${({ isMobile }) => isMobile ? '100%' : '70%'};
`

export const WrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`

export const LogoWindowsSmall = styled(LogoWindows)`
    width: 2em;
    height: 2em;
    cursor: pointer;
    fill: ${theme.colors.color3};
    margin-right: ${({ isMobile }) => isMobile ? '0' : '0.66em'};
`

export const AppIconContainer = styled.div`
  height: 100%;
  margin-left: 0.33em;
  margin-right: 0.33em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4em 0.46em 0.2em 0.46em;
  border-bottom: 0.13em solid deepskyblue;

  background-color: ${({ $isActive }) => $isActive ? 'rgba(255, 255, 255, 0.3)' : theme.colors.color7};

  svg {
    width: 2em;
    height: 1.85em;
    margin-top: 0.06em;
  }
`