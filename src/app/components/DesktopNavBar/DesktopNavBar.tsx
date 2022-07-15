import React, { FC } from "react";
import { PageName } from "../../constants/enums/global";
import logo from "../../../assets/logo.webp";
import {
  Logo,
  DesktopNavBarBody,
  NavBarContainer,
  List,
  SelectedListItem,
  ListItem,
  UnderLine,
  Link,
} from "./DesktopNavBar.styles";
import StatusBar from "../StatusBar/StatusBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Moon, Sun } from "../ToggleSwitch/ToggleSwitch.styles";
import { getStatusPercentageFromPageName } from "../../utils/helpers/ViewHelperFunctions";

interface NavBarProps {
  themeEventHandler: () => void;
  navigationEventHandler: (pageName: PageName) => void;
  selectedPageName: PageName;
}

const DesktopNavBar: FC<NavBarProps> = React.memo(function NavBar({
  themeEventHandler,
  navigationEventHandler,
  selectedPageName,
}) {
  return (
    <DesktopNavBarBody
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
    >
      <NavBarContainer data-testid={"NavBar"}>
        <Logo
          src={logo}
          data-testid={"main-logo"}
          whileTap={{
            scale: [1, 0.7, 1.2, 1, 1.2],
            transition: { duration: 0.3 },
          }}
          drag
          whileDrag={{ scale: 1.2 }}
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        />
        <List>
          {Object.values(PageName).map((pageName, index) => (
            <Link
              tab-index={index}
              ignoreCancelEvents={true}
              isDynamic={true}
              key={"link-" + pageName + index}
              onSetActive={() => navigationEventHandler(pageName)}
              to={pageName.replace(" ", "-")}
              spy={true}
              smooth={"easeInQuad"}
              offset={-30}
              delay={-500}
              duration={300}
            >
              {selectedPageName === pageName ? (
                <SelectedListItem
                  key={pageName + index}
                  data-testid={pageName}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  {pageName}
                  <UnderLine />
                </SelectedListItem>
              ) : (
                <ListItem
                  key={pageName + index}
                  data-testid={pageName}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  {pageName}
                </ListItem>
              )}
            </Link>
          ))}
        </List>
        <ToggleSwitch toggleEventHandler={themeEventHandler}>
          <Moon />
          <Sun />
        </ToggleSwitch>
      </NavBarContainer>
      <StatusBar
        statusPercentage={getStatusPercentageFromPageName(selectedPageName)}
      />
    </DesktopNavBarBody>
  );
});

export default DesktopNavBar;
