module.exports = {
  pathPrefix: "/gatsby-theme-blog",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-plugin-sass`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Rikuchan.jp`,
    author: `Riku Takenaka`,
    description: `竹中陸のブログ`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/riijon`,
      },
      {
        name: `github`,
        url: `https://github.com/riijon`,
      },
    ],
  },
}
