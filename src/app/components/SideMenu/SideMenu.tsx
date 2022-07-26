import React, { FC, useEffect, useRef } from "react";
import { NavMenu, NavMenuBody, NavMenuBlur } from "./SideMenu.styles";
import { useDimensions } from "../../utils/hooks/useDimensions";
import { useCycle } from "framer-motion";
import MenuToggle from "./SideNav/MenuToggle/MenuToggle";
import SideNav from "./SideNav/SideNav";
import { PageName } from "../../constants/enums/global";

interface SideMenuProps {
  navigationEventHandler: (pageName: PageName) => void;
  selectedPageName: PageName;
}

const sidebar = {
  open: {
    clipPath: `circle(1200px at 35px 35px)`,
    transition: {
      duration: 0.6,
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(25px at 35px 35px)",
    transition: {
      delay: 0,
      duration: 0.6,
      stiffness: 400,
      damping: 40,
    },
  },
};
const SideMenu: FC<SideMenuProps> = React.memo(function SideMenu({
  navigationEventHandler,
  selectedPageName,
}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <NavMenu
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      whileInView={{ height: isOpen ? "auto" : "0" }}
      ref={containerRef}
      data-testid={"side-menu"}
    >
      <NavMenuBody variants={sidebar} />
      <SideNav
        selectedPageName={selectedPageName}
        navigationEventHandler={navigationEventHandler}
        closeModalHandler={() => toggleOpen()}
        pageNames={Object.values(PageName)}
      />
      <NavMenuBlur
        id={"nav-menu-blur"}
        variants={sidebar}
        onClick={() => toggleOpen()}
        data-testid={"mobile-menu-blur"}
      />
      <MenuToggle tab-index={1} toggleEventHandler={() => toggleOpen()} />
    </NavMenu>
  );
});

export default SideMenu;
