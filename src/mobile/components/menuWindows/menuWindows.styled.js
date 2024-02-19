import styled from "styled-components";

export const OpenAppsModal = styled.div`
    position: fixed;
    bottom: 3em;
    left: 20%;
    width: 60vw;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    z-index: 3000;

    @media (max-width: 425px) {
        width: 90%;
        left: 5%;
    }
    
    @media (max-width: 375px) {
        width: 95%;
        left: 2.5%;
    }
    
    @media (max-width: 320px) {
        width: 100%;
        left: 0;
    }
`;

export const AppIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    
    svg {
        width: 2em;
        height: 2em;
    }
`;

export const AppName = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
`;

export const NoAppsMessage = styled.div`
    color: #666;
    text-align: center;
    width: 100%;
`;