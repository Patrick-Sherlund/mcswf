import React, { FC } from "react";
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
  YoutubeButton,
  Logo,
  BottomNavContainer,
} from "./Home.styles";
import logo from "../../../assets/logo.webp";
import { HomeData } from "../../constants/data/home";
import { LearnMoreData } from "../../constants/data/learn-more";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";

interface HomeProps {
  elementRef: (node?: Element | null | undefined) => void;
}

const Home: FC<HomeProps> = (homeProps: HomeProps) => {
  const elementRef = homeProps.elementRef;

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      id={"Home"}
      ref={elementRef}
      data-testid={"home-container"}
    >
      <Logo
        src={logo}
        data-testid={"main-logo"}
        whileTap={{
          scale: [1, 0.7, 1.2, 1, 1.2],
          transition: { duration: 0.3 },
        }}
        drag
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <HomeHeader>
        <TitleTop
          initial={{ opacity: 0 }}
          animate={{ translateX: "200%", opacity: 1, x: "-200%" }}
          transition={{ x: { stiffness: 100 }, duration: 1.4, delay: 0.1 }}
          viewport={{ once: true }}
          data-testid={"home-title-top-primary"}
        >
          {HomeData.titles.titleTopPrimary}
        </TitleTop>
        <Divider
          initial={{ opacity: 0 }}
          animate={{
            translateY: "200%",
            opacity: 1,
            y: "-200%",
            scale: [0, 1],
            rotate: [0, 360],
          }}
          transition={{ y: { stiffness: 100 }, duration: 1.4, delay: 0.1 }}
          viewport={{ once: true }}
          data-testid={"home-title-divider"}
        />
        <StyledH2
          initial={{ opacity: 0 }}
          animate={{ translateX: "-200%", opacity: 1, x: "200%" }}
          transition={{ x: { stiffness: 100 }, duration: 1.4, delay: 0.1 }}
          viewport={{ once: true }}
          data-testid={"home-title-top-secondary"}
        >
          {HomeData.titles.titleTopSecondary}
        </StyledH2>
      </HomeHeader>
      <HomeContent>
        <LightContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.4 }}
          viewport={{ once: true }}
          data-testid={"home-content-light"}
        >
          {HomeData.titles.subMessageLight}
        </LightContent>
        <BoldContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1.4 }}
          viewport={{ once: true }}
          data-testid={"home-content-bold"}
        >
          {HomeData.titles.subMessageBold}
        </BoldContent>
      </HomeContent>
      <SocialGroup>
        <FacebookButton
          tab-index={5}
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2.7, duration: 0.7 },
          }}
          viewport={{ once: true }}
          href={HomeData.socialMediaLinks.facebook}
          target={"_blank"}
          data-testid={"home-social-facebook"}
        />
        <InstagramButton
          tab-index={6}
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2.76, duration: 0.7 },
          }}
          viewport={{ once: true }}
          href={HomeData.socialMediaLinks.instagram}
          target={"_blank"}
          data-testid={"home-social-instagram"}
        />
        <LinkedInButton
          tab-index={7}
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2.82, duration: 0.7 },
          }}
          viewport={{ once: true }}
          href={HomeData.socialMediaLinks.linkedin}
          target={"_blank"}
          data-testid={"home-social-linkedin"}
        />
        <TwitterButton
          tab-index={8}
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2.88, duration: 0.7 },
          }}
          viewport={{ once: true }}
          href={HomeData.socialMediaLinks.twitter}
          target={"_blank"}
          data-testid={"home-social-twitter"}
        />
        <YoutubeButton
          tab-index={9}
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2.92, duration: 0.7 },
          }}
          viewport={{ once: true }}
          href={HomeData.socialMediaLinks.youtube}
          target={"_blank"}
          data-testid={"home-social-youtube"}
        />
      </SocialGroup>
      <BottomNavContainer>
        <BottomNavigator
          navigationLink={LearnMoreData.navigationArrowLink}
          desktopOffset={-50}
          mobileOffset={-10}
          delay={2.92}
        />
      </BottomNavContainer>
    </HomeContainer>
  );
};

export default Home;
