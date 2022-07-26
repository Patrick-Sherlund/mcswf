import React, { FC } from "react";
import { MenuPath, MenuButton } from "./MenuToggle.styles";
import { SVGMotionProps, Variants } from "framer-motion";

interface MenuToggleProps {
  toggleEventHandler: () => void;
}

const getSvgPathEffect = (svgCode?: string): Variants => {
  return {
    closed: {
      ...(!!svgCode ? { d: svgCode } : {}),
      clipPath: `circle(500px at 35px 35px)`,
      display: "inherit",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    open: {
      clipPath: "circle(0px at 35px 35px)",
      display: "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
};

const Path = (svgMotionProps: SVGMotionProps<SVGPathElement>): JSX.Element => (
  <MenuPath
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...svgMotionProps}
  />
);

const MenuToggle: FC<MenuToggleProps> = (menuToggleProps: MenuToggleProps) => {
  const toggleEventHandler: () => void = menuToggleProps.toggleEventHandler;

  return (
    <MenuButton
      onClick={() => toggleEventHandler()}
      data-testid={"mobile-menu-toggle"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path variants={getSvgPathEffect("M 2 2.5 L 20 2.5")} />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={getSvgPathEffect()}
          transition={{ duration: 0.1 }}
        />
        <Path variants={getSvgPathEffect("M 2 16.346 L 20 16.346")} />
      </svg>
    </MenuButton>
  );
};

export default MenuToggle;
