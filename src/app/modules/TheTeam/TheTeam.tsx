import React, { FC } from 'react';
import {TheTeamContainer, SampleText} from "./TheTeam.styles";

interface TheTeamProps {}

const TheTeam: FC<TheTeamProps> = () => (
  <TheTeamContainer initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    viewport={{ once: true }} data-testid="TheTeam" id={"The-Team"}>
      <SampleText>
          The Team Page
      </SampleText>
  </TheTeamContainer>
);

export default TheTeam;
