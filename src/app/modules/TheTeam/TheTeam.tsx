import React, { FC } from "react";
import { TheTeamContainer, SampleText } from "./TheTeam.styles";

const TheTeam: FC = () => (
  <TheTeamContainer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    data-testid="TheTeam"
    id={"The-Team"}
  >
    <SampleText>The Team Page</SampleText>
  </TheTeamContainer>
);

export default TheTeam;
