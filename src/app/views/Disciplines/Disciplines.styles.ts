import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const DisciplinesContainer = styled(motion.div)`
  padding-top: 10rem;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 6rem !important;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 7rem !important;
  }
`;

export const SampleText = styled.div`
  text-align: center;
  width: 100%;
`;
