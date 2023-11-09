import styled from "styled-components";
import UserIcon from "../../components/userIcon/userIcon";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

export const WrapperCenterTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 250px;
`

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginUserIcon = styled(UserIcon)`
  width: 200px;
  height: 200px;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  path {
    fill: grey;
  }
`

export const UserName = styled.h2`
  font-size: 2.5em;
  margin: 20px 0;
  color: #fff;
`

export const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 35px;
  margin-top: 20px;
`;

export const InputSession = styled(Input)`
  width: 300px;
  height: 35px;
  padding: 10px;
  color: #333;
  border: 2px solid #ddd;
  border-radius: 3px;
  outline: none;
`

export const ButtonSessionPassword = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  color: white;
  background-color: #ddd;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  outline: none;
`

export const ButtonSession = styled(Button)`
  width: 130px;
  height: 45px;
  border: 2px solid #ddd;
  background-color: rgba(255, 255, 255, 0.1);
  color: #FFF;
  padding: 0 15px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`