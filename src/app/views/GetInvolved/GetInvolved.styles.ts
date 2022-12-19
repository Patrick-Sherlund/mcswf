import styled from "styled-components";
import { motion } from "framer-motion";
import { VerticalDivider } from "../LearnMore/LearnMore.styles";
import { screenMediaQuery } from "../../constants/data/MediaQueries";

export const GetInvolvedContainer = styled(motion.div)`
  padding-top: 10rem;
  margin-top: 0;
  height: 82vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${screenMediaQuery.mobilePortrait} {
    padding-top: 6rem !important;
    padding-top: 0;
  }
  @media ${screenMediaQuery.mobileLandscape} {
    padding-top: 7rem !important;
    padding-top: 0;
  }

  @media ${screenMediaQuery.altDesktopFullHighDefinition} {
    padding-bottom: 40rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    padding-bottom: 37rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    padding-bottom: 34rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    padding-bottom: 34rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    padding-bottom: 34rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    padding-bottom: 20rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    padding-bottom: 5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 6rem;

  @media ${screenMediaQuery.altDesktopFullHighDefinition} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.desktopLarge} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.tabletLarge} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.desktopMedium} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    flex-direction: column;
    height: auto;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    flex-direction: column;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 80%;
  padding: 0.5rem;
  margin: 0 0 0 3rem;
  background-color: #5c6372;
  border: 0.5px solid #c0c2ca;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow-x: hidden;

  @media ${screenMediaQuery.altDesktopFullHighDefinition} {
    width: 85%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 85%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 85%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 85%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 90%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 90%;
    margin: 0 0 0 1.2rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 90%;
    margin: 0 0 0 1.2rem;
  }
`;

export const InnerCard = styled(InfoCard)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 35%;
  padding: 0;
  margin: 0;
  background: #f9f9f9;
  box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px 4px 0 0;
`;

export const BannerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 1rem;
  @media ${screenMediaQuery.altDesktopFullHighDefinition} {
    width: 85%;
  }
  @media ${screenMediaQuery.desktopXLarge} {
    width: 85%;
  }
  @media ${screenMediaQuery.desktopLarge} {
    width: 85%;
  }
  @media ${screenMediaQuery.tabletLarge} {
    width: 85%;
  }
  @media ${screenMediaQuery.desktopMedium} {
    width: 90%;
  }
  @media ${screenMediaQuery.laptopAndDesktop} {
    width: 90%;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 2rem;
`;

export const SubTitle = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  font-weight: lighter;
  font-size: 1.6rem;
  color: white;
  text-align: center;
  margin: 0;
`;

export const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 2.8rem;
  color: white;
  text-align: center;
  margin: 0;
`;

export const Banner = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 35%;
  margin: 1.8rem 1rem 1.8rem 0;
  padding: 0.5rem;
  background-color: #5c6372;
  border: 0.5px solid #c0c2ca;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const InnerBanner = styled(Banner)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: auto 0;
  background: #f9f9f9;
  box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0 0 4px;
`;

export const VerticalContentDivider = styled.div`
  margin: 0 0 0 auto;
  background-color: #b00d25;
  box-shadow: inset -2px 4px 4px rgba(0, 0, 0, 0.25);
  width: 2%;
  height: 100%;
`;

export const HorizontalDivider = styled(VerticalContentDivider)`
  margin: 0;
  height: 2%;
  width: 100%;
`;

export const BannerImage = styled.img`
  width: 40%;
  height: 100%;
  background-color: #873852;
  border-radius: 0 4px 4px 0;
`;

export const InfoCardImage = styled(BannerImage)`
  width: 100%;
  height: 64%;
  background-size: cover;
  border-radius: 0 0 4px 4px;
`;

export const VerticalTextDivider = styled(VerticalDivider)``;

export const ContentTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0 0;
  font-weight: 600;
  color: black;
  font-size: 2.5rem;

  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 2.25rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1.825rem;
  }
`;

export const ContentBody = styled.h3`
  padding: 0 0.5rem 0.5rem 2rem;
  font-weight: lighter;
  color: black;
  font-size: 1.6rem;
  overflow-y: scroll;

  @media ${screenMediaQuery.laptopAndDesktop} {
    font-size: 1.25rem;
  }
  @media ${screenMediaQuery.tabletAndiPadPortrait} {
    font-size: 1rem;
  }
`;

export const JoinTeamButton = styled(motion.div)`
  width: 25rem;
  height: 10rem;
  align-self: center;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: width 500ms, height 500ms, margin 500ms;
  background-image: url(${(prop) => prop.theme.getInvolved.svg.joinTeamButton});
`;
