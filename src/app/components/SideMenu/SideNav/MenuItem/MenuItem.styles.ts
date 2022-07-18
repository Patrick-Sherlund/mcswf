import styled from "styled-components/macro";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import { screenMediaQuery } from "../../../../../index.styles";

export const MenuListItem = styled(motion.li)`
  width: 100%;
  height: 3.6rem;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 23;
  transition: width 500ms, height 500ms;

  @media ${screenMediaQuery.mobileLandscape} {
    height: 2.8rem !important;
  }

  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    height: 2.8rem !important;
  }
`;

export const Link = styled(Scroll.Link)`
  text-decoration: none;
`;

export const SelectedListItem = styled(MenuListItem)`
  background: ${(props) => props.theme.navMenu.selectedItemBackgroundColor};
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const InactiveItemText = styled.span`
  font-size: 1.8rem;
  font-weight: lighter;
  color: ${(props) => props.theme.navMenu.inactiveTextColor};
  padding-left: 2.8rem;
`;

export const SelectedItemText = styled(InactiveItemText)`
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  padding-left: 0.5rem;
`;

export const MiniDivider = styled(motion.div)`
  height: 1.8rem;
  width: 0.11rem;
  background-color: ${(props) => props.theme.borderRed};
  transition: width 500ms, height 500ms;
  margin-left: 2.8rem;
`;
