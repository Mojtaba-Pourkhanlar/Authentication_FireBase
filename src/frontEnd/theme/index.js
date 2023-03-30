import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ccc",
    },
    error: {
      main: "#BB160A",
    },
    secondary: {
      main: "#671A75",
    },
    success: {
      main: "#265828",
    },
    warning: {
      main: "#DCC500",
      light: "#FFEB3B",
    },
  },
  typography: {
    fontFamily: "roboto",
    fontSize: 14,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
});
