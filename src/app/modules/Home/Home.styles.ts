import styled from "styled-components";
import { motion } from "framer-motion";
import {devicesMaxWidth, devicesMinWidth} from "../../../index.styles";

export const HomeContainer = styled(motion.div)`
  position: relative;
  padding-top: 12rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const HomeHeader = styled.header`
  margin: 5% auto 1.4%;
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;

  @media screen and ${devicesMaxWidth.laptopM}{{
    margin: 4% auto 0;
  }
`

export const StyledH2 = styled(motion.h2)`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  padding: 0 1rem;
  color: ${props => props.theme.textColor};
  font-size: 5rem;
  transition: font-size 500ms;
  
  @media screen and (max-width: 1315px) {
    font-size: 3rem;
  }
`

export const TitleTop = styled(StyledH2)`
  margin-top: 0;
`;

export const Divider = styled(motion.div)`
  height: 10rem;
  width: .15rem;
  background-color: #C20000;
  transition: width 500ms, height 500ms;

  @media screen and (max-width: 1315px) {
    height: 6rem;
  }
`;

export const HomeContent = styled.div`
  margin: 0 auto 4%;
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;

  @media screen and ${devicesMaxWidth.laptopM}{{
    margin: 0 auto 3%;
  }
`;

export const StyledH3 = styled(motion.h3)`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  color: ${props => props.theme.textColor};
  font-size: 2rem;
  padding-left: .5rem;
  transition: width 500ms, height 500ms, font-size 500ms;

  @media screen and (max-width: 1315px) {
    font-size: 1.25rem;
    padding-left: .4rem;
  }
`

export const LightContent = styled(StyledH3)`
  font-weight: lighter;
`;

export const BoldContent = styled(StyledH3)`
  font-weight: bold;
`;

export const SocialGroup = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: space-evenly;
`;

const SocialButton = styled(motion.div)`
  height: 4.25rem;
  width: 4.25rem;
  margin: 0 .4rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.socials.backgroundColor};
  border: .175rem solid ${props => props.theme.socials.borderColor};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: width 500ms, height 500ms;
  
  &:hover{
    background-color: ${props => props.theme.socials.hoverBackgroundColor};
    border: .175rem solid ${props => props.theme.socials.hoverBorderColor};
  }

  @media screen and (max-width: 1315px) {
    height: 3.5rem;
    width: 3.5rem;
  }

  @media screen and ${devicesMaxWidth.laptopM}{{
    height: 3rem;
    width: 3rem;
  }
`;

export const FacebookButton = styled(SocialButton)`
  background-image: url(${prop => prop.theme.socials.facebook});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const LinkedInButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.linkedin});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const InstagramButton = styled(SocialButton)`
  background-image: url(${prop => prop.theme.socials.instagram});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const TwitterButton = styled(SocialButton)`
  background-image: url(${prop => prop.theme.socials.twitter});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const YoutubeButton = styled(SocialButton)`
  background-image: url(${prop => prop.theme.socials.youtube});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
