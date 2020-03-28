import React from "react"
import Layout from "../components/Layout"
import { Container, NavBar } from "../components/Layout/LayoutComponents"
import { SEO } from "../components/SEO/SEO";
import ProjectPageDetails from "../components/ProjectPageDetails/ProjectPageDetails";
import { graphql } from "gatsby";
import Link from "../components/Link/Link";

const Project = ({ data }) => {
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    const { title, date, mobileImage, desktopImage, tools } = frontmatter;

    return (
        <Layout>
            <Container>
                <SEO title={title} />
                <NavBar>
                    <Link to={"/"}>
                        {"HOME"}
                    </Link>
                    <Link to={"/portfolio"}>
                        {"BACK"}
                    </Link>
                </NavBar>
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
                        fixed(width: 720) {
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
