import styled from "styled-components";
import {theme} from "../../../../../assets/styles/theme.styles";

export const MessagesWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const MessagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3em;
  border-bottom: 0.1em solid ${theme.colors.color2};
  cursor: pointer;
`
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0.33em;
  
  .first-line {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
export const MessageDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1em;
  width: 100%;
  white-space: pre-wrap;
  
  p {
    padding-top: 0;
    margin-top: 0;
  }
`