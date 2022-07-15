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

export const SampleText = styled.div`
  text-align: center;
  width: 100%;
`;

export const TeamCard = styled(motion.div)`
  display: flex;
  align-items: center;
  width: auto;
  height: max-content;
  background-color: #3e3e3e;
  border: 0.5px solid #7e7e7e;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.4rem 0;
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

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 95%;
  width: 95%;
  margin: auto;
  padding-bottom: 1rem;
`;

export const TeamPhoto = styled.img`
  width: 95%;
  height: fit-content;
  margin: 0.4rem auto 0 auto;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const Title = styled.h2`
  width: 95%;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0.5rem auto 0;
`;

export const BilletContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.5rem auto 0;
  align-items: center;
`;

export const Divider = styled.div`
  width: 15px;
  height: 0px;
  background-color: #c20000;
  border: 1px solid #c20000;
  transform: rotate(90deg);
`;

export const Billet = styled.h3`
  font-weight: lighter;
  font-size: 0.9rem;
  margin: 0;
`;

export const LeadershipCount = styled.h2`
  text-align: center;
`;
