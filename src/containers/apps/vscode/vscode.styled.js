import styled from "styled-components";

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
  max-width: 250px;  
  width: 25%;
  height: 100%;
  background-color: bisque;
  padding: 0.25em;  
`
export const ContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: burlywood;
`
export const RowItemsTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.35em;
    height: 1.5em;
    
    svg {
        margin-top: 0.15em;
        width: 1em;
        height: 1em;
    }
    
    p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        text-transform: uppercase;
    }
`
export const RowItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.35em;
    height: 1.5em;
    
    svg {
        width: 1em;
        height: 1em;
    }
    
    p {
        margin: 0;
        padding: 0;
    }
`