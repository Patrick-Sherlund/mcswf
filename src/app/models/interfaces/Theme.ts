export interface Theme {
    backgroundColor: string,
    backgroundImage: string,
    textColor: string,
    inactiveTextColor: string,
    socials: {
        facebook: string,
        instagram: string,
        linkedin: string,
        twitter: string,
        youtube: string,
        backgroundColor: string,
        borderColor: string
    }
    navBar: {
        backgroundColor: string,
        statusBar: {
            backgroundColor: string
        }
    }
}
