import React, {FC} from 'react';
import {HomeContainer} from "./Home.styles";


interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <HomeContainer id={'Home'}>
    Home Component
  </HomeContainer>
);

export default Home;
