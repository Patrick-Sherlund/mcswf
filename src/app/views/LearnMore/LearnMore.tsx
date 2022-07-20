import React, { FC } from "react";
import {
  DesktopContainer,
  LearnMoreContainer,
  MobileContainer,
  Title,
  Body,
  VerticalDivider,
  LearnMoreFooter,
  Talent,
  RoundedTeams,
  Agile,
  Industry,
  InformationPacket,
  MediaContainer,
  MediaTitle,
  MediaSubTitle,
  DataCard,
} from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { LearnMoreData } from "../../constants/data/learn-more";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

const LearnMore: FC = () => {
  const cardEffect = "cards";
  return (
    <LearnMoreContainer id={"Learn-More"} data-testid="learn-more-container">
      <DesktopContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {LearnMoreData.map((data, index) => {
          return (
            <DataCard key={`learn-more-desktop-${index}`}>
              <Title>
                <VerticalDivider />
                {data.title}
              </Title>
              <Body>{data.body}</Body>
            </DataCard>
          );
        })}
      </DesktopContainer>
      <MobileContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Swiper effect={cardEffect} modules={[EffectCards]}>
          {LearnMoreData.map((data, index) => {
            return (
              <SwiperSlide key={`learn-more-mobile-${index}`}>
                <DataCard key={`learn-more-desktop-${index}`}>
                  <Title>
                    <VerticalDivider />
                    {data.title}
                  </Title>
                  <Body>{data.body}</Body>
                </DataCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MobileContainer>
      <LearnMoreFooter>
        <MediaContainer>
          <Talent />
          <MediaTitle>World-Class Talent</MediaTitle>
          <MediaSubTitle>Industry-Leading Engineers</MediaSubTitle>
        </MediaContainer>

        <MediaContainer>
          <RoundedTeams />
          <MediaTitle>Well-Rounded Teams</MediaTitle>
          <MediaSubTitle>Developer, PM, UI/UX, Platform Engineer</MediaSubTitle>
        </MediaContainer>
        <InformationPacket />

        <MediaContainer>
          <Agile />
          <MediaTitle>Agile DevSecOps</MediaTitle>
          <MediaSubTitle>Continuously Build, Deploy & Operate</MediaSubTitle>
        </MediaContainer>

        <MediaContainer>
          <Industry />
          <MediaTitle>Industry Partners</MediaTitle>
          <MediaSubTitle>Newest Tech-hub Meets Industry</MediaSubTitle>
        </MediaContainer>
      </LearnMoreFooter>
    </LearnMoreContainer>
  );
};

export default LearnMore;
