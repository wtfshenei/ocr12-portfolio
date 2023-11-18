import styled from "styled-components";
import LogoWindows from "../../components/logoWindows/logoWindows";

export const TaskbarStyled = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
  width: 100%;
  height: 45px;
  background-color: grey;
  color: #FFF;
`

export const WrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`

export const WrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`

export const LogoWindowsSmall = styled(LogoWindows)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: #FFF;
  margin-right: 10px;
`

export const AppIconContainer = styled.div`
  height: 100%;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 7px 3px 7px;
  border-bottom: 2px solid deepskyblue;

  background-color: ${({ $isActive }) => $isActive ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};

  svg {
    width: 30px;
    height: 29px;
    margin-top: 1px;
  }
`