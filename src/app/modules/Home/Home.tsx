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


interface HomeProps {
}

const Home: FC<HomeProps> = () => {
    const titleTopPrimary: string = "U.S. Marine Corps";
    const titleTopSecondary: string = "Software Factory";
    const subMessageLight: string = "World-Class Software Engineered";
    const subMessageBold: string = "By Marines, For Marines.";

    return (
        <HomeContainer initial={{opacity: 0}}
                       whileInView={{opacity: 1}}
                       transition={{delay: .3}}
                       viewport={{once: true}}
                       id={'Home'}>
            <HomeHeader>
                <TitleTop
                    animate={{translateX: '350%', opacity: 1, x: '-350%'}}
                    transition={{
                        x: {stiffness: 100},
                        default: {duration: 1},
                    }}
                >{titleTopPrimary}</TitleTop>
                <Divider animate={{translateY: '350%', opacity: 1, y: '-350%', scale: [0, 1], rotate: [0, 360]}}
                         transition={{
                             y: {stiffness: 100},
                             default: {duration: 1},
                         }}/>
                <StyledH2
                    animate={{translateX: '-350%', opacity: 1, x: '350%'}}
                    transition={{
                        x: {stiffness: 100},
                        default: {duration: 1},
                    }}
                >{titleTopSecondary}</StyledH2>
            </HomeHeader>
            <HomeContent>
                <LightContent initial={{opacity: 0}}
                              whileInView={{opacity: 1}}
                              transition={{delay: 1.2}}
                >{subMessageLight}</LightContent>
                <BoldContent initial={{opacity: 0}}
                             whileInView={{opacity: 1}}
                             transition={{delay: 1.7}}
                >{subMessageBold}</BoldContent>
            </HomeContent>
            <SocialGroup>
                <FacebookButton initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{delay: 2.3}}/>
                <InstagramButton initial={{opacity: 0}}
                                 whileInView={{opacity: 1}}
                                 transition={{delay: 2.32}}/>
                <LinkedInButton initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{delay: 2.34}}/>
                <TwitterButton initial={{opacity: 0}}
                               whileInView={{opacity: 1}}
                               transition={{delay: 2.36}}/>
                <YoutubeButton initial={{opacity: 0}}
                               whileInView={{opacity: 1}}
                               transition={{delay: 2.38}}/>
            </SocialGroup>
        </HomeContainer>
    );
}

export default Home;
