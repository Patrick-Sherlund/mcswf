import React, { FC } from "react";
import {
  Card,
  DataCardContainer,
  Title,
  Body,
  VerticalDivider,
} from "./DataCard.styles";

interface DataCardProps {
  title: string;
  body: string;
}

const DataCard: FC<DataCardProps> = (DataCardProps: DataCardProps) => {
  const title = DataCardProps.title;
  const body = DataCardProps.body;
  return (
    <DataCardContainer data-testid="data-card-container">
      <Card>
        <Title>
          <VerticalDivider />
          {title}
        </Title>
        <Body>{body}</Body>
      </Card>
    </DataCardContainer>
  );
};

export default DataCard;
