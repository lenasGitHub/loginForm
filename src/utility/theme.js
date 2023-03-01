import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial",
  },
  palette: {
    primary: {
      main: "#C3001E",
    },
    secondary: {
      main: "#000000BC",
    },

    error: {
      main: "#B00020",
    },
    background: {
      main: "#EFEFEF",
      default: "#EFEFEF",
    },
    text: {
      primary: "#000000BC",
    },
    grey: {
      500: "#0000001F",
    },
    action: {
      activatedOpacity:  "#0000001F"
    }
  },
  shadows: ["none", "0px 3px 6px #00000029"],
  shape: {
    borderRadius: 4,
  },
});

export default Theme;
