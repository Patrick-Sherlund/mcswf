import React, { FC } from 'react';
import {TheTeamContainer} from "./TheTeam.styles";

interface TheTeamProps {}

const TheTeam: FC<TheTeamProps> = () => (
  <TheTeamContainer data-testid="TheTeam" id={"The-Team"}>
      TheTeam Component
  </TheTeamContainer>
);

export default TheTeam;
