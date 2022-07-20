import styled from "styled-components/macro";
import { screenMediaQuery } from "../../../index.styles";

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
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
