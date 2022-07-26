import styled from "styled-components/macro";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../utils/helpers/MediaQueries";

export const DesktopNavBarBody = styled(motion.div)`
  position: fixed;
  height: 8.75rem;
  width: 100%;
  transition: width 500ms, height 500ms, visibility 0s, opacity 0s linear;
  opacity: 1;
  visibility: visible;
  z-index: 20;

  @media ${screenMediaQuery.mobilePortrait} {
    opacity: 0;
    visibility: hidden;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    opacity: 0;
    visibility: hidden;
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: max-content;
  background-color: ${(props) => props.theme.navBar.backgroundColor};
  transition: background 0.5s;
`;

export const Link = styled(Scroll.Link)`
  text-decoration: none;
`;

export const Logo = styled(motion.img)`
  padding: 1rem;
  width: 7.75rem;
  height: 8.75rem;
  transition: width 500ms, height 500ms;

  @media ${screenMediaQuery.desktopMedium} {
    width: 5.12rem;
    height: 5.8rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 6.2rem;
    height: 7rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 5.76rem;
    height: 6.5rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 5.12rem;
    height: 5.8rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 5.3rem;
    height: 6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    width: 5.3rem;
    height: 6rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 5.3rem;
    height: 6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 5.76rem;
    height: 6.5rem;
  }
`;

export const List = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  margin: auto 0 auto 0;
`;

export const ListItem = styled(motion.li)`
  margin: 1rem;
  font-size: 1.325rem;
  color: ${(props) => props.theme.inactiveTextColor};
  font-weight: lighter;
  list-style-type: none;
  align-content: center;
  cursor: pointer;

  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 1.1rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 0.85rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 0.5rem;
    font-size: 0.7rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
`;

export const SelectedListItem = styled(ListItem)`
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

export const UnderLine = styled.div`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
  border-bottom: 0.063rem solid ${(props) => props.theme.borderRed};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + 0.5rem);
`;
