import "./App.css";

import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

import {routes, allRoutes} from "./routes";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  localStorage.setItem("curUser","");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="false" disableGutters={true}>
          <Router>
            {/* <Routes>
              {
                routes.map((route,i) => {
                  return <Route key={i} exact path={route.path} element={route.component} />
                })
              }
            </Routes> */}
            { allRoutes() }
          </Router>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export { ColorModeContext, App };
