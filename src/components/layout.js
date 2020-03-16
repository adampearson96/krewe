import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetaData from "./SiteMetadata"

import "../scss/layout.scss";

const Layout = ({ children }) => {
  const { title, description, image } = useSiteMetaData();

  return (
    <div className="site-container">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="/" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default Layout;