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
  const leadershipPhoto: string = leadershipCardProps.billetCard.photo;
  const title: string = leadershipCardProps.billetCard.title;
  const billet: string = leadershipCardProps.billetCard.billet;
  const bio: string = leadershipCardProps.billetCard.bio;
  const statusPercentage: number | undefined =
    leadershipCardProps.statusPercentage;

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
          <TeamPhoto src={leadershipPhoto} />
          <Title>{title}</Title>
          <BilletContainer>
            <Divider />
            <Billet>{billet}</Billet>
          </BilletContainer>
        </FrontCardContent>
        <BackCardContent
          variants={cardDisplayVariants}
          animate={isFlipped ? "shown" : "hidden"}
          initial={{ opacity: 0 }}
        >
          <AboutTitle>
            {billet}
            <AboutTitleUnderline />
          </AboutTitle>
          <AboutBody>{bio}</AboutBody>
        </BackCardContent>
        <Information onClick={() => toggleFlip()} />
      </InnerCard>
      {statusPercentage && (
        <BarContainer>
          <StatusBar statusPercentage={statusPercentage} />
        </BarContainer>
      )}
    </TeamCard>
  );
};

export default LeadershipCard;
