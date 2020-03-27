import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Layout/LayoutComponents"
import { SEO } from "../components/SEO/SEO";
import ProjectPageDetails from "../components/ProjectPageDetails/ProjectPageDetails";
import { graphql } from "gatsby";

const Project = ({ data }) => {
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    const { title, date, mobileImage, desktopImage, tools } = frontmatter;

    return (
        <Layout>
            <Container>
                <SEO title={title} />
                <ProjectPageDetails
                    html={html}
                    title={title}
                    date={date}
                    tools={tools}
                    mobileImage={mobileImage}
                    desktopImage={desktopImage}
                />
            </Container>
        </Layout>
    )
};

export const pageQuery = graphql`
    query ProjectByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tools
                desktopImage {
                    childImageSharp {
                        fixed(width: 820, height: 629) {
                            ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                    }
                }
                mobileImage {
                    childImageSharp {
                        fixed(width: 282, height: 256) {
                            ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;

export default Project;
