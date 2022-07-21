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
  DesktopInformationPacket,
  MediaContainer,
  MediaTitle,
  MediaSubTitle,
  DataCard,
  MediaGroup,
  MobileInformationPacket,
} from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  LearnMoreCardData,
  LearnMoreMediaData,
} from "../../constants/data/learn-more";
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
        {LearnMoreCardData.map((data, index) => {
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
          {LearnMoreCardData.map((data, index) => {
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
        <MobileInformationPacket
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
        />
      </MobileContainer>
      <LearnMoreFooter>
        <MediaGroup>
          <MediaContainer>
            <Talent />
            <MediaTitle>{LearnMoreMediaData.talent.title}</MediaTitle>
            <MediaSubTitle>{LearnMoreMediaData.talent.subTitle}</MediaSubTitle>
          </MediaContainer>

          <MediaContainer>
            <RoundedTeams />
            <MediaTitle>{LearnMoreMediaData.roundedTeams.title}</MediaTitle>
            <MediaSubTitle>
              {LearnMoreMediaData.roundedTeams.subTitle}
            </MediaSubTitle>
          </MediaContainer>
        </MediaGroup>

        <DesktopInformationPacket
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
        />

        <MediaGroup>
          <MediaContainer>
            <Agile />
            <MediaTitle>{LearnMoreMediaData.agile.title}</MediaTitle>
            <MediaSubTitle>{LearnMoreMediaData.agile.subTitle}</MediaSubTitle>
          </MediaContainer>

          <MediaContainer>
            <Industry />
            <MediaTitle>{LearnMoreMediaData.industry.title}</MediaTitle>
            <MediaSubTitle>
              {LearnMoreMediaData.industry.subTitle}
            </MediaSubTitle>
          </MediaContainer>
        </MediaGroup>
      </LearnMoreFooter>
    </LearnMoreContainer>
  );
};

export default LearnMore;
