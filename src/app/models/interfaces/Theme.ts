export interface Theme {
  backgroundColor: string;
  backgroundImage: string;
  textColor: string;
  inactiveTextColor: string;
  borderRed: string;
  navigationArrow: string;
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
    header: {
      backgroundImage: string;
      backgroundColor: string;
    };
    backgroundColor: string;
    borderColor: string;
    blurColor: string;
    selectedItemBackgroundColor: string;
    inactiveTextColor: string;
    menuSvgColor: string;
  };
  leadership: {
    cards: {
      inner: {
        backgroundColor: string;
        infoButton: string;
        front: {
          textColor: string;
        };
        back: {
          titleColor: string;
          about: {
            textColor: string;
            backgroundColor: string;
          };
        };
      };
      outer: {
        backgroundColor: string;
        borderColor: string;
      };
    };
  };
}
