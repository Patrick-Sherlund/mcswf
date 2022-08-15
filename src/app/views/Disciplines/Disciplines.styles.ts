import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../constants/data/MediaQueries";

export const DisciplinesContainer = styled(motion.div)`
  padding-top: 10rem;
  padding-bottom: 20rem;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    padding-top: 40rem;
  }

  @media ${screenMediaQuery.mobileLandscape} {
    margin-top: 7rem !important;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    margin-top: 6rem !important;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    height: 120vh;
  }
  @media ${screenMediaQuery.desktopLarge} {
    height: 135vh;
  }
  @media ${screenMediaQuery.desktopMedium} {
    padding-top: 5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    height: 130vh;
    padding-top: 6rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;

  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    margin: 0 0 2.8rem 0;
  }

  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    margin: 0 0 3rem 0;
  }

  @media ${screenMediaQuery.desktopFullHighDefinition} {
    margin: 0 0 3rem 2rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    margin: 0 0 3rem 3rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    margin: 0 0 1rem 2.5rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    margin: 0 0 3rem 2.5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    margin: 0 0 0.5rem 0;
  }
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FirstDisciplineHeader = styled.h3`
  font-size: 3rem;
  text-align: center;
  font-weight: lighter;
  margin: 0;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 4rem;
  }

  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 3rem;
  }

  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 2.4rem;
  }

  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.8rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 2rem;
  }
`;

export const TitleVerticalDivider = styled.div`
  width: 40px;
  height: 0px;
  background-color: ${(props) => props.theme.dataCard.verticalBorderColor};
  border: 1px solid ${(props) => props.theme.dataCard.verticalBorderColor};
  transform: rotate(90deg);
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 80px;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    width: 60px;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 29px;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 27px;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 35px;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 22px;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 24px;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 26px;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 20px;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 27px;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 27px;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 18px;
  }
`;

export const SecondDisciplineHeader = styled.h3`
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  margin: 0;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 4rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 2.4rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.8rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 2rem;
  }
`;

export const DesktopContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform-style: preserve-3d;

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
  @media ${screenMediaQuery.tabletSmallPortrait} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    display: none;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    display: none;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    display: none;
  }
`;

export const Group = styled.div`
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopLarge} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopMedium} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    display: flex;
    flex-direction: row;
  }
`;

export const GroupContainer = styled.div`
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    display: flex;
    flex-direction: row;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    display: flex;
    flex-direction: row;
  }
`;

export const DisciplinesDataCard = styled.div`
  position: relative;
  padding: 1.825rem;
  margin-left: 4rem;
  height: 100%;
  width: 50rem;
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

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 48rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    width: 42rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    width: 31rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 21rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    padding: 1.825rem;
    margin-left: 4rem;
    min-height: 24.2rem;
    width: 21rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    padding: 1.825rem;
    margin-left: 4rem;
    margin-bottom: 2.5rem;
    width: 38rem;
    max-height: 50rem;
    min-height: 30rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    max-height: 50rem;
    min-height: 30rem;
    padding: 1.825rem;
    margin-left: 3rem;
    width: 35rem;
    margin-bottom: 2.5rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    min-height: 20.2rem;
    padding: 1.6rem;
    margin-left: 3rem;
    width: 40rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    min-height: 20.2rem;
    padding: 1.6rem;
    margin-left: 3rem;
    width: 32rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    max-height: 60rem;
    padding: 1.4rem;
    margin: 2rem 2rem 0;
    width: 26rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    min-height: 18rem;
    padding: 1.4rem;
    margin: 2rem 0 0;
    width: 17rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    min-height: 20.2rem;
    padding: 1.4rem;
    margin-left: 3rem;
    width: 14rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 30rem;
    width: 24rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    min-height: 14.2rem;
    height: 20%;
    padding: 1.4rem;
    margin: 2rem 0.5rem 0;
    width: 12rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    margin: 0 auto;
    height: 25rem;
    width: 18rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    margin: 0 auto;
    padding: 1rem;
    height: 16.5rem;
    width: 16rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    margin: 0 auto;
    padding: 1rem;
    height: 21rem;
    width: 14rem;
  }
`;

export const DisciplineTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DisciplinePrimaryTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.1rem;
  margin: 0;
  color: ${(props) => props.theme.dataCard.titleTextColor};
  font-weight: 600;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 4rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.9rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.9rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 2.5rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 2.5rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 2.4rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 2.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.4rem;
  }
`;

export const DisciplineSecondaryTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.1rem;
  margin: 0 0 0 10%;
  color: ${(props) => props.theme.dataCard.titleTextColor};
  font-weight: 600;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 4rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 2.8rem;
    margin: 0 0 0 4rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.9rem;
    margin: 0 0 0 3rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.9rem;
    margin: 0 0 0 3rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 2.5rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 2.5rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 2.4rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 2.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.4rem;
  }

  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
`;

export const VerticalDivider = styled.div`
  width: 40px;
  height: 0px;
  background-color: ${(props) => props.theme.dataCard.verticalBorderColor};
  border: 1px solid ${(props) => props.theme.dataCard.verticalBorderColor};
  transform: rotate(90deg);
  transition: width 500ms, height 500ms, margin 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    width: 40px;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    width: 27px;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 27px;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    width: 30px;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 30px;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 22px;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 26px;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 22px;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 20px;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    width: 27px;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    width: 27px;
  }
  @media ${screenMediaQuery.mobileLandscape} {
  }
  @media ${screenMediaQuery.mobilePortrait} {
    width: 18px;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #940000;
  border: 4px solid #940000;
  transition: width 500ms, height 500ms, margin 500ms;
  box-shadow: inset 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DisciplineBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.1rem;
  margin: 0;
  color: ${(props) => props.theme.dataCard.titleTextColor};
  font-weight: 600;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 2.8rem;
    padding-top: 2rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 2.25rem;
    padding-top: 1.5rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1.6rem;
  }

  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 2rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1.4rem;
  }

  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
`;

export const BulletPoints = styled.div`
  font-size: 1.75rem;
  color: ${(props) => props.theme.dataCard.bodyTextColor};
  font-weight: lighter;
  transition: font-size 500ms;
  min-height: 31rem;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 2.4rem;
    min-height: 40rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 2.2rem;
    min-height: 38rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    min-height: 34rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.28rem;
    min-height: 31rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
    min-height: 33rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 1.6rem;
    min-height: 25rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.6rem;
    min-height: 25rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.1rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.6rem;
    min-height: 36rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.05rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.4rem;
  }

  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
`;

export const DisciplineList = styled.ul``;

export const DisciplineListItem = styled.li`
  ::marker {
    color: #940000;
  }
`;

export const SecondBulletPoints = styled.div`
  font-size: 1.75rem;
  color: ${(props) => props.theme.dataCard.bodyTextColor};
  font-weight: lighter;
  transition: font-size 500ms;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 2.2rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 2.2rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.28rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.desktopMidXL} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    font-size: 1.1rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    font-size: 1.5rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.6rem;
  }
  @media ${screenMediaQuery.iPadMiniLandscape} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.05rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    font-size: 1.4rem;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
  }
`;

export const SecondDisciplineList = styled.ul``;

export const SecondDisciplineListItem = styled.li`
  ::marker {
    color: #940000;
  }
`;
