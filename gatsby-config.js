module.exports = {
    siteMetadata: {
        title: `Mali Coxon`,
        description: `Mali Coxon - Programmer`,
        author: `@slooowpoke`,
        siteUrl: "https://malicoxon.co.uk"
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Portfolio 2020`,
                short_name: `portfolio-2020`,
                start_url: `/`,
                background_color: `#111`,
                theme_color: `#fffaff`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/projects/`,
                name: "markdown-projects",
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/blog/`,
                name: "markdown-projects",
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            related: false,
                            noIframeBorder: true
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-responsive-iframe`
                ],
            },
        },
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: 'mye5mca'
                }
            }
        }
    ],
};
