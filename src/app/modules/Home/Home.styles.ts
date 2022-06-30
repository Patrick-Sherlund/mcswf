import styled from "styled-components";
import { motion } from "framer-motion";
import {screenMediaQuery} from "../../../index.styles";

export const HomeContainer = styled(motion.div)`
  position: relative;
  padding-top: 12rem;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;
  margin: 5% auto 0;

  @media ${screenMediaQuery.desktopLarge}{
    margin: 8% auto 0;
  }
  @media ${screenMediaQuery.tabletLarge}{
    margin: 5% auto 0;
  }
  @media ${screenMediaQuery.desktopMedium}{
    margin: 2% auto 1.4%;
  }
  @media ${screenMediaQuery.laptopAndDesktop}{
    margin: 6% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait}{
    margin: 22% auto 1.4%;
  }
  @media ${screenMediaQuery.iPadMiniPortrait}{
    margin: 15% auto 1.4%;
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    margin: 20% auto 1.4%;
  }
  @media ${screenMediaQuery.tabletSmallLandscape}{
    margin: 2% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape}{
    margin: 3% auto 0;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait}{
    margin: 8% auto 0;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape}{
    
  }
  @media ${screenMediaQuery.mobilePortrait}{
    margin: 4% auto 0;
  }
`

export const StyledH2 = styled(motion.h2)`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  padding: 0 1rem;
  color: ${props => props.theme.textColor};
  font-size: 5rem;
  transition: font-size 500ms;
  margin-bottom: 3.3rem;
  
  @media screen and (max-width: 1315px) {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopLarge}{
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.tabletLarge}{
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.desktopMedium}{
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop}{

  }
  @media ${screenMediaQuery.tabletAndiPadPortrait}{
    font-size: 3rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait}{
    font-size: 2.2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape}{
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape}{

  }
  @media ${screenMediaQuery.tabletAndMobilePortrait}{
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape}{
    font-size: 2rem;
  }
  @media ${screenMediaQuery.mobilePortrait}{

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
  @media ${screenMediaQuery.desktopLarge}{
    height: 8rem;
  }
  @media ${screenMediaQuery.tabletLarge}{
    height: 8rem;
  }
  @media ${screenMediaQuery.desktopMedium}{
    height: 6.4rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop}{

  }
  @media ${screenMediaQuery.tabletAndiPadPortrait}{

  }
  @media ${screenMediaQuery.iPadMiniPortrait}{
    height: 4.2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    height: 3.9rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape}{
    height: 6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape}{

  }
  @media ${screenMediaQuery.tabletAndMobilePortrait}{
    height: 4.2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape}{
    height: 4.2rem;
  }
  @media ${screenMediaQuery.mobilePortrait}{

  }
`;

export const HomeContent = styled.div`
  margin: 0 auto 4%;
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;
  
  @media ${screenMediaQuery.desktopLarge}{
    margin: 0 auto 2%;
  }
  @media ${screenMediaQuery.tabletLarge}{
    margin: 0 auto 2%;
  }
  @media ${screenMediaQuery.desktopMedium}{

    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.laptopAndDesktop}{
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait}{
    margin: 0 auto 8%;
  }
  @media ${screenMediaQuery.iPadMiniPortrait}{
    
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    margin: 0 auto 8%;
  }
  @media ${screenMediaQuery.tabletSmallLandscape}{
    margin: 0 auto 1%;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape}{

  }
  @media ${screenMediaQuery.tabletAndMobilePortrait}{
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape}{
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.mobilePortrait}{

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
  @media ${screenMediaQuery.desktopLarge}{

  }
  @media ${screenMediaQuery.tabletLarge}{

  }
  @media ${screenMediaQuery.desktopMedium}{
    font-size: 1.6rem;
    padding-left: .4rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop}{

  }
  @media ${screenMediaQuery.tabletAndiPadPortrait}{
    font-size: 1.6rem;
    padding-left: .4rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait}{
    
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape}{

  }
  @media ${screenMediaQuery.tabletAndMobilePortrait}{
    font-size: 1.1rem;
    padding-left: .4rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape}{
    font-size: 1.1rem;
    padding-left: .4rem;
  }
  @media ${screenMediaQuery.mobilePortrait}{

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
  @media ${screenMediaQuery.desktopMedium}{
    height: 3rem;
    width: 3rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait}{
    height: 3rem;
    width: 3rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape}{
    height: 3rem;
    width: 3rem;
  }

  @media ${screenMediaQuery.laptopAndDesktop}{
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
