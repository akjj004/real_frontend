import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
});
