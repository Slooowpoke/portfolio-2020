import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader";
import BlogSnippet from "../components/BlogSnippet";
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";

const Blog = () => (
    <Layout>
        <Container>
            <SEO title="Blog"/>
            <PageHeader text={"Blog"} align={"left"}/>
            <FadeInOnLoad>
                <BlogSnippet />
                <BlogSnippet />
                <BlogSnippet />
            </FadeInOnLoad>
        </Container>
    </Layout>
);

export default Blog;
