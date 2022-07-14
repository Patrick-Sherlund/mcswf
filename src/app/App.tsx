import React, { useState } from "react";
import { AppContainer } from "./App.styles";
import DesktopNavBar from "./components/DesktopNavBar/DesktopNavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./global/themes/DarkTheme";
import { lightTheme } from "./global/themes/LightTheme";
import SideMenu from "./components/SideMenu/SideMenu";
import { PageName } from "./global/enums/global";
import { useCycle } from "framer-motion";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  const [theme, cycleTheme] = useCycle(darkTheme, lightTheme);
  const [selectedPageName, setSelectedPageName] = useState(PageName.HOME);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
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
        <ContentContainer currentPage={selectedPageName} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
