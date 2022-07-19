import React, { FC } from "react";
import {
  TheTeamContainer,
  MobileTeamContent,
  DesktopTeamContent,
  LeadershipRowTop,
  LeadershipRowBottom,
  BottomCardContainer,
  LeadershipTitle,
} from "./TheTeam.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { ContactCard } from "../../models/interfaces/ContactCard";
import LeadershipCard from "../../components/LeadershipCard/LeadershipCard";

interface TeamProps {
  contactCards: ContactCard[];
}

const TheTeam: FC<TeamProps> = (teamProps: TeamProps) => {
  const topRowDisplayCount = 4;
  const cardEffect = "cards";
  const contactCards: ContactCard[] = teamProps.contactCards;
  const contactCardsTop: ContactCard[] = contactCards.slice(
    0,
    topRowDisplayCount
  );
  const contactCardsBottom: ContactCard[] = contactCards.slice(
    topRowDisplayCount,
    teamProps.contactCards.length
  );

  return (
    <TheTeamContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      data-testid="TheTeam"
      id={"The-Team"}
    >
      <LeadershipTitle>Leadership</LeadershipTitle>
      <MobileTeamContent>
        <Swiper effect={cardEffect} modules={[EffectCards]}>
          {contactCards.map((billetCard, index) => {
            const correctedIndex: number = index + 0.0001;
            const statusPercentage: number =
              correctedIndex / (contactCards.length - 1);
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
          {contactCardsTop.map((billetCard, index) => {
            return (
              <LeadershipCard
                key={`leadership-desktop-top-${index}`}
                billetCard={billetCard}
              />
            );
          })}
        </LeadershipRowTop>
        <LeadershipRowBottom>
          {contactCardsBottom.map((billetCard, index) => {
            return (
              <BottomCardContainer key={`leadership-desktop-bottom-${index}`}>
                <LeadershipCard billetCard={billetCard} />
              </BottomCardContainer>
            );
          })}
        </LeadershipRowBottom>
      </DesktopTeamContent>
    </TheTeamContainer>
  );
};

export default TheTeam;
