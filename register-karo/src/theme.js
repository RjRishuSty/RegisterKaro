import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f9f7fd",
      light: "#0d1321",
      dark: "#ffa229",
    },
    text: {
      main: "#000",
      primary: "#164760",
      secondary: "#ffa229",
      light: "#0000",
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
  },
});
