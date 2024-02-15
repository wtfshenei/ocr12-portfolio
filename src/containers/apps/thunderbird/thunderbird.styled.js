import styled from "styled-components";
import Button from "../../../components/button/button";
import {theme} from "../../../assets/styles/theme.styles";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`
export const ContentLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${({isMobile}) => isMobile ? 'none' : '250px'};
    width: ${({isMobile}) => isMobile ? '100%' : '25%'};
    height: 100%;
`
export const ContentLeftBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2em;
`
export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  svg {
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
  }
`
export const MailVisitor = styled.span`
  font-weight: bold;
`
export const MenuTitleLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
`
export const MenuItemsLeft = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  svg {
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
  }
`
export const MailingServiceButton = styled(Button)`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: ${(props) => props.active ? 'bold' : ''};
`
export const MailingServiceSpan = styled.span`
  font-size: 1em;
`
export const NewMessageButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11em;
  height: 90%;
  border-radius: 3px;
  background-color: ${theme.colors.color8};
  color: ${theme.colors.color3};
  cursor: pointer;
`
export const ContentRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const ContentRightBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.3em;
  border-bottom: 0.1em solid ${theme.colors.color2};
  
  h2 {
    margin-bottom: 1em;
  }
`
export const ContentRightDisplay = styled.div`
  display: flex;
  justify-content: center;
`
export const VerticalBar = styled.span`
  border: 0.1em solid ${theme.colors.color2};
  width: 0.1em;
  height: 100%;
`
export const FloatingMessageButton = styled.button`
    position: fixed;
    bottom: 3%;
    right: 5%;
    z-index: 10;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`