
export const theme = {
    breakpoints: {
        mobile: 767,
        tablet: 1206,
    }
};

const colors = {
    lavenderMagenta: "#F490E1",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mineShaft: "#252525",
    mineShaftLight: "rgba(54, 54, 54, 0.72)",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    scienceBlue: "#0366D6",
    anakiwa: "#8CC2FF",
    iron: "rgba(209, 213, 218, 0.3)",
    dodgerBlue: "#2188FF",
}


export const ThemeLight = {
    ...theme,
    body: {
        background: colors.whiteLilac,
    },
    section: {
        background: colors.white,
        portfolio: {
            background: colors.whiteLilac,
        },
    },
    mainHeader: {
        background: colors.whiteLilac,
    },
    header: {
        headerName: colors.mineShaft,
        text: colors.mineShaft,
        border: colors.mercury,
        h3: colors.scienceBlue,
    },
    paragraph: {
        leadParagraph: colors.slateGray,
        footerParagraph: colors.mineShaft,
    },
    caption: {
        text: colors.slateGray,
    },
    list: {
        text: colors.slateGray,
        background: colors.whiteLilac,
        item: {
            background: colors.white,
            border: colors.iron,
        }
    },
    button: {
        background: colors.scienceBlue,
        backgroundHover: colors.anakiwa,
    },
    buttonWrapper: {
        sun: colors.white,
        toggle: colors.slateGray,
        border: colors.slateGray,
    },
    marker: {
        fill: colors.scienceBlue,
    },
    colors: {
        whiteLilac: "#FBFBFE",
        white: "#FFFFFF",
        primaryColor: "teal",
        lavenderMagenta: "#F490E1", // to delete
        scienceBlue: "#0366D6",
        mountainMist: "#959499",
        slateGray: "#6E7E91",
        mineShaft: "#252525",
        mercury: "#E5E5E5",
        iron: "rgba(209, 213, 218, 0.3)",
        anakiwa: "#8CC2FF",
    },
    breakpoints: {
        mobile: 767,
        tablet: 1206,
    }
};

export const ThemeDark = {
    ...theme,
    body: {
        background: colors.mineShaft,
    },
    section: {
        background: colors.mineShaftLight,
        portfolio: {
            background: colors.mineShaft,
        },
    },
    mainHeader: {
        background: colors.mineShaft,
    },
    header: {
        headerName: colors.white,
        text: colors.white,
        border: colors.mercury,
        h3: colors.white,
    },
    paragraph: {
        leadParagraph: colors.slateGray,
        footerParagraph: colors.mineShaft,
    },
    caption: {
        text: "#6E7E91",
    },
    list: {
        text: colors.white,
        background: colors.mineShaft,
        item: {
            background: colors.mineShaftLight,
            border: colors.iron,
        }
    },
    button: {
        background: colors.scienceBlue,
        backgroundHover: colors.anakiwa,
    },
    buttonWrapper: {
        sun: colors.mineShaft,
        toggle: colors.white,
        border: colors.white
    },
    marker: {
        fill: colors.dodgerBlue,
    },
    colors: {
        whiteLilac: "#FBFBFE",
        white: "#FFFFFF",
        primaryColor: "teal",
        lavenderMagenta: "#F490E1", // to delete
        scienceBlue: "#0366D6",
        mountainMist: "#959499",
        slateGray: "#6E7E91",
        mineShaft: "#252525",
        mercury: "#E5E5E5",
        iron: "rgba(209, 213, 218, 0.3)",
        anakiwa: "#8CC2FF",
    },
    breakpoints: {
        mobile: 767,
        tablet: 1206,
    }
};