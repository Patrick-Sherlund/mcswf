import React, {FC} from 'react';
import {HomeContainer, TitleTop, StyledH2, Divider, HomeHeader, HomeContent, LightContent, BoldContent, SocialGroup, FacebookButton, InstagramButton, LinkedInButton, TwitterButton, YoutubeButton} from "./Home.styles";


interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <HomeContainer id={'Home'}>
      <HomeHeader>
          <TitleTop>U.S. Marine Corps</TitleTop>
          <Divider/>
          <StyledH2>Software Factory</StyledH2>
      </HomeHeader>
      <HomeContent>
          <LightContent>World-Class Software Engineered</LightContent>
          <BoldContent>By Marines, For Marines.</BoldContent>
      </HomeContent>
      <SocialGroup>
          <FacebookButton/>
          <InstagramButton/>
          <LinkedInButton/>
          <TwitterButton/>
          <YoutubeButton/>
      </SocialGroup>
  </HomeContainer>
);

export default Home;
