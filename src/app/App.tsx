import React from 'react';
import Home from "./modules/Home/Home";
import { AppContainer } from "./App.styles";
import NavBar from "./components/NavBar/NavBar";
import LearnMore from "./modules/LearnMore/LearnMore";
import Disciplines from "./modules/Disciplines/Disciplines";
import TheTeam from "./modules/TheTeam/TheTeam";
import GetInvolved from "./modules/GetInvolved/GetInvolved";
import Footer from "./components/Footer/Footer";

function App() {


    return (
        <AppContainer>
                <NavBar/>
                <Home/>
                <LearnMore/>
                <Disciplines/>
                <TheTeam/>
                <GetInvolved/>
                <Footer/>
        </AppContainer>
    );
}

export default App;
