module.exports = {
  siteMetadata: {
    title: "hannadeslandes",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `libre baskerville\:400,700`,
          `poppins:300`
        ],
        display: 'swap'
      }
    }
  ],
};
