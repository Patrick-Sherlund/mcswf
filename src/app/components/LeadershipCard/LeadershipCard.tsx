import React, { FC } from "react";
import {
  AboutBody,
  AboutTitle,
  AboutTitleUnderline,
  BackCardContent,
  BarContainer,
  Billet,
  BilletContainer,
  Divider,
  FrontCardContent,
  Information,
  InnerCard,
  TeamCard,
  TeamPhoto,
  Title,
} from "./LeadershipCard.styles";
import { ContactCard } from "../../models/interfaces/ContactCard";
import StatusBar from "../StatusBar/StatusBar";
import { useCycle, Variants } from "framer-motion";

interface LeadershipCardProps {
  billetCard: ContactCard;
  statusPercentage?: number;
}

const cardFlipVariants: Variants = {
  front: {
    rotateY: [0, 90, 0],
    rotateX: [0, 5, 0],
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  back: {
    rotateY: [0, 90, 0],
    rotateX: [0, 5, 0],
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

const cardDisplayVariants: Variants = {
  shown: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const LeadershipCard: FC<LeadershipCardProps> = (
  leadershipCardProps: LeadershipCardProps
) => {
  const [isFlipped, toggleFlip] = useCycle(false, true);

  return (
    <TeamCard
      variants={cardFlipVariants}
      animate={isFlipped ? "back" : "front"}
    >
      <InnerCard>
        <FrontCardContent
          variants={cardDisplayVariants}
          animate={isFlipped ? "hidden" : "shown"}
        >
          <TeamPhoto src={leadershipCardProps.billetCard.photo} />
          <Title>{leadershipCardProps.billetCard.title}</Title>
          <BilletContainer>
            <Divider />
            <Billet>{leadershipCardProps.billetCard.billet}</Billet>
          </BilletContainer>
        </FrontCardContent>
        <BackCardContent
          variants={cardDisplayVariants}
          animate={isFlipped ? "shown" : "hidden"}
          initial={{ opacity: 0 }}
        >
          <AboutTitle>
            {leadershipCardProps.billetCard.billet}
            <AboutTitleUnderline />
          </AboutTitle>
          <AboutBody>{leadershipCardProps.billetCard.bio}</AboutBody>
        </BackCardContent>
        <Information onClick={() => toggleFlip()} />
      </InnerCard>
      {leadershipCardProps.statusPercentage && (
        <BarContainer>
          <StatusBar statusPercentage={leadershipCardProps.statusPercentage} />
        </BarContainer>
      )}
    </TeamCard>
  );
};

export default LeadershipCard;
