import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../../index.styles";

export const LearnMoreContainer = styled(motion.div)`
  padding-top: 10rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;

  height: 82vh;
  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 14rem;
    padding-top: 6rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 12rem;
    padding-top: 6rem;
  }
`;

export const DesktopContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform-style: preserve-3d;

  @media ${screenMediaQuery.tabletSmallPortrait} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const MobileContainer = styled(motion.div)`
  justify-content: center;
  transform-style: preserve-3d;
  position: relative;
  display: none;

  .swiper {
    .swiper-slide-shadow {
      position: relative;
    }
  }

  @media ${screenMediaQuery.tabletSmallLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: unset;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    display: unset;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    display: unset;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: unset;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.1rem;
  margin: 0;
  color: ${(props) => props.theme.dataCard.titleTextColor};
  font-weight: 600;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopXXLarge} {
    font-size: 2.1rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.8rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.4rem;
  }
`;

export const Body = styled.p`
  font-size: 1.75rem;
  color: ${(props) => props.theme.dataCard.bodyTextColor};
  font-weight: lighter;
  transition: font-size 500ms;
  min-height: 100%;

  @media ${screenMediaQuery.desktopXXLarge} {
    font-size: 1.75rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.25rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.1rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.1rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.05rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1rem;
  }
`;

export const VerticalDivider = styled.div`
  width: 27px;
  height: 0px;
  background-color: ${(props) => props.theme.dataCard.verticalBorderColor};
  border: 1px solid ${(props) => props.theme.dataCard.verticalBorderColor};
  transform: rotate(90deg);
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopXXLarge} {
    width: 27px;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 27px;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 27px;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 22px;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 22px;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 22px;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 20px;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 27px;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 27px;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;

export const LearnMoreFooter = styled.div`
  width: 100%;
  margin: auto 0 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: width 500ms, height 500ms, margin 500ms;
`;

const SvgTemplate = styled.div`
  width: 10rem;
  height: 10rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;

const SvgButton = styled(SvgTemplate)`
  width: 24rem;
  height: 9rem;
  cursor: pointer;

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MediaTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;
export const MediaSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  margin: 0;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;

export const Talent = styled(SvgTemplate)`
  width: 15rem;
  height: 10rem;
  background-image: url(${(prop) => prop.theme.learnMore.svg.talent});

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;
export const RoundedTeams = styled(SvgTemplate)`
  background-image: url(${(prop) => prop.theme.learnMore.svg.roundedTeams});
`;
export const Agile = styled(SvgTemplate)`
  width: 15rem;
  height: 10rem;
  background-image: url(${(prop) => prop.theme.learnMore.svg.agile});

  @media ${screenMediaQuery.desktopXXLarge} {
  }
  @media ${screenMediaQuery.desktopXLarge} {
  }
  @media ${screenMediaQuery.desktopLarge} {
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
  }
  @media ${screenMediaQuery.desktopMedium} {
  }
  @media ${screenMediaQuery.tabletLarge} {
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
`;
export const Industry = styled(SvgTemplate)`
  background-image: url(${(prop) => prop.theme.learnMore.svg.industry});
`;
export const InformationPacket = styled(SvgButton)`
  background-image: url(${(prop) =>
    prop.theme.learnMore.svg.informationPacket});
`;

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DataCard = styled.div`
  position: relative;
  padding: 1.825rem;
  margin-left: 4rem;
  height: 40%;
  width: 40rem;
  background-color: ${(props) => props.theme.dataCard.backgroundColor};
  border: 1px solid ${(props) => props.theme.dataCard.borderColor};
  box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: width 500ms, height 500ms, margin 500ms;

  &,
  &:before,
  &:after {
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &:before {
    right: 7px;
    top: 5px;
    z-index: -1;
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.dataCard.firstShade.backgroundColor};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:after {
    right: 12px;
    top: 10px;
    z-index: -2;
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.dataCard.secondShade.backgroundColor};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }

  @media ${screenMediaQuery.desktopXXLarge} {
    padding: 1.825rem;
    margin-left: 4rem;
    min-height: 27.2rem;
    width: 32rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    padding: 1.825rem;
    margin-left: 4rem;
    min-height: 24.2rem;
    width: 25rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    min-height: 24.2rem;
    padding: 1.825rem;
    margin-left: 3rem;
    width: 18.5rem;
  }

  @media ${screenMediaQuery.laptopAndDesktop} {
    min-height: 19rem;
    padding: 1.4rem;
    margin: 2rem 0 0;
    width: 24rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    min-height: 20.2rem;
    padding: 1.6rem;
    margin-left: 3rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    min-height: 20.2rem;
    padding: 1.6rem;
    margin-left: 3rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    min-height: 20.2rem;
    padding: 1.4rem;
    margin-left: 3rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    min-height: 18rem;
    padding: 1.4rem;
    margin: 2rem 0 0;
    width: 17rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    min-height: 18.2rem;
    height: 20%;
    padding: 1.4rem;
    margin: 2rem 0 0;
    width: 15rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 30rem;
    width: 24rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 0 auto;
    height: 35rem;
    width: 18rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
    margin: 0 auto;
    padding: 1rem;
    height: 21rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin: 0 auto;
    padding: 1rem;
    height: 16.5rem;
    width: 16rem;
  }
`;
