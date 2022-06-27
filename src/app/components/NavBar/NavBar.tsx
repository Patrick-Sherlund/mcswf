import React, {FC, useState} from 'react';
import {PageName} from "../../global/enums/global";
import logo from "../../../assets/logo.png"
import {Logo, DesktopNavBar, NavBarContainer, List, SelectedListItem, ListItem, UnderLine, Link} from "./NavBar.styles";
import StatusBar from "../StatusBar/StatusBar";

interface NavBarProps {
}

const NavBar: FC<NavBarProps> = () => {
    const [selectedPage, setSelectedPage] = useState(PageName.HOME);

    return (
        <DesktopNavBar>
            <NavBarContainer data-testid={'NavBar'}>
                <Logo src={logo} data-testid={'main-logo'}/>
                <List>
                    {
                        Object.values(PageName).map(
                            (pageName, index) => (
                                <Link key={'link-' + pageName + index} onSetActive={() => setSelectedPage(pageName)} to={pageName.replace(' ', '-')} spy={true} smooth={true} offset={-30} duration={500}>
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
            </NavBarContainer>
            <StatusBar pageName={selectedPage}/>
        </DesktopNavBar>

    );
}

export default NavBar;
