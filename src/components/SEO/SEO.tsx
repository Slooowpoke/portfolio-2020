import React, { FunctionComponent } from "react";
import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";
import { SEOProps } from "./SEO.models";

export const SEO: FunctionComponent<SEOProps> = ({
    description,
    lang,
    meta,
    keywords= [],
    title
}) => {
    const detailsQuery = graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `;
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                const author = data.site.siteMetadata.author;
                const pageTitle = data.site.siteMetadata.title;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`${title} | ${pageTitle}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`,
                            },
                            {
                                name: `twitter:creator`,
                                content: author,
                            },
                            {
                                name: `twitter:title`,
                                content: title,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                        ]
                        .concat(
                            keywords.length > 0
                                ? {
                                    name: `keywords`,
                                    content: keywords.join(`, `),
                                }
                                : []
                        )}
                    />
                )
            }}
        />
    );
};
