import React, { FC } from "react";
import {
  TheTeamContainer,
  SampleText,
  TeamCard,
  TeamContent,
  InnerCard,
  TeamPhoto,
  Title,
  BilletContainer,
  Divider,
  Billet,
} from "./TheTeam.styles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import teamPhoto from "../../../assets/profile.webp";

const TheTeam: FC = () => {
  const card = ["card 1", "card 2", "card 3"];
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
        <Swiper effect={"cards"} modules={[EffectCards]}>
          {card.map((cardName, index) => {
            return (
              <SwiperSlide key={"swiper-" + index}>
                <TeamCard>
                  <InnerCard>
                    <TeamPhoto src={teamPhoto} />
                    <Title>LtCol Bahk, Charlie</Title>
                    <BilletContainer>
                      <Divider />
                      <Billet>Co-Director</Billet>
                    </BilletContainer>
                  </InnerCard>
                </TeamCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TeamContent>
    </TheTeamContainer>
  );
};

export default TheTeam;
