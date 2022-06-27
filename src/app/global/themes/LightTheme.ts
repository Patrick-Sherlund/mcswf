import {Theme} from "../../models/interfaces/Theme";
import backgroundLight from "../../../assets/background-light.png"

export const lightTheme: Theme = {
    backgroundColor: "#FFFFFF",
    backgroundImage: backgroundLight,
    textColor: "#2E333F",
    inactiveTextColor: "#555353",
    navBar: {
        backgroundColor: "#f3f3f3",
        statusBar: {
            backgroundColor: "#f6f6f6"
        }
    }
}
