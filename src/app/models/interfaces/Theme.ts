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
        youtube: string
    }
    navBar: {
        backgroundColor: string,
        statusBar: {
            backgroundColor: string
        }
    }
}
