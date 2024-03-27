import styled, { keyframes } from "styled-components";
import LogoWindows from "../../components/logoWindows/logoWindows";
import {theme} from "../../assets/styles/theme.styles";

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
  height: 100dvh;
`;

export const StyledLogoWindows = styled(LogoWindows)`
  width: 6.66em;
  height: 6.66em;
  animation: ${WaveAnim} 2s ease-in-out infinite;
  fill: ${theme.colors.color3};
`;

export const ComponentSeo = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: auto;
    clip-path: inset(50%);
`
