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
  width: 50%;
`

export const WrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

export const LogoWindowsSmall = styled(LogoWindows)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: #FFF;
`

export const AppIcon = styled.img`
  width: 50px;
  height: 30px;
  margin-left: 15px;
`