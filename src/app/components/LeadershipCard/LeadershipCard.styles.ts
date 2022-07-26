import styled from "styled-components";
import { motion } from "framer-motion";
import { screenMediaQuery } from "../../utils/helpers/MediaQueries";

export const TeamCard = styled(motion.div)`
  max-width: 20.375rem;
  display: flex;
  height: max-content;
  background-color: ${(props) =>
    props.theme.leadership.cards.outer.backgroundColor};
  border: 0.5px solid
    ${(props) => props.theme.leadership.cards.outer.borderColor};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.4rem 0 0.3rem 0;
  justify-content: space-around;
  flex: 1;
  margin: 1rem 0 0 1rem;

  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    max-width: 50rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    max-width: 27.375rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    max-width: 27.375rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    max-width: 27.375rem;
  }
  @media ${screenMediaQuery.tabletAndMobilePortrait} {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    margin: 0;
  }
  @media ${screenMediaQuery.mobilePortrait} {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    margin: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    flex-basis: unset;
    margin: 0;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.theme.leadership.cards.inner.backgroundColor};
  border-radius: 5px 5px 0 0;
  padding-bottom: 0.5rem;
  height: 95%;
  max-height: 95%;
  width: 95%;
  transform-style: preserve-3d;
`;

export const TeamPhoto = styled.img`
  width: 95%;
  height: fit-content;
  margin: 0.4rem auto 0;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const Title = styled.h2`
  width: 95%;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${(props) => props.theme.leadership.cards.inner.front.textColor};
  margin: 0.5rem auto 0;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 0.9rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 0.8rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 0.65rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 0.55rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 0.65rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 0.6rem;
  }
`;

export const BilletContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.5rem auto 0;
  align-items: center;
`;

export const Divider = styled.div`
  width: 15px;
  height: 0;
  background-color: ${(props) => props.theme.borderRed};
  border: 1px solid ${(props) => props.theme.borderRed};
  transform: rotate(90deg);
`;

export const Billet = styled.h3`
  font-weight: lighter;
  font-size: 0.9rem;
  color: ${(props) => props.theme.leadership.cards.inner.front.textColor};
  margin: 0;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1.2rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 0.7rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 0.7rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 0.5rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 0.55rem;
  }
`;

export const BarContainer = styled.div`
  width: 94.5%;
  padding: 0 0 0.1rem;
`;

export const Information = styled.button`
  appearance: none;
  margin: 0.4rem 0.8rem 0 0.4rem;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.socials.backgroundColor};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: width 500ms, height 500ms;
  background-image: url(${(prop) =>
    prop.theme.leadership.cards.inner.infoButton});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 2.2rem;
  width: 2.2rem;
  border: none;
  align-self: flex-end;
  z-index: 2;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    height: 2.2rem;
    width: 2.2rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    height: 2.8rem;
    width: 2.8rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    height: 2.8rem;
    width: 2.8rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    height: 2.2rem;
    width: 2.2rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    height: 1.8rem;
    width: 1.8rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    height: 1.8rem;
    width: 1.8rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    height: 1.4rem;
    width: 1.4rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    height: 1.4rem;
    width: 1.4rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    height: 1.4rem;
    width: 1.4rem;
    margin: 0.4rem 0.3rem 0 0.4rem;
  }
`;

export const FrontCardContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const BackCardContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto 0.3rem;
  align-self: center;
  position: fixed;
  padding: 0.2rem 0.5rem;
  height: 80%;
`;

export const AboutTitle = styled(Title)`
  color: ${(props) => props.theme.leadership.cards.inner.back.textColor};
  margin-bottom: 1rem;
  width: max-content;
`;

export const AboutBody = styled.div`
  margin: 0 auto;
  position: relative;
  font-size: 0.85rem;
  color: ${(props) => props.theme.leadership.cards.inner.back.about.textColor};
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.leadership.cards.inner.back.about.backgroundColor};
  padding: 0.5rem;
  overflow-y: scroll;
  height: 100%;
  @media ${screenMediaQuery.desktopUltraHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopQuadHighDefinition} {
    font-size: 1.3rem;
  }
  @media ${screenMediaQuery.desktopWideQuadHighDefinition} {
    font-size: 1.25rem;
  }
  @media ${screenMediaQuery.desktopFullHighDefinition} {
    font-size: 1rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 0.85rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 0.7rem;
  }
  @media ${screenMediaQuery.iPadMiniPortrait} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletSmallPortrait} {
    font-size: 0.5rem;
  }
  @media ${screenMediaQuery.tabletSmallLandscape} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndiPadLandscape} {
    font-size: 0.6rem;
  }
  @media ${screenMediaQuery.tabletAndMobileLandscape} {
    font-size: 0.55rem;
  }
`;

export const AboutTitleUnderline = styled.div`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
  border-bottom: 0.063rem solid ${(props) => props.theme.borderRed};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + 0.5rem);
`;
