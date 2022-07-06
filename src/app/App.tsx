import React, { useState } from "react";
import Home from "./modules/Home/Home";
import { AppContainer } from "./App.styles";
import NavBar from "./components/NavBar/NavBar";
import LearnMore from "./modules/LearnMore/LearnMore";
import Disciplines from "./modules/Disciplines/Disciplines";
import TheTeam from "./modules/TheTeam/TheTeam";
import GetInvolved from "./modules/GetInvolved/GetInvolved";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./global/themes/DarkTheme";
import { lightTheme } from "./global/themes/LightTheme";
import SideMenu from "./components/SideMenu/SideMenu";
import { PageName } from "./global/enums/global";
import { useCycle } from "framer-motion";

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
        <NavBar
          selectedPageName={selectedPageName}
          navigationEventHandler={(pageName) =>
            setSelectedPageName(() => pageName)
          }
          themeEventHandler={cycleTheme}
        />
        <Home />
        <LearnMore />
        <Disciplines />
        <TheTeam />
        <GetInvolved />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
