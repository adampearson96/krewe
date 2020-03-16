/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Krewe',
    description: 'Emma Marsh - Freelance',
    image: '',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen\:300,400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Krewe",
        short_name: "Krewe",
        start_url: "/",
        background_color: "#634de2",
        theme_color: "#fff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "fullscreen",
        orientation: "portrait",
        splash_pages: null,
        icon: `src/media/icon-512x512.png`,
      },
    },
  ]
}
