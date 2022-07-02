import styled from "styled-components/macro";
import {motion} from "framer-motion";
import {screenMediaQuery} from "../../../index.styles";

export const NavMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 18.75rem;
  z-index: 21; 
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  @media ${screenMediaQuery.mobilePortrait}{
    visibility: visible;
    opacity: 1;
  }
  @media ${screenMediaQuery.mobileLandscape}{
    visibility: visible;
    opacity: 1;
  }
`;

export const NavMenuBody = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 65%;
  max-width: 18.75rem;
  min-width: 14.959rem;
  background: #2D2D2D;
  border-right: 1px solid #505050;
  box-shadow: inset -4px 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 22;
`;
export const NavMenuBlur = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(44, 44, 44, 0.48);
  backdrop-filter: blur(10px);
  z-index: 19;
`;
