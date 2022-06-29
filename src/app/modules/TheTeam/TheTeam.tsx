import React, { FC } from 'react';
import {TheTeamContainer} from "./TheTeam.styles";

interface TheTeamProps {}

const TheTeam: FC<TheTeamProps> = () => (
  <TheTeamContainer initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    viewport={{ once: true }} data-testid="TheTeam" id={"The-Team"}>
      TheTeam Component
  </TheTeamContainer>
);

export default TheTeam;
