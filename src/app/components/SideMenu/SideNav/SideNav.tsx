import React, {FC} from 'react';
import {MenuList, NavMenuContainer, NavMenuHeader, NavMenuHeaderContent, NavMenuHeaderText, NavMenuLogo} from "./SideNav.styles";
import MenuItem from "./MenuItem/MenuItem";
import logo from "../../../../assets/logo.webp";
import {PageName} from "../../../global/enums/global";

interface SideNav {
    pageNames: PageName[],
    selectedPageName: PageName,
    closeModalHandler: () => void,
    navigationEventHandler: (pageName: PageName) => void;
}

const SideNav: FC<SideNav> = (sideMenuProps: SideNav) => {
    const pageNames: PageName[] = sideMenuProps.pageNames;
    const navigationEventHandler: (pageName: PageName) => void = sideMenuProps.navigationEventHandler;
    const closeModalHandler: () => void = sideMenuProps.closeModalHandler;
    const selectedPageName: PageName = sideMenuProps.selectedPageName;
    const framerMotionVariants = {
        open: {
            transition: {staggerChildren: 0.07, delayChildren: 0.2}
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1}
        }
    };
    const framerMotionVariantsHeader = {
        open: {
            clipPath: `circle(${500}px at 35px 35px)`,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(0px at 35px 35px)",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    return (
        <NavMenuContainer variants={framerMotionVariantsHeader}>
            <NavMenuHeader>
                <NavMenuLogo src={logo}
                             data-testid={'main-logo'}
                             whileTap={{
                                 scale: [1, .7, 1.2, 1, 1.2],
                                 transition: {duration: .3}
                             }}
                             drag
                             whileDrag={{
                                 scale: 1.2
                             }}
                             dragConstraints={{
                                 top: 0, bottom: 0, left: 0, right: 0
                             }}
                             id={'nav-bar-img'}
                />
                <NavMenuHeaderContent>
                    <NavMenuHeaderText>U.S. Marine Corps</NavMenuHeaderText>
                    <NavMenuHeaderText>Software Factory</NavMenuHeaderText>
                </NavMenuHeaderContent>
            </NavMenuHeader>

    <MenuList variants={framerMotionVariants}>
                {
                    pageNames.map((pageName, index) => (
                        <MenuItem key={`${pageName}-${index}`} navigationEventHandler={navigationEventHandler} closeModalHandler={closeModalHandler} pageName={pageName} isSelected={pageName === selectedPageName}/>
                    ))
                }
            </MenuList>
        </NavMenuContainer>
    );
}

export default SideNav;
