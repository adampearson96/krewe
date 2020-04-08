import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import useSiteMetaData from "./SiteMetadata"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "../scss/layout.scss";

const Layout = ({ children, pageTitle }) => {
  const { title, description, image } = useSiteMetaData();


  const krewe = createMuiTheme({
    palette: {
      primary: {
        main: '#c31fad',
      },
      secondary: {
        main: '#dedede',
      },
    },
    typography: {
      fontFamily: [
        'Oxygen',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={krewe}>
      <div className="site-container">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{`${pageTitle} | ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#fff" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content="/" />
          <meta property="twitter:card" content="summary_large_image" />
          <body className={`page-${pageTitle}-page`} />
        </Helmet>
        <Navbar pageTitle={pageTitle} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout;