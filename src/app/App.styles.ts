import styled from "styled-components/macro";
import background from "../assets/background.png";
import { devices } from "../index.styles";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("${background}");
  background-size: contain;
  color: white;
  font-family: DINNextLTPro, Inter, Segoe UI, sans-serif;
  
  @media ${devices.desktopL} {
    //Place holder for styling
  }
  @media ${devices.desktop} {
    //Place holder for styling
  }
  @media ${devices.laptopL} {
    //Place holder for styling
  }
  @media ${devices.laptop} {
    //Place holder for styling
  }
  @media ${devices.mobileL} {
    //Place holder for styling
  }
  @media ${devices.mobileM} {
    //Place holder for styling
  }
  @media ${devices.mobileS} {
    //Place holder for styling
  }
  @media ${devices.tablet} {
    //Place holder for styling
  }
`;
