import React, { FC, ReactNode } from "react";
import { Card, DataCardContainer } from "./DataCard.styles";

interface DataCardProps {
  children: ReactNode;
}

const DataCard: FC<DataCardProps> = (dataCardProps: DataCardProps) => {
  return (
    <DataCardContainer data-testid="data-card-container">
      <Card>{dataCardProps.children}</Card>
    </DataCardContainer>
  );
};

export default DataCard;
