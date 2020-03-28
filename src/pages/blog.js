import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Layout/LayoutComponents"
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";
import PageHeader from "../components/PageHeader/PageHeader";
import { SEO } from "../components/SEO/SEO";
import BlogSnippet from "../components/BlogSnippet/BlogSnippet";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
    const { allMarkdownRemark } = data;
    const posts = allMarkdownRemark.edges.map(edge => edge.node);

    return (
        <Layout>
            <Container>
                <SEO title="Blog"/>
                <PageHeader text={"Blog"} align={"left"}/>
                <FadeInOnLoad>
                    {posts.map((post, index) =>
                        <BlogSnippet
                            key={index}
                            title={post.frontmatter.title}
                            date={post.frontmatter.date}
                            excerpt={post.excerpt}
                            to={post.frontmatter.path}
                        />
                    )}
                </FadeInOnLoad>
            </Container>
        </Layout>
    )
};

export const postsQuery = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/data/blog/*/"}}) {
            edges {
                node {             
                    excerpt(pruneLength: 100)
                    frontmatter {
                        path
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;

export default Blog;
