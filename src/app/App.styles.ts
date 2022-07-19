import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../index.styles";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.theme.backgroundImage}");
  background-color: ${(props) => props.theme.backgroundColor};
  background-attachment: fixed;
  background-size: contain;
  color: ${(props) => props.theme.textColor};
  font-family: DINNextLTPro, Inter, Segoe UI, sans-serif;
  transition: background 0.5s;
  overflow-x: hidden;

  *::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    border: 1px solid #4d4d5b;
    background-color: #11171a;
    border-radius: 10px;
  }
`;

export const NavigationArrow = styled(motion.div)`
  height: 4.5rem;
  width: 10rem;
  margin: 8% auto 0;
  cursor: pointer;
  background-image: url(${(props) => props.theme.navigationArrow});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    height: 4.05rem;
    width: 9rem;
    margin: 7% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    height: 4.5rem;
    width: 10rem;
    margin: 35% auto 0;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    height: 4.5rem;
    width: 10rem;
    margin: 28% auto 0;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    height: 4.05rem;
    width: 9rem;
    margin: 35% auto 0;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 4.05rem;
    width: 9rem;
    margin: 7% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    height: 4.05rem;
    width: 9rem;
    margin: 5% auto 0;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    height: 4.05rem;
    width: 9rem;
    margin: 5% auto 0;
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
    height: 4.05rem;
    width: 9rem;
    margin: 5% auto 0;
  }
`;
