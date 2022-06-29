import styled from "styled-components/macro";
import {motion} from "framer-motion";
import navigationArrow from "../assets/svg/red-arrow.svg"
import {devicesMaxWidth, devicesMinWidth} from "../index.styles";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${props => props.theme.backgroundImage}");
  background-color: ${props => props.theme.backgroundColor};
  background-attachment: fixed;
  background-size: contain;
  color: ${props => props.theme.textColor};
  font-family: DINNextLTPro, Inter, Segoe UI, sans-serif;
  transition: background 0.5s;
  overflow-x: hidden;
`;

export const NavigationArrow = styled(motion.div)`
  height: 4.5rem;
  width: 10rem;
  margin: 8% auto 0;
  cursor: pointer;
  background-image: url(${navigationArrow});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: width 500ms, height 500ms, margin 500ms;

  @media screen and ${devicesMaxWidth.laptopM}{
    height: 4.05rem;
    width: 9rem;
    margin: 5% auto 0;
  }
  
  
`;
