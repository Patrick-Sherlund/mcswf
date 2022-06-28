import React, {useState} from 'react';
import Home from "./modules/Home/Home";
import { AppContainer } from "./App.styles";
import NavBar from "./components/NavBar/NavBar";
import LearnMore from "./modules/LearnMore/LearnMore";
import Disciplines from "./modules/Disciplines/Disciplines";
import TheTeam from "./modules/TheTeam/TheTeam";
import GetInvolved from "./modules/GetInvolved/GetInvolved";
import Footer from "./components/Footer/Footer";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./global/themes/DarkTheme";
import {lightTheme} from "./global/themes/LightTheme";

function App() {
    const [theme, setTheme] = useState(darkTheme)

    const updateState = () => setTheme((theme) => theme === darkTheme ? lightTheme : darkTheme)

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <NavBar themeHandler={updateState} />
                <Home/>
                <LearnMore/>
                <Disciplines/>
                <TheTeam/>
                <GetInvolved/>
                <Footer/>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
