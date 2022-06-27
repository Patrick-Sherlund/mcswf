import {Theme} from "../../models/interfaces/Theme";
import backgroundLight from "../../../assets/background-light.png"
import facebookSvg from "../../../assets/svg/light/facebook.svg";
import instagramSvg from "../../../assets/svg/light/instagram.svg";
import linkedinSvg from "../../../assets/svg/light/linkedin.svg";
import twitterSvg from "../../../assets/svg/light/twitter.svg";
import youtubeSvg from "../../../assets/svg/light/youtube.svg";

export const lightTheme: Theme = {
    backgroundColor: "#FFFFFF",
    backgroundImage: backgroundLight,
    textColor: "#2E333F",
    inactiveTextColor: "#555353",
    socials: {
        facebook: facebookSvg,
        instagram: instagramSvg,
        linkedin: linkedinSvg,
        twitter: twitterSvg,
        youtube: youtubeSvg
    },
    navBar: {
        backgroundColor: "#f3f3f3",
        statusBar: {
            backgroundColor: "#f6f6f6"
        }
    }
}
