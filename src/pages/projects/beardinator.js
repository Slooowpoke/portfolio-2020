import React from "react"
import Layout from "../../components/layout"
import { Container } from "../../components/layoutComponents"
import SEO from "../../components/seo"
import PageHeader from "../../components/PageHeader";
import NavigationLink from "../../components/NavigationLink";
import Subtitle from "../../components/Subtitle";
import BlogSnippetText from "../../components/BlogSnippetText";
import BlogLink from "../../components/BlogLink";
import BlogSnippet from "../../components/BlogSnippet";
import OutlinedHeader from "../../components/OutlinedHeader";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectDetails from "../../components/ProjectDetails";

// TODO Replace this with project
const Beardinator = () => (
    <Layout>
        <Container>
            <SEO title="Beardinator"/>
            <ProjectHeader>
                {"Beardinator"}
            </ProjectHeader>
            <ProjectDetails>
                <OutlinedHeader align={"right"}>
                    {"PHP AND JAVASCRIPT"}
                </OutlinedHeader>
                <hr />
                <BlogSnippetText>
                    {"A little joke website built for a friend at work. You can vote on beards, shave his face and " +
                    "then submit your own suggestion."}
                </BlogSnippetText>
                <BlogSnippetText>
                    {"Built with Laravel and HTML5 Canvas."}
                </BlogSnippetText>
                <BlogLink to={"beardinator.html"}>
                    {"VISIT WEBSITE"}
                </BlogLink>
            </ProjectDetails>
        </Container>
    </Layout>
);

export default Beardinator;
