import React, { FC } from "react";
import { NavigationArrow } from "../../App.styles";
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
} from "./Home.styles";
import { Link } from "../../components/NavBar/NavBar.styles";
import logo from "../../../assets/logo.webp";

const Home: FC = () => {
  const titleTopPrimary = "U.S. Marine Corps";
  const titleTopSecondary = "Software Factory";
  const subMessageLight = "World-Class Software Engineered";
  const subMessageBold = "By Marines, For Marines.";
  const navigationArrowLink = "Learn-More";

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      id={"Home"}
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
          {titleTopPrimary}
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
          {titleTopSecondary}
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
          {subMessageLight}
        </LightContent>
        <BoldContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1.4 }}
          viewport={{ once: true }}
          data-testid={"home-content-bold"}
        >
          {subMessageBold}
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
          data-testid={"home-social-youtube"}
        />
      </SocialGroup>
      <Link
        tab-index={10}
        ignoreCancelEvents={true}
        isDynamic={true}
        spy={true}
        smooth={"easeInQuad"}
        offset={-30}
        delay={-500}
        duration={300}
        to={navigationArrowLink}
        data-testid={"home-navigation-arrow-link"}
      >
        <NavigationArrow
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 2.92, duration: 1 } }}
          viewport={{ once: true }}
          animate={{
            y: [10, 40, 0, 40, 0, 40, 0],
            transition: { delay: 3.3, duration: 3 },
          }}
          whileHover={{
            scale: 1.12,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 1 }}
          data-testid={"home-navigation-arrow"}
        />
      </Link>
    </HomeContainer>
  );
};

export default Home;
