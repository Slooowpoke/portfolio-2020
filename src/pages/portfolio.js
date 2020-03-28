import React from "react"
import Layout from "../components/Layout"
import { Container, NavBar } from "../components/Layout/LayoutComponents"
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";
import PageHeader from "../components/PageHeader/PageHeader";
import { SEO } from "../components/SEO/SEO";
import { PortfolioListLink } from "../components/PortfolioListLink/PortfolioListLink";
import { graphql } from "gatsby";
import Link from "../components/Link/Link";

const Portfolio = ({ data }) => {
    const { allMarkdownRemark } = data;
    const projects = allMarkdownRemark.edges.map((edge) => edge.node.frontmatter)

    return (
        <Layout>
            <Container>
                <SEO title="Portfolio" />
                <NavBar>
                    <Link to={"/"}>
                        {"HOME"}
                    </Link>
                </NavBar>
                <PageHeader text={"Portfolio"} align={"left"}/>
                <FadeInOnLoad>
                    {projects.map((project, index) => 
                        <PortfolioListLink
                            key={index}
                            title={project.title}
                            projectDesktopImage={project.desktopImage}
                            to={project.path}
                        />
                    )}
                </FadeInOnLoad>
            </Container>
        </Layout>
    )
};

export const projectsQuery = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/data/projects/*/"}}) {
            edges {
                node {              
                    frontmatter {
                        path
                        title
                        desktopImage {
                            childImageSharp {
                                fixed(width: 820) {
                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Portfolio
