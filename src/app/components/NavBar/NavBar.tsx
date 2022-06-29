import React, {FC, useState} from 'react';
import {PageName} from "../../global/enums/global";
import logo from "../../../assets/logo.png"
import {Logo, DesktopNavBar, NavBarContainer, List, SelectedListItem, ListItem, UnderLine, Link} from "./NavBar.styles";
import StatusBar from "../StatusBar/StatusBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

interface NavBarProps {
    themeEventHandler: () => void;
}


const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const [selectedPage, setSelectedPage] = useState(PageName.HOME);

    return (
        <DesktopNavBar initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: .1}} viewport={{once: true}}>
            <NavBarContainer data-testid={'NavBar'}>
                <Logo src={logo} data-testid={'main-logo'}  whileTap={{
                    scale: [1, .2, 1.35],
                    rotate: [0, 360]
                }} drag whileDrag={{ scale: 1.2 }} dragConstraints={{top: 0, bottom: 0, left: 0, right: 0 }}/>
                <List>
                    {
                        Object.values(PageName).map(
                            (pageName, index) => (
                                <Link ignoreCancelEvents={true}
                                      isDynamic={true}
                                      key={'link-' + pageName + index}
                                      onSetActive={() => setSelectedPage(() => pageName)} to={pageName.replace(' ', '-')}
                                      spy={true}
                                      smooth={'easeInQuad'}
                                      offset={-50}
                                      delay={-500}
                                      duration={300}
                                >
                                    {(selectedPage === pageName)
                                        ? <SelectedListItem key={pageName + index} data-testid={pageName} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} >
                                            {pageName}
                                            <UnderLine />
                                        </SelectedListItem>
                                        : <ListItem key={pageName + index} data-testid={pageName} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                                            {pageName}
                                        </ListItem>}
                                </Link>
                            )
                        )
                    }
                </List>
                <ToggleSwitch themeEventHandler={props.themeEventHandler}/>
            </NavBarContainer>
            <StatusBar pageName={selectedPage}/>
        </DesktopNavBar>

    );
}

export default NavBar;
