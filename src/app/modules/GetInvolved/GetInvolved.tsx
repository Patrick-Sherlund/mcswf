import React, { FC } from 'react';
import {GetInvolvedContainer} from "./GetInvolved.styles";

interface GetInvolvedProps {}

const GetInvolved: FC<GetInvolvedProps> = () => (
  <GetInvolvedContainer initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .3 }}
                        viewport={{ once: true }} data-testid="GetInvolved"  id={'Get-Involved'}>
      GetInvolved Template
  </GetInvolvedContainer>
);

export default GetInvolved;
