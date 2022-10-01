import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Router from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles"; //
//

function App() {
  const theme = createTheme({
    typography: {
      h5: {
        fontFamily: "Roboto",
      },
      h1: {
        fontFamily: "Droid Serif",
      },
      body1: {
        fontFamily: "Roboto",
        fontWeight: 200,
        fontSize: "1em",
        lineHeight: 1.2,
        letterSpacing: "0.02em",
      },
      h10: {
        fontFamily: "Source Serif Pro",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.6em",
        lineHeight: 1.2,
        letterSpacing: "0.02em",
      },
      h9: {
        fontFamily: "Source Serif Pro",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "5em",
        lineHeight: 0.9,
        letterSpacing: "0.02em",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
