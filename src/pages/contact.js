import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader";
import BlogSnippetText from "../components/BlogSnippetText";
import BlogLink from "../components/BlogLink";
import OutlinedHeader from "../components/OutlinedHeader";
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";

const Contact = () => (
    <Layout>
        <Container>
            <SEO title="Contact"/>
            <PageHeader text={"Contact"} align={"left"}/>
            <FadeInOnLoad>
                <OutlinedHeader align={"left"}>
                    {"I don't bite."}<sup>{"(much)"}</sup>
                </OutlinedHeader>
                <BlogSnippetText>
                    {"You can find me on Twitter "}<BlogLink to={"https://twitter.com"}>{"here."}</BlogLink>
                </BlogSnippetText>
                <BlogSnippetText>
                    {"You can find me on LinkedIn "}<BlogLink to={"https://twitter.com"}>{"here."}</BlogLink>
                </BlogSnippetText>
                <BlogSnippetText>
                    {"You can find me on GitHub "}<BlogLink to={"https://twitter.com"}>{"here."}</BlogLink>
                </BlogSnippetText>
                <BlogSnippetText>
                    {"You can drop me an email at "}<BlogLink to={"mail@malicoxon.co.uk"}>{"mail@malicoxon.co.uk"}</BlogLink>
                </BlogSnippetText>
            </FadeInOnLoad>
        </Container>
    </Layout>
);

export default Contact;
