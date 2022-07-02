import React, { FC } from 'react';
import {LearnMoreContainer, SampleText} from "./LearnMore.styles";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => (
  <LearnMoreContainer initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: .3 }}
                      viewport={{ once: true }} data-testid="learn-more-container" id={'Learn-More'}>
      <SampleText>
          Learn More Page
      </SampleText>
  </LearnMoreContainer>
);

export default LearnMore;
