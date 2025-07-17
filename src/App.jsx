import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { router } from "./routes";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6e2dce",
      light: "#9c70de",
      dark: "##551fc0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#8ece2d",
      light: "#b2de74",
      dark: "#68aa19",
      contrastText: "#fff",
    },
    analogous1: {
      main: "#be2dce",
    },
    analogous2: {
      main: "#2d3dce"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
