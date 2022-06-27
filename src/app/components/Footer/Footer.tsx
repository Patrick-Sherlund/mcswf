import React, { FC } from 'react';
import {FooterContainer} from "./Footer.styles";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <FooterContainer data-testid="Footer">
    Footer Component
  </FooterContainer>
);

export default Footer;
