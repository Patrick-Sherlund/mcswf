import React, { FC } from "react";
import { GetInvolvedContainer, SampleText } from "./GetInvolved.styles";

const GetInvolved: FC = () => (
  <GetInvolvedContainer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    data-testid="GetInvolved"
    id={"Get-Involved"}
  >
    <SampleText></SampleText>
  </GetInvolvedContainer>
);

export default GetInvolved;
