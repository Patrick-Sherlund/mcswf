import { Theme } from "../../models/interfaces/Theme";
import backgroundDark from "../../../assets/background-dark.webp";
import facebookSvgDark from "../../../assets/svg/dark/facebook.svg";
import instagramSvgDark from "../../../assets/svg/dark/instagram.svg";
import linkedinSvgDark from "../../../assets/svg/dark/linkedin.svg";
import twitterSvgDark from "../../../assets/svg/dark/twitter.svg";
import youtubeSvgDark from "../../../assets/svg/dark/youtube.svg";
import information from "../../../assets/svg/dark/information.svg";

export const marinesBlueTheme: Theme = {
  backgroundColor: "#252933",
  backgroundImage: "none",
  textColor: "#FFFFFF",
  inactiveTextColor: "#8d8d8d",
  borderRed: "#B00D25",
  socials: {
    facebook: facebookSvgDark,
    instagram: instagramSvgDark,
    linkedin: linkedinSvgDark,
    twitter: twitterSvgDark,
    youtube: youtubeSvgDark,
    backgroundColor: "#52555c",
    hoverBackgroundColor: "#5c5f66",
    borderColor: "#FFFFFF",
    hoverBorderColor: "#FFFFFF",
  },
  navBar: {
    backgroundColor: "#000013",
    statusBar: {
      backgroundColor: "#191C22",
    },
  },
  navMenu: {
    backgroundColor: "#000013",
    borderColor: "#B00D25",
    blurColor: "#0000137A",
    selectedItemBackgroundColor: "#262634",
    inactiveTextColor: "#8d8d8d",
    menuSvgColor: "#FFFFFF",
  },
  leadership: {
    infoButton: information,
  },
};
