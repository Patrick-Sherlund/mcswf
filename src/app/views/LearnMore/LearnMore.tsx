import React, { FC } from "react";
import { LearnMoreContainer } from "./LearnMore.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import LearnMoreCard from "../../components/LearnMoreCard/LearnMoreCard";
import { LearnMoreData } from "../../constants/data/learn-more";

const LearnMore: FC = () => {
  return (
    <LearnMoreContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      data-testid="learn-more-container"
      id={"Learn-More"}
    >
      {LearnMoreData.map((data, index) => {
        return (
          <LearnMoreCard key={index} title={data.title} body={data.body} />
        );
      })}
    </LearnMoreContainer>
  );
};

export default LearnMore;
