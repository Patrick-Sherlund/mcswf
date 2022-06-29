import React, {FC} from 'react';
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
    YoutubeButton
} from "./Home.styles";
import {Link} from "../../components/NavBar/NavBar.styles";

interface HomeProps {
}

const Home: FC<HomeProps> = () => {
    const titleTopPrimary: string = "U.S. Marine Corps";
    const titleTopSecondary: string = "Software Factory";
    const subMessageLight: string = "World-Class Software Engineered";
    const subMessageBold: string = "By Marines, For Marines.";
    const navigationArrowLink: string = 'Learn-More';

    return (
        <HomeContainer initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: .3}} viewport={{once: true}} id={'Home'} data-testid={'home-container'}>
            <HomeHeader>
                <TitleTop animate={{translateX: '350%', opacity: 1, x: '-350%'}} transition={{x: {stiffness: 100}, default: {duration: 1},}} viewport={{once: true}} data-testid={'home-title-top-primary'}>
                    {titleTopPrimary}
                </TitleTop>
                <Divider animate={{translateY: '350%', opacity: 1, y: '-350%', scale: [0, 1], rotate: [0, 360]}} transition={{y: {stiffness: 100}, default: {duration: 1},}} viewport={{once: true}} data-testid={'home-title-divider'}/>
                <StyledH2 animate={{translateX: '-350%', opacity: 1, x: '350%'}} transition={{x: {stiffness: 100}, default: {duration: 1},}} viewport={{once: true}} data-testid={'home-title-top-secondary'}>
                    {titleTopSecondary}
                </StyledH2>
            </HomeHeader>
            <HomeContent>
                <LightContent initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.2}} viewport={{once: true}} data-testid={'home-content-light'}>
                    {subMessageLight}
                </LightContent>
                <BoldContent initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.7}} viewport={{once: true}} data-testid={'home-content-bold'}>
                    {subMessageBold}
                </BoldContent>
            </HomeContent>
            <SocialGroup>
                <FacebookButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.3} }}  viewport={{once: true}} data-testid={'home-social-facebook'}/>
                <InstagramButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.34}}} viewport={{once: true}} data-testid={'home-social-instagram'}/>
                <LinkedInButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.38}}} viewport={{once: true}} data-testid={'home-social-linkedin'}/>
                <TwitterButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.42}}}  viewport={{once: true}} data-testid={'home-social-twitter'}/>
                <YoutubeButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.46}}} viewport={{once: true}} data-testid={'home-social-youtube'}/>
            </SocialGroup>
            <Link ignoreCancelEvents={true} isDynamic={true} onSetActive={() => {}} spy={true} smooth={'easeInQuad'} offset={-50} delay={-500} duration={300} to={navigationArrowLink}  data-testid={'home-navigation-arrow-link'}>
                <NavigationArrow initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.46}}} viewport={{once: true}} animate={{y: [10, 40, 0, 40, 0, 40, 0], transition: {delay: 3, duration: 3}}} whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}}  data-testid={'home-navigation-arrow'}/>
            </Link>
        </HomeContainer>
    );
}

export default Home;
