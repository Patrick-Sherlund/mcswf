import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const MiniLogo = styled(motion.img)`
  position: absolute;
  right: 0;
  height: 4.52rem;
  width: 4rem;
  margin: 0.4rem 0.5rem 0 0;
`;

export const MobileNavBarContainer = styled(motion.div)`
  width: 100%;
  height: 6rem;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.navBar.backgroundColor};
  box-shadow: inset -4px 4px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  display: none;
  z-index: 20;

  @media ${screenMediaQuery.mobilePortrait} {
    display: flex;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: flex;
  }
`;

export const MobileNavPageName = styled.div`
  margin: auto;
  color: ${(props) => props.theme.textColor};
  font-size: 1.6rem;
  font-weight: 600;
  width: max-content;
`;

export const MobileNavBorder = styled.div`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
  border-bottom: 0.063rem solid ${(props) => props.theme.borderRed};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + 0.5rem);
`;
