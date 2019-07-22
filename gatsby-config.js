const path = require('path')
let contentfulConfig

try {
    // Load the Contentful config from the .contentful.json
    contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
    accessToken:
        process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
    throw new Error(
        'Contentful spaceId and the delivery token need to be provided.'
    )
}

module.exports = {
    siteMetadata: {
        title: 'Tia + Andrew',
    },
    plugins: [
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: contentfulConfig,
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Tia & Andrew',
                short_name: 'tia-andrew',
                start_url: '/',
                display: 'standalone',
                icon: 'src/images/icon.png',
            },
        },
    ],
}
