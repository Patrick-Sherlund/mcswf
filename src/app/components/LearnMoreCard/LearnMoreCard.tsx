import React, { FC } from "react";
import { Card, LearnMoreCardContainer } from "./LearnMoreCard.styles";

interface LearnMoreCardProps {
  title: string;
  body: string;
}

const LearnMoreCard: FC<LearnMoreCardProps> = () => (
  <LearnMoreCardContainer data-testid="learn-more-card-container">
    <Card />
  </LearnMoreCardContainer>
);

export default LearnMoreCard;
