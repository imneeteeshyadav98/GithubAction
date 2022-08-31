import { colors, createTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
}

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "1.5px solid #141414",
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#fff",
        height: "36px",
        "& .MuiInputBase-input": {
          paddingBottom: "12px",
        },
      },
    },
    MuiFormControl: {
      root: {},
    },
    MuiFormLabel: {
      root: {
        zIndex: 2,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
      contained: {
        "&$disabled": {
          color: "#ffffff",
          boxShadow: "none",
          backgroundColor: "#717375",
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#fcb733",
        },
        backgroundColor: "#fcb733",
      },
    },
    MuiAvatar: {
      root: {
        color: "#ffffff !important",
        backgroundColor: "#174ca1 !important",
      },
    },
  },
  palette: createPalette({
    primary: {
      main: "#174ca1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#39a9df",
      contrastText: "#ffffff",
    },
    grey: {
      50: "#ccc",
      100: "#fff",
      200: "#fdfdfd",
      300: "#f2f6f9",
      400: "#f8fafc",
      500: "#e3e3e3",
      600: "#717375",
    },
    custom: {
      yellowColor: "#fcb733",
      cellBorder: "#f1f2f2",
      columnBorder: "#c0d1e3",
      fieldColor: "#717375",
      warningColor: "#8e6801",
      pendingColor: "#434546",
      runningColor: "#174ca1",
      errorColor: "#7e2215",
      passedColor: "#33721d",
      abortedColor: "#974712",
      warningBackground: "#fff2cf",
      runningBackground: "#d7eef9",
      pendingBackground: "#e3e3e3",
      errorBackground: "#f8d8d4",
      passedBackground: "#dcf0d5",
      abortedBackground: "#fae2d2",
      durationTime: "#39a9df",
      errorTextColor: "#da3e28",
      SwitchTrack: "#e6edf4",
      newPipelineBtnHover: "#183fc9",
      avatarMenuItemHover: "rgba(23, 77, 161, 0.5)",
      errorUnderLine: "#f0b2a9",
      keysTrue: "#50b22d",
      passwordPlaceHolder: "#d4d5d5",
    },
    background: {
      paper: colors.common.white,
      default: "#fff",
    },
    text: {
      primary: "#174ca1",
      secondary: "#141414",
    },
    action: {
      hover: "#ccc",
    },
  }),
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
