import styled from "styled-components";

export const OpenAppsModal = styled.div`
    position: fixed;
    bottom: 3em; // Positionner juste au-dessus du Taskbar
    left: 20%; // Centrer la modale
    width: 60vw;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.3); // Assurez-vous que le fond est partiellement transparent pour voir l'effet de flou
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    z-index: 3000; // S'assurer qu'elle soit au-dessus de tout autre contenu

    @media (max-width: 425px) {
        width: 90%; // Prendre toute la largeur de l'écran
        left: 5%;
    }
    
    @media (max-width: 375px) {
        width: 95%; // Prendre toute la largeur de l'écran
        left: 2.5%;
    }
    
    @media (max-width: 320px) {
        width: 100%; // Prendre toute la largeur de l'écran
        left: 0; // Aligner à gauche pour remplir tout l'écran
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
    color: #666; // Choisissez une couleur appropriée
    text-align: center;
    width: 100%;
`;