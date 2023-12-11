import styled from "styled-components";
import UserIcon from "../../components/userIcon/userIcon";
import Button from "../../components/button/button";
import {theme} from "../../assets/styles/theme.styles";

export const WrapperCenterTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15em;
`

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginUserIcon = styled(UserIcon)`
  width: 12em;
  height: 12em;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  path {
    fill: ${theme.colors.color6};
  }
`

export const UserName = styled.h2`
  font-size: 2.5em;
  margin: 0.5em 0;
  color: ${theme.colors.color3};
`

export const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20em;
  height: 2.1em;
  margin-top: 1.3em;
`;

// export const InputSession = styled(Input)`
//   width: 300px;
//   height: 35px;
//   padding: 10px;
//   color: #333;
//   border: 2px solid #ddd;
//   border-radius: 3px;
//   outline: none;
// `
//
// export const ButtonSessionPassword = styled(Button)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   height: 100%;
//   color: white;
//   background-color: #ddd;
//   border: none;
//   padding: 0 15px;
//   cursor: pointer;
//   border-radius: 0 3px 3px 0;
//   outline: none;
// `

export const ButtonSession = styled(Button)`
  width: 10em;
  height: 3.5em;
  border: 0.2em solid ${theme.colors.color9};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.color3};
  padding: 0 1em;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`