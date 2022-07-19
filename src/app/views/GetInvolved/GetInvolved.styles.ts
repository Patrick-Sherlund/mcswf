import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const GetInvolvedContainer = styled(motion.div)`
  padding-top: 10rem;
  margin-top: 0;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media ${screenMediaQuery.mobilePortrait} {
    padding-top: 6rem !important;
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
