import React, { FC } from "react";
import { DisciplinesContainer } from "./Disciplines.styles";

const Disciplines: FC = () => (
  <DisciplinesContainer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    data-testid="Disciplines"
    id={"Disciplines"}
  ></DisciplinesContainer>
);

export default Disciplines;
