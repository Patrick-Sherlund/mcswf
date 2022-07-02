import React, {FC} from "react";
import {MenuListItem, SelectedListItem, SelectedItemText, InactiveItemText, MiniDivider, Link} from "./MenuItem.styles"
import {PageName} from "../../../../global/enums/global";

interface MenuItemProps {
    pageName: PageName,
    isSelected?: boolean,
    closeModalHandler: () => void,
    navigationEventHandler: (pageName: PageName) => void
}


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const MenuItem: FC<MenuItemProps> = (menuItemProps: MenuItemProps) => {
    const pageName: PageName = menuItemProps.pageName;
    const isSelected: boolean = menuItemProps.isSelected ?? false;
    const navigationEventHandler: (pageName: PageName) => void = menuItemProps.navigationEventHandler;
    const closeModalHandler: () => void = menuItemProps.closeModalHandler;

    return (<Link ignoreCancelEvents={true}
                  isDynamic={true}
                  key={'link-' + pageName + 'side-nav'}
                  onSetActive={() => navigationEventHandler(pageName)} to={pageName.replace(' ', '-')}
                  onClick={closeModalHandler}
                  spy={true}
                  smooth={'easeInQuad'}
                  offset={-5}
                  delay={400}
                  duration={300}>
        {isSelected
            ? <SelectedListItem variants={variants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
                <MiniDivider/>
                <SelectedItemText> {pageName} </SelectedItemText>
            </SelectedListItem>
            : <MenuListItem variants={variants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
                <InactiveItemText>{pageName}</InactiveItemText>
            </MenuListItem>}
    </Link>);
}

export default MenuItem;
