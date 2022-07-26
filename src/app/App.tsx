import React, { useState } from "react";
import { AppContainer } from "./App.styles";
import DesktopNavBar from "./components/DesktopNavBar/DesktopNavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./constants/themes/DarkTheme";
import { lightTheme } from "./constants/themes/LightTheme";
import SideMenu from "./components/SideMenu/SideMenu";
import { PageName } from "./constants/enums/global";
import { useCycle } from "framer-motion";
import AppContent from "./components/ContentContainer/AppContent";
import { marinesBlueTheme } from "./constants/themes/MarinesBlueTheme";

function App() {
  const [theme, cycleTheme] = useCycle(darkTheme, lightTheme, marinesBlueTheme);
  const [selectedPageName, setSelectedPageName] = useState(PageName.HOME);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer data-testid={"AppContainer"}>
        <SideMenu
          selectedPageName={selectedPageName}
          navigationEventHandler={(pageName) =>
            setSelectedPageName(() => pageName)
          }
        />
        <DesktopNavBar
          selectedPageName={selectedPageName}
          navigationEventHandler={(pageName) =>
            setSelectedPageName(() => pageName)
          }
          themeEventHandler={cycleTheme}
        />
        <AppContent currentPage={selectedPageName} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
