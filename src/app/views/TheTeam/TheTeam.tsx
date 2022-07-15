import React, { FC, useState } from "react";
import {
  TheTeamContainer,
  TeamCard,
  TeamContent,
  InnerCard,
  TeamPhoto,
  Title,
  BilletContainer,
  Divider,
  Billet,
  LeadershipCount,
} from "./TheTeam.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { ContactCard } from "../../models/interfaces/ContactCard";

interface TeamProps {
  billetCards: ContactCard[];
}

const TheTeam: FC<TeamProps> = (teamProps: TeamProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        <Swiper
          effect={cardEffect}
          modules={[EffectCards]}
          onSlideChange={(direction) =>
            setCurrentIndex(() => direction.activeIndex)
          }
        >
          {billetCards.map((billetCard, index) => {
            return (
              <SwiperSlide key={"swiper-" + index}>
                <TeamCard>
                  <InnerCard>
                    <TeamPhoto src={billetCard.photo} />
                    <Title>{billetCard.title}</Title>
                    <BilletContainer>
                      <Divider />
                      <Billet>{billetCard.billet}</Billet>
                    </BilletContainer>
                  </InnerCard>
                </TeamCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <LeadershipCount>{`${currentIndex + 1} of ${
          billetCards.length
        }`}</LeadershipCount>
      </TeamContent>
    </TheTeamContainer>
  );
};

export default TheTeam;
