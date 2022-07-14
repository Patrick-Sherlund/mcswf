import { FC, useEffect } from "react";
import {
  MobileNavBarContainer,
  MobileNavPageName,
  MobileNavBorder,
} from "./MobileNavBar.styles";
import { PageName } from "../../global/enums/global";
import { AnimationControls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MobileNavBarProps {
  currentPage: PageName;
  animationControls: AnimationControls;
}

const navBarVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

const MobileNavBar: FC<MobileNavBarProps> = (
  mobileNavBarProps: MobileNavBarProps
) => {
  const currentPage: PageName = mobileNavBarProps.currentPage;
  const animationControls: AnimationControls =
    mobileNavBarProps.animationControls;

  return (
    <MobileNavBarContainer
      animate={animationControls}
      initial="hidden"
      variants={navBarVariants}
    >
      <MobileNavPageName>
        {currentPage}
        <MobileNavBorder />
      </MobileNavPageName>
    </MobileNavBarContainer>
  );
};

export default MobileNavBar;
