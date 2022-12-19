import React, { FC } from "react";
import {
  InactiveItemText,
  Link,
  MenuListItem,
  MiniDivider,
  SelectedItemText,
  SelectedListItem,
} from "./MenuItem.styles";
import { PageName } from "../../../../constants/enums/global";
import { Variants } from "framer-motion";

interface MenuItemProps {
  pageName: PageName;
  isSelected?: boolean;
  closeModalHandler: () => void;
  navigationEventHandler: (pageName: PageName) => void;
}

const framerMotionVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 1000,
      velocity: -100,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      stiffness: 1000,
    },
  },
};

const MenuItem: FC<MenuItemProps> = (menuItemProps: MenuItemProps) => {
  const pageName: PageName = menuItemProps.pageName;
  const correctedPageName: string = pageName.replace(" ", "-");
  const tabIndex: number = Object.values(PageName).indexOf(pageName);
  const isSelected: boolean = menuItemProps.isSelected ?? false;
  const navigationEventHandler: (pageName: PageName) => void =
    menuItemProps.navigationEventHandler;
  const closeModalHandler: () => void = menuItemProps.closeModalHandler;

  return (
    <Link
      tab-index={tabIndex}
      ignoreCancelEvents={true}
      isDynamic={true}
      key={"link-" + pageName + "side-nav"}
      onSetActive={() => navigationEventHandler(pageName)}
      to={correctedPageName}
      onClick={closeModalHandler}
      spy={true}
      smooth={"easeInQuad"}
      offset={-5}
      delay={400}
      duration={300}
      data-testid={`mobile-link-${correctedPageName}`}
    >
      {isSelected ? (
        <SelectedListItem
          variants={framerMotionVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MiniDivider />
          <SelectedItemText> {pageName} </SelectedItemText>
        </SelectedListItem>
      ) : (
        <MenuListItem
          variants={framerMotionVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <InactiveItemText>{pageName}</InactiveItemText>
        </MenuListItem>
      )}
    </Link>
  );
};

export default MenuItem;
