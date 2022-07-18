import React, { FC } from "react";
import { TheTeamContainer, TeamContent } from "./TheTeam.styles";
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
  const billetCards: ContactCard[] = teamProps.billetCards;
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
      <TeamContent>
        <Swiper effect={cardEffect} modules={[EffectCards]}>
          {billetCards.map((billetCard, index) => {
            const correctedIndex: number = index + 0.0001;
            const statusPercentage: number =
              correctedIndex / (billetCards.length - 1);
            return (
              <SwiperSlide key={"swiper-" + index}>
                <LeadershipCard
                  statusPercentage={statusPercentage}
                  billetCard={billetCard}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TeamContent>
    </TheTeamContainer>
  );
};

export default TheTeam;
