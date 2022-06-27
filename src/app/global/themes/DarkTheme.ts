import {Theme} from "../../models/interfaces/Theme";
import backgroundDark from "../../../assets/background-dark.png"
import facebookSvg from "../../../assets/svg/dark/facebook.svg"
import instagramSvg from "../../../assets/svg/dark/instagram.svg"
import linkedinSvg from "../../../assets/svg/dark/linkedin.svg"
import twitterSvg from "../../../assets/svg/dark/twitter.svg"
import youtubeSvg from "../../../assets/svg/dark/youtube.svg"

export const darkTheme: Theme = {
    backgroundColor: "#181818",
    backgroundImage: backgroundDark,
    textColor: "#EDEDED",
    inactiveTextColor: "#CFCFCF",
    socials: {
        facebook: facebookSvg,
        instagram: instagramSvg,
        linkedin: linkedinSvg,
        twitter: twitterSvg,
        youtube: youtubeSvg
    },
    navBar: {
        backgroundColor: "#2B2B2B",
        statusBar: {
            backgroundColor: "#3E3E3E"
        }
    }
}
