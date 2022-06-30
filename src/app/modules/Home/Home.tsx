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
                <TitleTop initial={{opacity: 0}} animate={{translateX: '200%', opacity: 1, x: '-200%'}} transition={{x: {stiffness: 100}, duration: 1.4, delay: .1}} viewport={{once: true}} data-testid={'home-title-top-primary'}>
                    {titleTopPrimary}
                </TitleTop>
                <Divider initial={{opacity: 0}} animate={{translateY: '200%', opacity: 1, y: '-200%', scale: [0, 1], rotate: [0, 360]}} transition={{y: {stiffness: 100}, duration: 1.4, delay: .1}} viewport={{once: true}} data-testid={'home-title-divider'}/>
                <StyledH2 initial={{opacity: 0}} animate={{translateX: '-200%', opacity: 1, x: '200%'}} transition={{x: {stiffness: 100}, duration: 1.4, delay: .1}} viewport={{once: true}} data-testid={'home-title-top-secondary'}>
                    {titleTopSecondary}
                </StyledH2>
            </HomeHeader>
            <HomeContent>
                <LightContent initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.2, duration: 1.4}} viewport={{once: true}} data-testid={'home-content-light'}>
                    {subMessageLight}
                </LightContent>
                <BoldContent initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.9, duration: 1.4}} viewport={{once: true}} data-testid={'home-content-bold'}>
                    {subMessageBold}
                </BoldContent>
            </HomeContent>
            <SocialGroup>
                <FacebookButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.7, duration: .7} }}  viewport={{once: true}} data-testid={'home-social-facebook'}/>
                <InstagramButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.76, duration: .7}}} viewport={{once: true}} data-testid={'home-social-instagram'}/>
                <LinkedInButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.82, duration: .7}}} viewport={{once: true}} data-testid={'home-social-linkedin'}/>
                <TwitterButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.88, duration: .7}}}  viewport={{once: true}} data-testid={'home-social-twitter'}/>
                <YoutubeButton whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.92, duration: .7}}} viewport={{once: true}} data-testid={'home-social-youtube'}/>
            </SocialGroup>
            <Link ignoreCancelEvents={true} isDynamic={true} onSetActive={() => {}} spy={true} smooth={'easeInQuad'} offset={-50} delay={-500} duration={300} to={navigationArrowLink}  data-testid={'home-navigation-arrow-link'}>
                <NavigationArrow initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 2.92, duration: 1}}} viewport={{once: true}} animate={{y: [10, 40, 0, 40, 0, 40, 0], transition: {delay: 3.3, duration: 3}}} whileHover={{scale: 1.12, transition: { ease: "easeInOut", duration: .2, delay: 0 }}} whileTap={{ scale: 1}}  data-testid={'home-navigation-arrow'}/>
            </Link>
        </HomeContainer>
    );
}

export default Home;
