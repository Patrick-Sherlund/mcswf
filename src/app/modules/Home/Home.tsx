import React, {FC} from 'react';
import {
    HomeContainer,
    TitleTop,
    StyledH2,
    Divider,
    HomeHeader,
    HomeContent,
    LightContent,
    BoldContent,
    SocialGroup,
    FacebookButton,
    InstagramButton,
    LinkedInButton,
    TwitterButton,
    YoutubeButton
} from "./Home.styles";


interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <HomeContainer  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: .3 }}
                  viewport={{ once: true }}
                  id={'Home'}>
      <HomeHeader>
          <TitleTop
              animate={{ translateX: '350%', opacity: 1, x: '-350%' }}
              transition={{
                  x: { stiffness: 100 },
                  default: { duration: 1 },
              }}
              viewport={{ once: true }}
          >U.S. Marine Corps</TitleTop>
          <Divider animate={{ translateY: '350%', opacity: 1, y: '-350%' }}
                   transition={{
                       y: { stiffness: 100 },
                       default: { duration: 1 },
                   }}
                   viewport={{ once: true }} />
          <StyledH2
              animate={{ translateX: '-350%', opacity: 1, x: '350%' }}
              transition={{
                  x: { stiffness: 100 },
                  default: { duration: 1 },
              }}
              viewport={{ once: true }}
          >Software Factory</StyledH2>
      </HomeHeader>
      <HomeContent>
          <LightContent initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        viewport={{ once: true }} >World-Class Software Engineered</LightContent>
          <BoldContent initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 1.7 }}
                       viewport={{ once: true }} >By Marines, For Marines.</BoldContent>
      </HomeContent>
      <SocialGroup>
          <FacebookButton initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 2.3 }}
                          viewport={{ once: true }} />
          <InstagramButton initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ delay: 2.35 }}
                           viewport={{ once: true }} />
          <LinkedInButton initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 2.4 }}
                          viewport={{ once: true }} />
          <TwitterButton initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 2.45 }}
                         viewport={{ once: true }} />
          <YoutubeButton initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 2.5 }}
                         viewport={{ once: true }} />
      </SocialGroup>
  </HomeContainer>
);

export default Home;
