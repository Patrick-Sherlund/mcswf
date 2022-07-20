import { Theme } from "../../models/interfaces/Theme";
import backgroundLight from "../../../assets/background-light.webp";
import headerBackgroundLight from "../../../assets/header-banner-light.webp";
import facebookSvgLight from "../../../assets/svg/light/facebook.svg";
import instagramSvgLight from "../../../assets/svg/light/instagram.svg";
import linkedinSvgLight from "../../../assets/svg/light/linkedin.svg";
import twitterSvgLight from "../../../assets/svg/light/twitter.svg";
import youtubeSvgLight from "../../../assets/svg/light/youtube.svg";
import information from "../../../assets/svg/light/information.svg";
import navigationArrow from "../../../assets/svg/red-arrow-marines.svg";

export const lightTheme: Theme = {
  backgroundColor: "#c6c6c6",
  backgroundImage: backgroundLight,
  textColor: "#2E333F",
  inactiveTextColor: "#555353",
  borderRed: "#C20000",
  navigationArrow: navigationArrow,
  socials: {
    facebook: facebookSvgLight,
    instagram: instagramSvgLight,
    linkedin: linkedinSvgLight,
    twitter: twitterSvgLight,
    youtube: youtubeSvgLight,
    backgroundColor: "#E6E6E6",
    hoverBorderColor: "#ffffff",
    borderColor: "#D7D7D7",
    hoverBackgroundColor: "#e7e7e7",
  },
  navBar: {
    backgroundColor: "#EAEAEA",
    statusBar: {
      backgroundColor: "#f6f6f6",
    },
  },
  navMenu: {
    header: {
      backgroundImage: headerBackgroundLight,
      backgroundColor: "#EAEAEA",
    },
    backgroundColor: "#EAEAEA",
    borderColor: "#d9d9d9",
    blurColor: "#8d8d8d7A",
    selectedItemBackgroundColor: "#e0e0e0",
    inactiveTextColor: "#3c404e",
    menuSvgColor: "#2E333F",
  },
  dataCard: {
    titleTextColor: "#252933",
    bodyTextColor: "#252933",
    backgroundColor: "#FCFCFC",
    borderColor: "#D0D0D0",
    verticalBorderColor: "#C20000",
    firstShade: {
      backgroundColor: "#EBEBEB",
    },
    secondShade: {
      backgroundColor: "#E9E9E9",
    },
  },
  leadership: {
    cards: {
      inner: {
        backgroundColor: "#e0e0e0",
        infoButton: information,
        front: {
          textColor: "#2E333F",
        },
        back: {
          titleColor: "#2E333F",
          about: {
            textColor: "#2E333F",
            backgroundColor: "#EAEAEA",
          },
        },
      },
      outer: {
        backgroundColor: "#eaeaea",
        borderColor: "#c9cbce",
      },
    },
  },
  learnMore: {},
};
