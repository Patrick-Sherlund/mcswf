import React, { FC, useEffect } from "react";
import { ContentContainerBody } from "./AppContent.styles";
import Home from "../../views/Home/Home";
import LearnMore from "../../views/LearnMore/LearnMore";
import Disciplines from "../../views/Disciplines/Disciplines";
import TheTeam from "../../views/TheTeam/TheTeam";
import GetInvolved from "../../views/GetInvolved/GetInvolved";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { PageName } from "../../constants/enums/global";
import { LeadershipContactCards } from "../../constants/data/leadership";

interface AppContentProps {
  currentPage: PageName;
}

const AppContent: FC<AppContentProps> = (appContentProps: AppContentProps) => {
  const currentPage = appContentProps.currentPage;
  const animationControls = useAnimation();
  const [elementRef, inView] = useInView({
    threshold: 0,
    rootMargin: "126px",
  });

  useEffect(() => {
    animationControls
      .start(inView ? "hidden" : "visible")
      .catch((error) => console.log(`An error has occurred: ${error}`));
  }, [animationControls, inView]);

  return (
    <ContentContainerBody>
      <MobileNavBar
        currentPage={currentPage}
        animationControls={animationControls}
      />
      <Home elementRef={elementRef} />
      <LearnMore />
      <Disciplines />
      <TheTeam contactCards={LeadershipContactCards} />
      <GetInvolved />
    </ContentContainerBody>
  );
};

export default AppContent;
