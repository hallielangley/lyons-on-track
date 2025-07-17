import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { router } from "./routes";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#646cff",
    },
    secondary: {
      main: "#61dafb",
    },
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
