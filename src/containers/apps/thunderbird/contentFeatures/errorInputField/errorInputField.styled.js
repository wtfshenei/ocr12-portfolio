import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: -1em;
  
  p {
    color: red;
    margin-left: 0.25em;
  }
`

export const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1em;
  width: 1em;
  border-radius: 50%;
  border: 0.1em solid red;
  
  svg {
    height: 100%;
    width: 100%;
    fill: red;
  }
`