import React, { FC } from 'react';
import {GetInvolvedContainer} from "./GetInvolved.styles";
import {DisciplinesContainer} from "../Disciplines/Disciplines.styles";

interface GetInvolvedProps {}

const GetInvolved: FC<GetInvolvedProps> = () => (
  <GetInvolvedContainer data-testid="GetInvolved"  id={'Get-Involved'}>
      GetInvolved Template
  </GetInvolvedContainer>
);

export default GetInvolved;
