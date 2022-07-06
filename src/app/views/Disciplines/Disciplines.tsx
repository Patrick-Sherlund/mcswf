import React, { FC } from "react";
import { DisciplinesContainer, SampleText } from "./Disciplines.styles";

const Disciplines: FC = () => (
  <DisciplinesContainer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    data-testid="Disciplines"
    id={"Disciplines"}
  >
    <SampleText>Disciplines Page</SampleText>
  </DisciplinesContainer>
);

export default Disciplines;
