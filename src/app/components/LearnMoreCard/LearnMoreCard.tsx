import React, { FC } from "react";
import {
  Card,
  LearnMoreCardContainer,
  Title,
  Body,
  VerticalDivider,
} from "./LearnMoreCard.styles";

interface LearnMoreCardProps {
  title: string;
  body: string;
}

const LearnMoreCard: FC<LearnMoreCardProps> = (
  learnMoreCardProps: LearnMoreCardProps
) => {
  const title = learnMoreCardProps.title;
  const body = learnMoreCardProps.body;
  return (
    <LearnMoreCardContainer data-testid="learn-more-card-container">
      <Card>
        <Title>
          <VerticalDivider />
          {title}
        </Title>
        <Body>{body}</Body>
      </Card>
    </LearnMoreCardContainer>
  );
};

export default LearnMoreCard;
