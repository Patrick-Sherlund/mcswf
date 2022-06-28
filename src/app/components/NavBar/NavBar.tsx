import React, {FC, useState} from 'react';
import {PageName} from "../../global/enums/global";
import logo from "../../../assets/logo.png"
import {Logo, DesktopNavBar, NavBarContainer, List, SelectedListItem, ListItem, UnderLine, Link} from "./NavBar.styles";
import StatusBar from "../StatusBar/StatusBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

interface NavBarProps {
    themeEventHandler: () => void
}


const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const [selectedPage, setSelectedPage] = useState(PageName.HOME);

    return (
        <DesktopNavBar>
            <NavBarContainer data-testid={'NavBar'}>
                <Logo src={logo} data-testid={'main-logo'}/>
                <List>
                    {
                        Object.values(PageName).map(
                            (pageName, index) => (
                                <Link ignoreCancelEvents={true} isDynamic={true} key={'link-' + pageName + index} onSetActive={() => setSelectedPage(() => pageName)} to={pageName.replace(' ', '-')} spy={true} smooth={'easeInQuad'} offset={-50} delay={-500} duration={300}>
                                    {(selectedPage === pageName)
                                        ? <SelectedListItem key={pageName + index} data-testid={pageName}>
                                            {pageName}
                                            <UnderLine />
                                        </SelectedListItem>
                                        : <ListItem key={pageName + index} data-testid={pageName}>
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
