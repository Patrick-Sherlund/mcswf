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

export const TeamContent = styled.div`
  width: 70%;
  margin: 0 auto;
  .swiper {
    z-index: unset;
  }
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  @media ${screenMediaQuery.mobilePortrait} {
    visibility: visible;
    opacity: 1;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    visibility: visible;
    opacity: 1;
  }
`;

export const LeadershipCount = styled.h2`
  text-align: center;
`;
