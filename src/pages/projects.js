import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader";
import NavigationLink from "../components/NavigationLink";

const Projects = ({ children, transitionStatus, entry, exit }) => (
    <Layout>
        <Container>
            <SEO title="Projects" />
            <PageHeader text={"Projects"} align={"left"}/>
            <NavigationLink to={"/projects/beardinator"} align={"left"}>
                {"BEARDINATOR"}
            </NavigationLink>
        </Container>
    </Layout>
);

export default Projects
