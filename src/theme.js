import { createMuiTheme } from "@material-ui/core/styles";
import hexToRgba from "hex-to-rgba";

let theme = createMuiTheme({
    spacing: (factor) => [0, 5, 8, 14, 24, 32, 64][factor],
    palette: {
        primary: {
            main: "#C760A7",
            dark: "#FFDBF7",
            light: "#FDF0FA",
        },
        secondary: {
            main: "#C760A7",
        },
    },
    colors: {
        primaryText: "#41415C",
        secondaryText: "#BEC0C2",
        creamBrulee: "#FFE6A5",
        anakiwa: "#A3D4FF",
        sundown: "#FFB9B6",
        waterLeaf: "#9EE9D5",
        catskillWhite: "#F8FAFC",
        gunPower: "#41415C",
        capeHoney: "#FDE6A9",
        brightSun: "#FFCA41",
        periwinkle: "#C7C7FF",
        portage: "#9C86F5",
        iceCold: "#AFF3E1",
        turquoise: "#43E0B7",
        pinkLace: "#FFDBF7",
        lightOrchid: "#E39DCF",
        gullGray: "#98A5B5",
        background: "#FFFFFF",
        white: "#FFFFFF",
        greyBlue: "#F4F5F9",

        //Category
        blue: "#68B8FC",
        purple: "#7474DC",
        sun: "#EEBC5B",
        green: "#35D6AB",
        red: "#F27A7A",
        darkPink: "#BB509A",
        pink: "#FB7BB8",
        darkGreen: "#48C567",
        lycan: "#59897C",
        darkBlue: "#2C5DB5",

        backgroundDisabled: "#D9D9D9",
        border: `#E0E4E9`,
        hoverItem: hexToRgba(`#FC8476`, 0.3),
    },
    typography: {
        fontFamily:
            'Cabin, sans-serif, apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun;',
        title: {
            fontSize: "2.875rem",
            color: "#251555",
            fontFamily:
                'Cabin, apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;',
            lineHeight: 1,
            fontWeight: 300,
        },
        h1: {
            fontSize: 48,
            color: "#251555",
            fontWeight: 300,
            fontStyle: "normal",
            textTransform: "capitalize",
        },
        h2: {
            fontSize: 36,
            color: "#41415C",
            fontWeight: 400,
            fontStyle: "normal",
            textTransform: "capitalize",
        },
        h3: {
            fontSize: 24,
            color: "#41415C",
            fontWeight: 400,
            fontStyle: "normal",
            textTransform: "capitalize",
        },
        h4: {
            fontSize: 18,
            color: "#41415C",
            fontWeight: 600,
            fontStyle: "normal",
            textTransform: "capitalize",
        },
        button: {
            textTransform: "normal",
        },
        body1: {
            fontWeight: "bold",
            color: "#333333",
            fontSize: 14,
            fontStyle: "normal",
        },
        body2: {
            fontWeight: "normal",
            color: "#333333",
            fontSize: 14,
            fontStyle: "normal",
        },
        caption: {
            fontSize: 14,
            color: "#BEC0C2",
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: theme.palette.primary.main,
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: theme.colors.white,
            },
        },
        MuiButton: {
            label: {
                textTransform: "none",
            },
            contained: {
                boxShadow: "none",
                "&:active": {
                    boxShadow: "none",
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
            },
        },
        MuiTab: {
            root: {
                textTransform: "none",
                margin: "0 16px",
                minWidth: 0,
                padding: 0,
                color: theme.colors.white,
                [theme.breakpoints.up("md")]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
            selected: {
                color: theme.colors.white,
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: "#404854",
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: "inherit",
                marginRight: 0,
                "& svg": {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
        MuiInput: {
            input: {
                color: theme.colors.primaryText,
            },
        },
        MuiInputLabel: {
            root: {
                color: theme.colors.secondaryText,
            },
        },
    },
};

export default theme;
