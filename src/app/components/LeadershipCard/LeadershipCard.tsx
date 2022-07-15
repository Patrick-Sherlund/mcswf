import React, { FC } from "react";
import {
  BarContainer,
  Billet,
  BilletContainer,
  Divider,
  InnerCard,
  TeamCard,
  TeamPhoto,
  Title,
} from "./LeadershipCard.styles";
import { ContactCard } from "../../models/interfaces/ContactCard";
import StatusBar from "../StatusBar/StatusBar";

interface LeadershipCardProps {
  billetCard: ContactCard;
  statusPercentage?: number;
}

const LeadershipCard: FC<LeadershipCardProps> = (
  leadershipCardProps: LeadershipCardProps
) => (
  <TeamCard>
    <InnerCard>
      <TeamPhoto src={leadershipCardProps.billetCard.photo} />
      <Title>{leadershipCardProps.billetCard.title}</Title>
      <BilletContainer>
        <Divider />
        <Billet>{leadershipCardProps.billetCard.billet}</Billet>
      </BilletContainer>
    </InnerCard>
    {leadershipCardProps.statusPercentage && (
      <BarContainer>
        <StatusBar statusPercentage={leadershipCardProps.statusPercentage} />
      </BarContainer>
    )}
  </TeamCard>
);

export default LeadershipCard;
