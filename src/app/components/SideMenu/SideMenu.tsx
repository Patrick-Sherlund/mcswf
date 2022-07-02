import React, {FC, useEffect, useRef} from 'react';
import {NavMenu, NavMenuBody, NavMenuBlur} from "./SideMenu.styles";
import {useDimensions} from "../../utils/hooks/useDimensions";
import {useCycle} from "framer-motion";
import MenuToggle from "./SideNav/MenuToggle/MenuToggle";
import SideNav from "./SideNav/SideNav";
import {PageName} from "../../global/enums/global";

interface SideMenuProps {
    navigationEventHandler: (pageName: PageName) => void,
    selectedPageName: PageName,
}

const sidebar = (isBlur: boolean) => {
    return {
        open: (height = 1000) => ({
            clipPath: `circle(${height * (isBlur ? 3 : 2) + 200}px at 35px 35px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(25px at 35px 35px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
};

const SideMenu: FC<SideMenuProps> = (sideMenuProps: SideMenuProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const selectedPageName: PageName = sideMenuProps.selectedPageName;
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    const navigationEventHandler: (pageName: PageName) => void = sideMenuProps.navigationEventHandler;

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <NavMenu
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            whileInView={{height: isOpen ? 'auto' : '0'}}
            ref={containerRef}>
            <NavMenuBody variants={sidebar(false)}/>
            <SideNav selectedPageName={selectedPageName} navigationEventHandler={navigationEventHandler} closeModalHandler={() => toggleOpen()} pageNames={Object.values(PageName)}/>
            <NavMenuBlur id={'nav-menu-blur'} variants={sidebar(true)} onClick={() => toggleOpen()}/>
            <MenuToggle toggleEventHandler={() => toggleOpen()}/>
        </NavMenu>
    );
}

export default SideMenu;
