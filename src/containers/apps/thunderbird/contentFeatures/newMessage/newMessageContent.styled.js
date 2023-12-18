import styled from "styled-components";
import {theme} from "../../../../../assets/styles/theme.styles";
import Button from "../../../../../components/button/button";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5em;
`
export const InputMessage = styled.textarea`
  width: 100%;
  height: 30em;
  padding: 1em;
  border-radius: 5px;
  border: 0.1em solid ${theme.colors.color2};
  resize: vertical;
`
export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  width: 100%;

  label {
    width: 10%
  }

  input {
    margin-left: 1em;
    height: 2em;
    width: 90%;
    padding: 1em;
    border-radius: 5px;
    border: 0.1em solid ${theme.colors.color2};
  }
`
export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 8em;
  height: 3em;
  margin-top: 3em;
  border-radius: 5px;
  border: 0.1em solid ${theme.colors.color2};
  font-size: 1em;
  
  svg {
    height: 1.5em;
    width: 1.5em;
    fill: ${theme.colors.color10}
  }
`