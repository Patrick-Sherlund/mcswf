import React, { FC } from "react";
import {
  DesktopContainer,
  LearnMoreContainer,
  MobileContainer,
} from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import LearnMoreCard from "../../components/DataCard/DataCard";
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
            <LearnMoreCard
              key={`learn-more-desktop-${index}`}
              title={data.title}
              body={data.body}
            />
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
                <LearnMoreCard
                  key={index}
                  title={data.title}
                  body={data.body}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MobileContainer>
    </LearnMoreContainer>
  );
};

export default LearnMore;
