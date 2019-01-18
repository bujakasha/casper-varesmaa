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
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ['collapse', 'noFocus', 'collapsing', /modal/, /DayPicker/, 'fade', 'show', 'navbar-collapse'],
        whitelistPatternsChildren: [/modal/,/DayPicker/],
         ignore: ['/_sw_swiper.scss','_navigation.scss','_leave_contact.scss'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
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
        short_name: 'Casper Varesmaa',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#F7DC0E',
        display: 'minimal-ui',
        icon: 'static/favicon-2562.png', // This path is relative to the root of the site.
      },
    },

     
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

/*


    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
          analyzerPort: 3000,
          production: true,
      },
  },

   {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
          analyzerPort: 3000,
          production: true,
      },
  },
  */
