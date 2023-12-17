import styled from "styled-components";
import {theme} from "../../../../../assets/styles/theme.styles";

export const MessagesWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ul {
    padding: 0;
    margin: 0;
  }
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
  background-color: ${theme.colors.color5};
  
  .draft-display {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
    button {
      background: none;
      border: none;
      width: 1.3em;
      height: 1.3em;
      margin-left: 0.66em;
      
        svg {
          margin: -50%;
          width: 1em;
          height: 1em;
          fill: ${theme.colors.color4};
        }
    }
  }
  
  p {
    padding-top: 0;
    margin-top: 0;
  }
`