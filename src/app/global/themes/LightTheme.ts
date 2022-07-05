import {Theme} from "../../models/interfaces/Theme";
import backgroundLight from "../../../assets/background-light.webp"
import facebookSvgLight from "../../../assets/svg/light/facebook.svg";
import instagramSvgLight from "../../../assets/svg/light/instagram.svg";
import linkedinSvgLight from "../../../assets/svg/light/linkedin.svg";
import twitterSvgLight from "../../../assets/svg/light/twitter.svg";
import youtubeSvgLight from "../../../assets/svg/light/youtube.svg";

export const lightTheme: Theme = {
    backgroundColor: "#c6c6c6",
    backgroundImage: backgroundLight,
    textColor: "#2E333F",
    inactiveTextColor: "#555353",
    socials: {
        facebook: facebookSvgLight,
        instagram: instagramSvgLight,
        linkedin: linkedinSvgLight,
        twitter: twitterSvgLight,
        youtube: youtubeSvgLight,
        backgroundColor: "#E6E6E6",
        hoverBorderColor: "#ffffff",
        borderColor: "#D7D7D7",
        hoverBackgroundColor: "#e7e7e7"
    },
    navBar: {
        backgroundColor: "#eaeaea",
        statusBar: {
            backgroundColor: "#f6f6f6"
        }
    }
}
