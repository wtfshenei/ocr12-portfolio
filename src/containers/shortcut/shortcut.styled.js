import styled from "styled-components";
import {theme} from "../../assets/styles/theme.styles";

export const ShortcutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 6.66em;
  width: 100%;
  cursor: pointer;
  padding: 0.66em;
  transition: background 0.3s, box-shadow 0.3s;
  
  svg {
    height: 3.2em;
    width: auto;
    fill: ${theme.colors.color3};
  }
  
  h3 {
    margin: 0;
    color: ${theme.colors.color3};
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 0.13em rgba(255, 255, 255, 0.5);
  }
`