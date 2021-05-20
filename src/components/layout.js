import React from "react"
import CustomHelmet from "../components/customHelmet"
import Navbar from "../components/navbar"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import "../scss/layout.scss";

const Layout = ({ children, pageTitle, pageClass }) => {
  const krewe = createMuiTheme({
    palette: {
      primary: {
        main: '#99D9DA',
      },
      secondary: {
        main: '#99D9DA',
      },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={krewe}>
      <div className="site-container">
        <CustomHelmet pageTitle={pageTitle} pageClass={pageClass} />
        <Navbar pageTitle={pageTitle} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout;