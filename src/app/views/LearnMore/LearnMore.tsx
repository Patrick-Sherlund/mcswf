import React, { FC } from "react";
import { LearnMoreContainer } from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import LearnMoreCard from "../../components/LearnMoreCard/LearnMoreCard";

const LearnMore: FC = () => {
  const cardEffect = "cards";

  return (
    <LearnMoreContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      data-testid="learn-more-container"
      id={"Learn-More"}
    >
      <Swiper effect={cardEffect} modules={[EffectCards]}>
        <SwiperSlide>
          <LearnMoreCard title={""} body={""} />
        </SwiperSlide>
      </Swiper>
    </LearnMoreContainer>
  );
};

export default LearnMore;
