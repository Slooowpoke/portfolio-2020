import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Layout/LayoutComponents"
import { SEO } from "../components/SEO/SEO";
import PageHeader from "../components/PageHeader/PageHeader";
import { BlogArticle } from "../components/BlogArticle/BlogArticle";

const Post = ({ data }) => {
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    const { date } = frontmatter;

    const post = {
        html,
        date
    };

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
