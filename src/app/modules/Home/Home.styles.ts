import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 12rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.header`
  margin: 10rem auto 2rem;
  display: flex;
  flex-direction: row;
`

export const StyledH2 = styled.h2`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  padding: 0 1rem;
  color: ${props => props.theme.textColor};
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
  margin: 0 auto 6rem;
  display: flex;
  flex-direction: row;
`;

export const StyledH3 = styled.h3`
  font-family: DIN Next LT Pro, Inter, "Segoe UI", sans-serif;
  color: ${props => props.theme.textColor};
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
  margin: 0 .4rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.socials.backgroundColor};
  border: .175rem solid ${props => props.theme.socials.borderColor};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const FacebookButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.facebook});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const LinkedInButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.linkedin});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const InstagramButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.instagram});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const TwitterButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.twitter});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
export const YoutubeButton = styled(SocialButton)`
  position: relative;
  background-image: url(${prop => prop.theme.socials.youtube});
  background-repeat: no-repeat;
  background-position: 50% 50%
`;
