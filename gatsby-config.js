const pixrem = require('pixrem')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Casper Väresmaa',
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',


    {
     
      resolve: `gatsby-source-wordpress`,
      options: {
          /* WORDPRESS SETTINGS */
          baseUrl: `casper-varesmaa.fi`,
          protocol: `https`,
          hostingWPCOM: false,
        //  hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "/*/*/posts",
          "/*/*/pages",
         // "/*/*/media",
          "/*/*/categories",
       //   "/*/*/tags",
      //    "/*/*/taxonomies",
       //   "/*/*/users",
        ]
      }
    },

    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-purgecss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: ['/'] }]
            // policy: [{ userAgent: '*', allow: '/' }]
          }
        }
        
      }
    },


    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fffff',
        theme_color: '#F7DC0E',
        display: 'minimal-ui',
        icon: 'static/favicon-2562.png', // This path is relative to the root of the site.
      },
    },
        {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
          analyzerPort: 3000,
          production: true,
      },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
