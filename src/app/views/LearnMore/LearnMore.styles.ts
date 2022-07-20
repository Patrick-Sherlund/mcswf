import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const LearnMoreContainer = styled(motion.div)`
  padding-top: 10rem;
  margin-top: 0;
  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 14rem;
    padding-top: 6rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 12rem;
    padding-top: 6rem;
  }
`;

export const DesktopContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform-style: preserve-3d;

  @media ${screenMediaQuery.tabletSmallPortrait} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const MobileContainer = styled(motion.div)`
  justify-content: center;
  transform-style: preserve-3d;
  position: relative;
  display: none;

  .swiper {
    .swiper-slide-shadow {
      position: relative;
    }
  }

  @media ${screenMediaQuery.tabletSmallLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    display: unset;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: unset;
  }
`;
