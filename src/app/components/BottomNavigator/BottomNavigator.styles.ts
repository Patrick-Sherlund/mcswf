import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../constants/data/MediaQueries";
import { Link } from "../DesktopNavBar/DesktopNavBar.styles";

export const DesktopNavLink = styled(Link)`
  padding-bottom: 2rem;
  opacity: 1;
  visibility: visible;
  display: inherit;
  @media ${screenMediaQuery.mobilePortrait} {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

export const MobileNavLink = styled(DesktopNavLink)`
  display: none;
  visibility: hidden;
  opacity: 0;
  margin: 2rem 0;

  @media ${screenMediaQuery.mobilePortrait} {
    opacity: 1;
    visibility: visible;
    display: inherit;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    opacity: 1;
    visibility: visible;
    display: inherit;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    opacity: 1;
    visibility: visible;
    display: inherit;
  }
`;

export const BottomNavigationArrow = styled(motion.div)`
  height: 4.5rem;
  width: 10rem;
  margin: 0 auto auto;
  cursor: pointer;
  background-image: url(${(props) => props.theme.navigationArrow});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: unset;
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    height: 12rem;
    width: 19rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    height: 8rem;
    width: 14.25rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    height: 8rem;
    width: 14.25rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    height: 8rem;
    width: 14.25rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    height: 6rem;
    width: 12rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    height: 4.05rem;
    width: 9rem;
  }
  @media ${screenMediaQuery.iPadPro} {
    height: 5.4rem;
    width: 12rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    height: 4.5rem;
    width: 10rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    height: 4.5rem;
    width: 10rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    height: 4.05rem;
    width: 9rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 4.05rem;
    width: 9rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    height: 4.05rem;
    width: 9rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    height: 4.05rem;
    width: 9rem;
  }
`;
