import {Theme} from "../../models/interfaces/Theme";
import backgroundDark from "../../../assets/background-dark.webp"
import facebookSvgDark from "../../../assets/svg/dark/facebook.svg"
import instagramSvgDark from "../../../assets/svg/dark/instagram.svg"
import linkedinSvgDark from "../../../assets/svg/dark/linkedin.svg"
import twitterSvgDark from "../../../assets/svg/dark/twitter.svg"
import youtubeSvgDark from "../../../assets/svg/dark/youtube.svg"

export const darkTheme: Theme = {
    backgroundColor: "#181818",
    backgroundImage: backgroundDark,
    textColor: "#EDEDED",
    inactiveTextColor: "#CFCFCF",
    socials: {
        facebook: facebookSvgDark,
        instagram: instagramSvgDark,
        linkedin: linkedinSvgDark,
        twitter: twitterSvgDark,
        youtube: youtubeSvgDark,
        backgroundColor: "#3E3E3E",
        hoverBackgroundColor: "#4c4c4c",
        borderColor: "#7D7D7D",
        hoverBorderColor: "#8d8d8d"
    },
    navBar: {
        backgroundColor: "#262626",
        statusBar: {
            backgroundColor: "#3E3E3E"
        }
    },
    navMenu: {
        backgroundColor: "#2D2D2D",
        borderColor: "#505050",
        blurColor: "#2C2C2C7A",
        selectedItemBackgroundColor: "#505050",
        inactiveTextColor: "#bfbfbf",
        menuSvgColor: "#EAEAEA",
    }
}
