import React, { FC } from 'react';
import {LearnMoreContainer} from "./LearnMore.styles";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => (
  <LearnMoreContainer data-testid="LearnMore">
      LearnMore Component
  </LearnMoreContainer>
);

export default LearnMore;
