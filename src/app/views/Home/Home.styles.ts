import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";
import { Link } from "../../components/DesktopNavBar/DesktopNavBar.styles";

export const HomeContainer = styled(motion.div)`
  position: relative;
  padding-top: 12rem;
  margin-top: 0;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 0;
    padding-top: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 2.5rem;
    padding-top: 0;
  }
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;
  margin: 5% auto 0;

  @media ${screenMediaQuery.desktopLarge} {
    margin: 8% auto 0;
  }
  @media ${screenMediaQuery.tabletLarge} {
    margin: 5% auto 0;
  }
  @media ${screenMediaQuery.desktopMedium} {
    margin: 2% auto 1.4%;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    margin: 6% auto 0;
  }
  @media ${screenMediaQuery.iPadPro} {
    margin: 16% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    margin: 22% auto 1.4%;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    margin: 15% auto 1.4%;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    margin: 20% auto 1.4%;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    margin: 2% auto 0;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    margin: 3% auto 0;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 8% auto 0;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    margin: 4% auto 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin: 2% auto 0;
  }
`;

export const StyledH2 = styled(motion.h2)`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  padding: 0 1rem;
  color: ${(props) => props.theme.textColor};
  font-size: 5rem;
  transition: font-size 500ms;
  margin-bottom: 3.3rem;

  @media screen and (max-width: 1315px) {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.iPadPro} {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 2.2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.69rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const TitleTop = styled(StyledH2)`
  margin-top: 0;
`;

export const Divider = styled(motion.div)`
  height: 10rem;
  width: 0.15rem;
  background-color: ${(props) => props.theme.borderRed};
  transition: width 500ms, height 500ms;

  @media screen and (max-width: 1315px) {
    height: 6rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    height: 8rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    height: 8rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    height: 6.4rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    height: 4.2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    height: 3.9rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 6rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    height: 4.2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    height: 4.2rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    height: 2.6rem;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    height: 2.4rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    height: 3.6rem;
  }
`;

export const HomeContent = styled.div`
  margin: 0 auto 4%;
  display: flex;
  flex-direction: row;
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopLarge} {
    margin: 0 auto 2%;
  }
  @media ${screenMediaQuery.tabletLarge} {
    margin: 0 auto 2%;
  }
  @media ${screenMediaQuery.desktopMedium} {
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.iPadPro} {
    margin: 0 auto 15%;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    margin: 0 auto 8%;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    margin: 0 auto 8%;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    margin: 0 auto 1%;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    margin: 0 auto 3%;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    margin: 6% auto 3% !important;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    margin: 6% auto 15%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin: 0 auto 4%;
  }
`;

export const StyledH3 = styled(motion.h3)`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  padding-left: 0.5rem;
  transition: width 500ms, height 500ms, font-size 500ms;

  @media screen and (max-width: 1315px) {
    font-size: 1.25rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.6rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.iPadPro} {
    font-size: 1.6rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.6rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 1.1rem;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    font-size: 1.1rem !important;
    margin: 0 0 0.3rem 0;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.1rem;
    margin: 0 0 0.3rem 0;
    padding-left: 0.4rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.1rem;
    padding-left: 0.4rem;
  }
`;

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

export const SocialButton = styled(motion.div)`
  height: 4.25rem;
  width: 4.25rem;
  margin: 0 0.4rem;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.socials.backgroundColor};
  border: 0.175rem solid ${(props) => props.theme.socials.borderColor};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: width 500ms, height 500ms;

  &:hover {
    background-color: ${(props) => props.theme.socials.hoverBackgroundColor};
    border: 0.175rem solid ${(props) => props.theme.socials.hoverBorderColor};
  }

  @media screen and (max-width: 1315px) {
    height: 3.5rem;
    width: 3.5rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    height: 3rem;
    width: 3rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    height: 3rem;
    width: 3rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 3rem;
    width: 3rem;
  }

  @media ${screenMediaQuery.laptopAndDesktop} {
    height: 3rem;
    width: 3rem;
  }
  @media ${screenMediaQuery.iPadPro} {
    height: 3.5rem;
    width: 3.5rem;
  }
  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    height: 2.4rem !important;
    width: 2.4rem !important;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    height: 2.7rem;
    width: 2.7rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    height: 2.7rem;
    width: 2.7rem;
  }
`;

export const NavLink = styled(Link)`
  margin: auto 0 0;
  padding-bottom: 2rem;
`;

export const FacebookButton = styled(SocialButton)`
  background-image: url(${(prop) => prop.theme.socials.facebook});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const LinkedInButton = styled(SocialButton)`
  position: relative;
  background-image: url(${(prop) => prop.theme.socials.linkedin});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const InstagramButton = styled(SocialButton)`
  background-image: url(${(prop) => prop.theme.socials.instagram});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const TwitterButton = styled(SocialButton)`
  background-image: url(${(prop) => prop.theme.socials.twitter});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const YoutubeButton = styled(SocialButton)`
  background-image: url(${(prop) => prop.theme.socials.youtube});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const Logo = styled(motion.img)`
  width: 13.285rem;
  height: 15rem;
  padding: 5rem 0 4%;
  margin: 0 auto;
  transition: width 500ms, height 500ms;
  display: none;
  z-index: 10;

  @media ${screenMediaQuery.mobilePortraitSmallHeight} {
    width: 11.07rem;
    height: 12.5rem;
    padding: 2rem 0 4%;
  }

  @media ${screenMediaQuery.mobilePortrait} {
    display: inherit;
  }
`;
