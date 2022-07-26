import React, { FC, Fragment } from "react";
import {
  BottomNavigationArrow,
  MobileNavLink,
  DesktopNavLink,
} from "./BottomNavigator.styles";

interface BottomNavigatorProps {
  navigationLink: string;
  desktopOffset: number;
  mobileOffset: number;
  delay?: number;
}

const BottomNavigator: FC<BottomNavigatorProps> = (
  navigationArrowProps: BottomNavigatorProps
) => {
  const desktopOffset = navigationArrowProps.desktopOffset;
  const mobileOffset = navigationArrowProps.mobileOffset;
  const navigationLink = navigationArrowProps.navigationLink;
  const delay = navigationArrowProps.delay;
  return (
    <Fragment>
      <DesktopNavLink
        tab-index={10}
        ignoreCancelEvents={true}
        isDynamic={true}
        spy={true}
        smooth={"easeInQuad"}
        offset={desktopOffset}
        delay={-500}
        duration={300}
        to={navigationLink}
        data-testid={`desktop-navigation-arrow-link-${navigationLink}`}
      >
        <NavigationArrow
          delay={delay}
          navigationLink={`desktop-${navigationLink}`}
        />
      </DesktopNavLink>
      <MobileNavLink
        tab-index={10}
        ignoreCancelEvents={true}
        isDynamic={true}
        spy={true}
        smooth={"easeInQuad"}
        offset={mobileOffset}
        delay={-500}
        duration={300}
        to={navigationLink}
        data-testid={`mobile-navigation-arrow-link-${navigationLink}`}
      >
        <NavigationArrow
          delay={delay}
          navigationLink={`mobile-${navigationLink}`}
        />
      </MobileNavLink>
    </Fragment>
  );
};

interface NavigationArrowProps {
  delay?: number;
  navigationLink: string;
}

const NavigationArrow: FC<NavigationArrowProps> = (
  navigationArrowProps: NavigationArrowProps
) => {
  const delay = navigationArrowProps.delay;
  const testId = navigationArrowProps.navigationLink;
  return (
    <BottomNavigationArrow
      initial={!!delay ? { opacity: 0 } : {}}
      whileInView={
        !!delay ? { opacity: 1, transition: { delay: delay, duration: 1 } } : {}
      }
      viewport={!!delay ? { once: true } : {}}
      animate={{
        y: [10, 40, 0, 40, 0, 40, 0],
        transition: { delay: !!delay ? delay : 0, duration: 3 },
      }}
      whileHover={{
        scale: 1.12,
        transition: { ease: "easeInOut", duration: 0.2, delay: 0 },
      }}
      whileTap={{ scale: 1 }}
      data-testid={`bottom-navigation-arrow-${testId}`}
    />
  );
};

export default BottomNavigator;
