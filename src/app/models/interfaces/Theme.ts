export interface Theme {
  backgroundColor: string;
  backgroundImage: string;
  textColor: string;
  inactiveTextColor: string;
  borderRed: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
    hoverBorderColor: string;
  };
  navBar: {
    backgroundColor: string;
    statusBar: {
      backgroundColor: string;
    };
  };
  navMenu: {
    backgroundColor: string;
    borderColor: string;
    blurColor: string;
    selectedItemBackgroundColor: string;
    inactiveTextColor: string;
    menuSvgColor: string;
  };
  leadership: {
    infoButton: string;
  };
}
