import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const TheTeamContainer = styled(motion.div)`
  padding-top: 10rem;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${screenMediaQuery.mobilePortrait} {
    padding-top: 7rem !important;
    padding-top: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    padding-top: 7rem !important;
    padding-top: 0;
  }
`;

export const MobileTeamContent = styled.div`
  width: 70%;
  margin: 0 auto;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  display: none;
  .swiper {
    z-index: unset;
  }

  @media ${screenMediaQuery.mobilePortrait} {
    display: unset;
    visibility: visible;
    opacity: 1;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: unset;
    visibility: visible;
    opacity: 1;
    width: 25% !important;
  }
`;

export const DesktopTeamContent = styled.div`
  width: 100%;
  margin: 0 auto;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s linear;
  display: flex;
  flex-wrap: wrap;

  @media ${screenMediaQuery.mobilePortrait} {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;

export const LeadershipRowTop = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 0 2rem;
`;
export const LeadershipRowBottom = styled(motion.div)`
  display: flex;
  flex-direction: row;
  max-width: 80vw;
  margin: auto;
  padding: 0 2rem;
`;
