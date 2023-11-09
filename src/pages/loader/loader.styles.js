import styled, { keyframes } from "styled-components";
import LogoWindows from "../../components/logoWindows/logoWindows";

export const WaveAnim = keyframes`
  0% {
    transform: scaleX(1) scaleY(1);
  }
  25% {
    transform: scaleX(0.95) scaleY(1.05);
  }
  50% {
    transform: scaleX(1) scaleY(1);
  }
  75% {
    transform: scaleX(1.05) scaleY(0.95);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledLogoWindows = styled(LogoWindows)`
  width: 100px;
  height: 100px;
  animation: ${WaveAnim} 2s ease-in-out infinite;
  fill: #FFF;
`;
