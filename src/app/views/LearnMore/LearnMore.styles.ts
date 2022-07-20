import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const LearnMoreContainer = styled(motion.div)`
  padding-top: 10rem;
  margin-top: 0;
  height: 82vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform-style: preserve-3d;

  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 10.5rem;
    padding-top: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 10rem;
    padding-top: 0;
  }
`;
