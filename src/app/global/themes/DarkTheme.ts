import {Theme} from "../../models/interfaces/Theme";
import backgroundDark from "../../../assets/background-dark.png"
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
        borderColor: "#7D7D7D"
    },
    navBar: {
        backgroundColor: "#262626",
        statusBar: {
            backgroundColor: "#3E3E3E"
        }
    }
}
