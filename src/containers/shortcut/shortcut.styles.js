import styled from "styled-components";

export const ShortcutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  transition: background 0.3s, box-shadow 0.3s;
  
  svg {
    height: 50px;
    width: auto;
    fill: #FFF;
  }
  
  h3 {
    margin: 0;
    color: #FFF;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`