import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`
export const HeaderNavigator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MainBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: burlywood;
  padding: 0 10px;
  
  input {
    width: 80%;
    height: 30px;
    border-radius: 30px;
    border: none;
  }
`
export const BookmarksBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: cadetblue;
`