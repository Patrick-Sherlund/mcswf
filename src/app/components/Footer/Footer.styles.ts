import styled from "styled-components/macro";
import { screenMediaQuery } from "../../../index.styles";

export const FooterContainer = styled.div`
  padding-top: 8rem;
  margin-top: 0;
  height: 10rem;
  width: 100%;

  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 8rem;
    padding-top: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 8rem;
    padding-top: 0;
  }
`;
