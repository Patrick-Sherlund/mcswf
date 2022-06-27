import {Theme} from "../../models/interfaces/Theme";
import backgroundDark from "../../../assets/background-dark.png"

export const darkTheme: Theme = {
    backgroundColor: "#181818",
    backgroundImage: backgroundDark,
    textColor: "white",
    inactiveTextColor: "#CFCFCF",
    navBar: {
        backgroundColor: "#2B2B2B",
        statusBar: {
            backgroundColor: "#3E3E3E"
        }
    }
}
