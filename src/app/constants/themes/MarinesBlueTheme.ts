import { Theme } from "../../models/interfaces/Theme";
import headerBackgroundMarinesBlue from "../../../assets/header-banner-marines-blue.webp";
import backgroundMarinesBlue from "../../../assets/marines-blue-background.webp";
import facebookSvgDark from "../../../assets/svg/dark/facebook.svg";
import instagramSvgDark from "../../../assets/svg/dark/instagram.svg";
import linkedinSvgDark from "../../../assets/svg/dark/linkedin.svg";
import twitterSvgDark from "../../../assets/svg/dark/twitter.svg";
import youtubeSvgDark from "../../../assets/svg/dark/youtube.svg";
import information from "../../../assets/svg/dark/information.svg";
import navigationArrow from "../../../assets/svg/red-arrow-marines.svg";
import agile from "../../../assets/svg/dark/agile.svg";
import industry from "../../../assets/svg/dark/industry.svg";
import informationPacket from "../../../assets/svg/dark/information-packet.svg";
import roundedTeams from "../../../assets/svg/dark/rounded-teams.svg";
import talent from "../../../assets/svg/dark/talent.svg";

export const marinesBlueTheme: Theme = {
  backgroundColor: "#252933",
  backgroundImage: backgroundMarinesBlue,
  textColor: "#FFFFFF",
  inactiveTextColor: "#afafaf",
  borderRed: "#B00D25",
  navigationArrow: navigationArrow,
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
    header: {
      backgroundImage: headerBackgroundMarinesBlue,
      backgroundColor: "#262634",
    },
    backgroundColor: "#000013",
    borderColor: "#B00D25",
    blurColor: "#0000137A",
    selectedItemBackgroundColor: "#262634",
    inactiveTextColor: "#afafaf",
    menuSvgColor: "#FFFFFF",
  },
  dataCard: {
    titleTextColor: "#000000",
    bodyTextColor: "#000000",
    backgroundColor: "#f9f9f9",
    borderColor: "#c0c2ca",
    verticalBorderColor: "#B00D25",
    firstShade: {
      backgroundColor: "#505460",
    },
    secondShade: {
      backgroundColor: "#414551",
    },
  },
  leadership: {
    cards: {
      inner: {
        backgroundColor: "#000013",
        infoButton: information,
        front: {
          textColor: "#FFFFFF",
        },
        back: {
          titleColor: "#FFFFFF",
          about: {
            textColor: "#000000",
            backgroundColor: "#FFFFFF",
          },
        },
      },
      outer: {
        backgroundColor: "#353a42",
        borderColor: "#72758d",
      },
    },
  },
  learnMore: {
    svg: {
      agile: agile,
      industry: industry,
      informationPacket: informationPacket,
      roundedTeams: roundedTeams,
      talent: talent,
    },
  },
};
