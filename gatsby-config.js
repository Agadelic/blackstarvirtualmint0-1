require('dotenv').config()

module.exports = {https://github.com/Agadelic/Blackstarvirtualmint.git 
                 siteMetadata: {
    title: `Blackstarvirtualmint.com people of color finance data input output digital to domestic real time virtual finance stream and accounting`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
