import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../constants/data/MediaQueries";

export const LearnMoreContainer = styled(motion.div)`
  padding-top: 10rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 14rem;
    padding-top: 6rem;
    height: 82vh;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 12rem;
    padding-top: 6rem;
    height: 82vh;
  }

  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    height: 82vh;
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
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 2.1rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.8rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.4rem;
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
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 1.4rem;
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
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 2.2rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.75rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.25rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.1rem;
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
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 1.2rem;
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
  height: 0;
  background-color: ${(props) => props.theme.dataCard.verticalBorderColor};
  border: 1px solid ${(props) => props.theme.dataCard.verticalBorderColor};
  transform: rotate(90deg);
  transition: width 500ms, height 500ms, margin 500ms;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 40px;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    width: 40px;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    width: 40px;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
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
    width: 27px;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 27px;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 27px;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    width: 18px;
  }
`;

export const LearnMoreFooter = styled.div`
  width: 100%;
  top: 0;
  margin: 2rem auto 3rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.mobilePortrait} {
    padding-top: 1rem;
    margin: 0 auto 2rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    padding-top: 1rem;
    margin: 0 auto 2rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    padding-top: 1rem;
    margin: 0 auto 2rem;
  }
`;

const SvgTemplate = styled(motion.div)`
  width: 10rem;
  height: 9.5rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: width 500ms, height 500ms, margin 500ms;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 18rem;
    height: 18rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    width: 10rem;
    height: 10rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    width: 10rem;
    height: 10rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 10rem;
    height: 10rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 7.5rem;
    height: 7.5rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 5rem;
    height: 5rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 3.5rem;
    height: 3.5rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const SvgButton = styled(SvgTemplate)`
  width: 24rem;
  height: 9rem;
  cursor: pointer;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 43.2rem;
    height: 16.2rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    width: 24rem;
    height: 9rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    width: 24rem;
    height: 9rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 24rem;
    height: 9rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 20rem;
    height: 7.5rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 20rem;
    height: 7.5rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    width: 14rem;
    height: 5.25rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 12rem;
    height: 4.5rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 12rem;
    height: 4.5rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 9.8rem;
    height: 3.675rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    width: 9.8rem;
    height: 3.675rem;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    margin: 0 2.5rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    margin: 0 2.5rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    margin: 0 2.5rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    margin: 0 2.5rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    margin: 0 2.5rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    margin: 0 0.8rem;
  }
`;

export const MediaTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 3.5rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1rem;
  }
`;
export const MediaSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  margin: 0;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.5rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 0.6rem;
  }
`;

export const Talent = styled(SvgTemplate)`
  width: 15rem;
  height: 10rem;
  background-image: url(${(prop) => prop.theme.learnMore.svg.talent});

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 27rem;
    height: 18rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 15rem;
    height: 10rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 10.5rem;
    height: 7rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 7rem;
    height: 3.262rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    width: 7rem;
    height: 3.262rem;
  }
`;
export const RoundedTeams = styled(SvgTemplate)`
  background-image: url(${(prop) => prop.theme.learnMore.svg.roundedTeams});
`;
export const Agile = styled(SvgTemplate)`
  width: 15rem;
  height: 10rem;
  background-image: url(${(prop) => prop.theme.learnMore.svg.agile});

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 27rem;
    height: 18rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 15rem;
    height: 10rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 10.5rem;
    height: 7rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    width: 7rem;
    height: 4.66rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 7rem;
    height: 3.262rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    width: 7rem;
    height: 3.262rem;
  }
`;

export const Industry = styled(SvgTemplate)`
  background-image: url(${(prop) => prop.theme.learnMore.svg.industry});
`;
export const DesktopInformationPacket = styled(SvgButton)`
  background-image: url(${(prop) =>
    prop.theme.learnMore.svg.informationPacket});

  @media ${screenMediaQuery.mobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const MobileInformationPacket = styled(DesktopInformationPacket)`
  margin: 0.5rem auto 0;
  display: none;
  @media ${screenMediaQuery.mobilePortrait} {
    display: flex;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: flex;
  }
`;

export const MediaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopLarge} {
    flex-direction: row;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    flex-direction: column;
  }
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:after {
    right: 12px;
    top: 10px;
    z-index: -2;
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.dataCard.secondShade.backgroundColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    padding: 1.825rem;
    margin: 5rem 0 0 4rem;
    min-height: 40rem;
    width: 48rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    padding: 1.825rem;
    margin-left: 4rem;
    min-height: 36rem;
    width: 42rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    padding: 1.825rem;
    margin-left: 4rem;
    min-height: 36rem;
    width: 42rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
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

  @media ${screenMediaQuery.laptopAndDesktop} {
    min-height: 14rem !important;
    padding: 1.4rem;
    margin: 2rem 2rem 0;
    width: 20rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    min-height: 20.2rem;
    padding: 1.6rem;
    margin-left: 3rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    min-height: 24.5rem;
    padding: 1.825rem;
    margin-left: 3rem;
    width: 18.5rem;
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
    min-height: 14.2rem;
    height: 20%;
    padding: 1.4rem;
    margin: 2rem 0.5rem 0;
    width: 12rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    margin: 0 auto;
    height: 30rem;
    width: 24rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    margin: 0 auto;
    height: 30rem;
    width: 24rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 0 auto;
    height: 25rem;
    width: 18rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    margin: 0 auto;
    height: 25rem;
    width: 18rem;
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
