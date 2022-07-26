import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { screenMediaQuery } from "../../../utils/helpers/MediaQueries";

export const NavMenuContainer = styled(motion.div)`
  position: inherit;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 16rem;
  max-width: 18.75rem;
  z-index: 25;
  transition: width 500ms, height 500ms;
`;

export const MenuList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  min-height: 55%;
  height: 20rem;
  width: 100%;
  max-width: 18.75rem;
  padding-left: 0;
  z-index: 26;
  transition: width 500ms, height 500ms;
`;

export const NavMenuHeader = styled(motion.div)`
  width: 100%;
  max-width: 18.75rem;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0rem 1rem 0;
  background-image: url("${(props) =>
    props.theme.navMenu.header.backgroundImage}");
  background-color: ${(props) => props.theme.navMenu.header.backgroundColor};
  background-size: cover;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35));
`;

export const NavMenuLogo = styled(motion.img)`
  width: 4.5rem;
  height: 5rem;
  transition: width 500ms, height 500ms;
  margin: 0.5rem 1rem 0 0.5rem;
  @media ${screenMediaQuery.mobileLandscape} {
    width: 4rem;
    height: 4.475rem;
  }
`;

export const NavMenuHeaderContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: auto auto auto 0;
  flex: 0 0 auto;
`;

export const NavMenuHeaderText = styled(motion.h2)`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.navMenu.textColor};
  text-align: center;
  margin: 0.1rem 0 0;
`;
