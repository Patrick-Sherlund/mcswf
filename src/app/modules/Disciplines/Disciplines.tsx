import React, { FC } from 'react';
import {DisciplinesContainer} from "./Disciplines.styles";

interface DisciplinesProps {}

const Disciplines: FC<DisciplinesProps> = () => (
  <DisciplinesContainer data-testid="Disciplines" id={'Disciplines'}>
      Disciplines Template
  </DisciplinesContainer>
);

export default Disciplines;
