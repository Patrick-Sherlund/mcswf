import React, { FC, useEffect } from "react";
import { ContentContainerBody } from "./ContentContainer.styles";
import Home from "../../views/Home/Home";
import LearnMore from "../../views/LearnMore/LearnMore";
import Disciplines from "../../views/Disciplines/Disciplines";
import TheTeam from "../../views/TheTeam/TheTeam";
import GetInvolved from "../../views/GetInvolved/GetInvolved";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { PageName } from "../../constants/enums/global";
import { Leadership } from "../../constants/data/leadership";

interface ContentContainerProps {
  currentPage: PageName;
}

const ContentContainer: FC<ContentContainerProps> = (
  contentContainerProps: ContentContainerProps
) => {
  const currentPage = contentContainerProps.currentPage;
  const animationControls = useAnimation();
  const [elementRef, inView] = useInView({
    threshold: 0,
    rootMargin: "126px",
  });

  useEffect(() => {
    animationControls.start(inView ? "hidden" : "visible");
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
      <TheTeam billetCards={Leadership} />
      <GetInvolved />
    </ContentContainerBody>
  );
};

export default ContentContainer;