import React, { FC } from "react";
import {
  TheTeamContainer,
  MobileTeamContent,
  DesktopTeamContent,
  LeadershipRowTop,
  LeadershipRowBottom,
} from "./TheTeam.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { ContactCard } from "../../models/interfaces/ContactCard";
import LeadershipCard from "../../components/LeadershipCard/LeadershipCard";

interface TeamProps {
  billetCards: ContactCard[];
}

const TheTeam: FC<TeamProps> = (teamProps: TeamProps) => {
  const countLeadershipTopRow = 4;
  const contractCardsTop: ContactCard[] = teamProps.billetCards.slice(
    0,
    countLeadershipTopRow
  );
  const contractCardsBottom: ContactCard[] = teamProps.billetCards.slice(
    countLeadershipTopRow,
    teamProps.billetCards.length
  );
  const cardEffect = "cards";

  return (
    <TheTeamContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      data-testid="TheTeam"
      id={"The-Team"}
    >
      <MobileTeamContent>
        <Swiper effect={cardEffect} modules={[EffectCards]}>
          {contractCardsTop.map((billetCard, index) => {
            const correctedIndex: number = index + 0.0001;
            const statusPercentage: number =
              correctedIndex / (contractCardsTop.length - 1);
            return (
              <SwiperSlide key={`swiper-mobile-${index}`}>
                <LeadershipCard
                  statusPercentage={statusPercentage}
                  billetCard={billetCard}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MobileTeamContent>
      <DesktopTeamContent>
        <LeadershipRowTop>
          {contractCardsTop.map((billetCard, index) => {
            return (
              <LeadershipCard
                key={`leadership-desktop-top-${index}`}
                billetCard={billetCard}
              />
            );
          })}
        </LeadershipRowTop>
        <LeadershipRowBottom>
          {contractCardsBottom.map((billetCard, index) => {
            return (
              <LeadershipCard
                key={`leadership-desktop-bottom-${index}`}
                billetCard={billetCard}
              />
            );
          })}
        </LeadershipRowBottom>
      </DesktopTeamContent>
    </TheTeamContainer>
  );
};

export default TheTeam;
