import React, { FC } from "react";
import {
  MobileNavBarContainer,
  MobileNavPageName,
  MobileNavBorder,
  MiniLogo,
} from "./MobileNavBar.styles";
import { PageName } from "../../global/enums/global";
import { AnimationControls } from "framer-motion";
import StatusBar from "../StatusBar/StatusBar";
import logo from "../../../assets/logo.webp";

interface MobileNavBarProps {
  currentPage: PageName;
  animationControls: AnimationControls;
}

const navBarVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
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
      <MiniLogo src={logo} />
      <MobileNavPageName>
        {currentPage}
        <MobileNavBorder />
      </MobileNavPageName>
      <StatusBar pageName={currentPage} />
    </MobileNavBarContainer>
  );
};

export default MobileNavBar;
