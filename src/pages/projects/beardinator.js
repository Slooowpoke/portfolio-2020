import React from "react"
import Layout from "../../components/layout"
import { Container } from "../../components/layoutComponents"
import SEO from "../../components/seo"
import BlogSnippetText from "../../components/BlogSnippetText";
import BlogLink from "../../components/BlogLink";
import OutlinedHeader from "../../components/OutlinedHeader";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectDetails from "../../components/ProjectDetails";

// TODO Replace this with project
const Beardinator = () => (
    <Layout>
        <Container>
            <SEO title="Beardinator"/>
            <div>
              <ProjectHeader>
                {"Sleepy Studios Website"}
              </ProjectHeader>
            </div>

            <ProjectDetails thumb={"/projects/beardinator/thumb.png"} images={["/projects/beardinator/desktop.png", "/projects/beardinator/desktop.png", "/projects/beardinator/desktop.png"]}>
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
