import React from 'react';
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby";

class CustomHelmet extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query siteMetadata {
            site {
              siteMetadata {
                title
                description
                image
              }
            }
          }
        `}
        render={data => (
          <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{`${this.props.pageTitle} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="theme-color" content="#fff" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta property="og:image" content={data.site.siteMetadata.image} />
            <meta property="og:url" content="/" />
            <meta property="twitter:card" content="summary_large_image" />
            <body className={`${this.props.pageClass} loaded`} />
          </Helmet>
        )}
      />
    )
  }
}

export default CustomHelmet