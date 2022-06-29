import React, { FC } from 'react';
import {DisciplinesContainer} from "./Disciplines.styles";

interface DisciplinesProps {}

const Disciplines: FC<DisciplinesProps> = () => (
  <DisciplinesContainer initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .3 }}
                        viewport={{ once: true }} data-testid="Disciplines" id={'Disciplines'}>
      Disciplines Template
  </DisciplinesContainer>
);

export default Disciplines;
