import styled from "styled-components";
import facebookSvg from "../../../assets/svg/facebook.svg"
import instagramSvg from "../../../assets/svg/instagram.svg"
import linkedinSvg from "../../../assets/svg/linkedin.svg"
import twitterSvg from "../../../assets/svg/twitter.svg"
import youtubeSvg from "../../../assets/svg/youtube.svg"

export const HomeContainer = styled.div`
  padding-top: 12rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.header`
  margin: 8rem auto 2rem;
  display: flex;
  flex-direction: row;
`

export const StyledH2 = styled.h2`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  padding: 0 1rem;
  color: #EDEDED;
  font-size: 5rem;
  
  @media screen and (max-width: 1315px) {
    font-size: 3rem;
  }
`

export const TitleTop = styled(StyledH2)`
    margin-top: 0;
`;

export const Divider = styled.div`
  height: 10rem;
  width: .15rem;
  background-color: #C20000;

  @media screen and (max-width: 1315px) {
    height: 6rem;
  }
`;

export const HomeContent = styled.div`
  margin: 0 auto 5rem;
  display: flex;
  flex-direction: row;
`;

export const StyledH3 = styled.h3`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  color: #EDEDED;
  font-size: 2rem;
  padding-left: .5rem;

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

export const SocialGroup = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: max-content;
  align-content: space-evenly;
`;

const SocialButton = styled.div`
  height: 4.25rem;
  width: 4.25rem;
  padding: 0 .25rem;
`;

export const FacebookButton = styled(SocialButton)`
  position: relative;
  background-image: url(${facebookSvg});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const LinkedInButton = styled(SocialButton)`
  position: relative;
  background-image: url(${linkedinSvg});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const InstagramButton = styled(SocialButton)`
  position: relative;
  background-image: url(${instagramSvg});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const TwitterButton = styled(SocialButton)`
  position: relative;
  background-image: url(${twitterSvg});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const YoutubeButton = styled(SocialButton)`
  position: relative;
  background-image: url(${youtubeSvg});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
