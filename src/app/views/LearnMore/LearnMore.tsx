import React, { FC } from "react";
import {
  Agile,
  Body,
  DataCard,
  DesktopContainer,
  DesktopInformationPacket,
  Industry,
  LearnMoreContainer,
  LearnMoreFooter,
  MediaContainer,
  MediaGroup,
  MediaSubTitle,
  MediaTitle,
  MobileContainer,
  MobileInformationPacket,
  RoundedTeams,
  Talent,
  Title,
  VerticalDivider,
} from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  LearnMoreCardData,
  LearnMoreData,
} from "../../constants/data/learn-more";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { LeadershipData } from "../../constants/data/leadership";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";

const LearnMore: FC = () => {
  const cardEffect = "cards";
  return (
    <LearnMoreContainer
      id={"Learn-More"}
      data-testid="learn-more-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <DesktopContainer>
        {LearnMoreCardData.map((data, index) => {
          return (
            <DataCard
              key={`learn-more-desktop-${index}`}
              data-testid={`desktop-learn-more-card-${index}`}
            >
              <Title data-testid={`desktop-learn-more-card-title-${index}`}>
                <VerticalDivider />
                {data.title}
              </Title>
              <Body data-testid={`desktop-learn-more-card-body-${index}`}>
                {data.body}
              </Body>
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
                <DataCard data-testid={`mobile-learn-more-card-${index}`}>
                  <Title data-testid={`mobile-learn-more-card-title-${index}`}>
                    <VerticalDivider />
                    {data.title}
                  </Title>
                  <Body data-testid={`mobile-learn-more-card-body-${index}`}>
                    {data.body}
                  </Body>
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
          data-testid={`mobile-learn-more-footer-information-packet-svg`}
        />
      </MobileContainer>
      <LearnMoreFooter>
        <MediaGroup>
          <MediaContainer>
            <Talent data-testid={`learn-more-footer-talent-svg`} />
            <MediaTitle data-testid={`learn-more-footer-talent-title`}>
              {LearnMoreData.talent.title}
            </MediaTitle>
            <MediaSubTitle data-testid={`learn-more-footer-talent-sub-title`}>
              {LearnMoreData.talent.subTitle}
            </MediaSubTitle>
          </MediaContainer>

          <MediaContainer>
            <RoundedTeams data-testid={`learn-more-footer-rounded-teams-svg`} />
            <MediaTitle data-testid={`learn-more-footer-rounded-teams-title`}>
              {LearnMoreData.roundedTeams.title}
            </MediaTitle>
            <MediaSubTitle
              data-testid={`learn-more-footer-rounded-teams-sub-title`}
            >
              {LearnMoreData.roundedTeams.subTitle}
            </MediaSubTitle>
          </MediaContainer>
        </MediaGroup>

        <DesktopInformationPacket
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          data-testid={`desktop-learn-more-footer-information-packet-svg`}
        />
        <MediaGroup>
          <MediaContainer>
            <Agile data-testid={`learn-more-footer-agile-svg`} />
            <MediaTitle data-testid={`learn-more-footer-agile-title`}>
              {LearnMoreData.agile.title}
            </MediaTitle>
            <MediaSubTitle data-testid={`learn-more-footer-agile-sub-title`}>
              {LearnMoreData.agile.subTitle}
            </MediaSubTitle>
          </MediaContainer>

          <MediaContainer>
            <Industry data-testid={`learn-more-footer-industry-svg`} />
            <MediaTitle data-testid={`learn-more-footer-industry-title`}>
              {LearnMoreData.industry.title}
            </MediaTitle>
            <MediaSubTitle data-testid={`learn-more-footer-industry-sub-title`}>
              {LearnMoreData.industry.subTitle}
            </MediaSubTitle>
          </MediaContainer>
        </MediaGroup>
      </LearnMoreFooter>
      <BottomNavigator
        navigationLink={LeadershipData.navigationArrowLink}
        desktopOffset={-50}
        mobileOffset={10}
      />
    </LearnMoreContainer>
  );
};

export default LearnMore;
