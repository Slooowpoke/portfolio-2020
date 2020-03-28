import React from "react"
import { Container } from "../components/Layout/LayoutComponents"
import { SEO } from "../components/SEO/SEO";
import PageHeader from "../components/PageHeader/PageHeader";
import { BlogArticle } from "../components/BlogArticle/BlogArticle";
import Layout from "../components/Layout";

const Post = ({ data }) => {
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    const { date, title } = frontmatter;

    return (
        <Layout>
            <Container>
                <SEO title={title} />
                <PageHeader text={title} align={"left"}/>
                <BlogArticle date={date} html={html} />
            </Container>
        </Layout>
    )
};

export const postQuery = graphql`
    query PostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`;

export default Post;
