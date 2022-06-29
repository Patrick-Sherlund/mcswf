import React, { FC } from 'react';
import {LearnMoreContainer} from "./LearnMore.styles";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => (
  <LearnMoreContainer initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: .3 }}
                      viewport={{ once: true }} data-testid="LearnMore" id={'Learn-More'}>
      LearnMore Component
  </LearnMoreContainer>
);

export default LearnMore;
