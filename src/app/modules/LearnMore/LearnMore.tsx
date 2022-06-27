import React, { FC } from 'react';
import {LearnMoreContainer} from "./LearnMore.styles";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => (
  <LearnMoreContainer data-testid="LearnMore" id={'Learn-More'}>
      LearnMore Component
  </LearnMoreContainer>
);

export default LearnMore;
