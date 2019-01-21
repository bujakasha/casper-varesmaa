const pixrem = require('pixrem')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Casper Väresmaa',
    siteUrl: `https://caspervaresmaa.fi`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout/index.js`),
      },
    },

    `gatsby-transformer-excel`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
        precision: 8,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: ['collapse', 'noFocus', 'collapsing', 'fade', 'show', 'navbar-collapse'],
         ignore: ['/_sw_swiper.scss','_navigation.scss','_leave_contact.scss'], 
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://caspervaresmaa.fi',
        sitemap: 'https://caspervaresmaa.fi/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          }
        }
        
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Casper Väresmaa',
        short_name: 'Casper Väresmaa',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#F7DC0E',
        display: 'minimal-ui',
        icon: 'static/favicon-2562.png', 
      },
    },

     

  ],
}
