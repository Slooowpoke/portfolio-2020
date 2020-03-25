import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader";
import NavigationLink from "../components/NavigationLink";
import styled from "styled-components";

const ProjectLink = styled(NavigationLink)`
    margin:0 auto;
    padding: 1em 0;
    img {
        position: fixed;
        top: 2em;
        right: 1em;
        transition: 0.2 ease all;
        z-index: -1;
        display: none;
    }
    &:hover{
        img {
            display: block;
        }
    }
`;

const Projects = ({ children, transitionStatus, entry, exit }) => (
    <Layout>
        <Container>
            <SEO title="Projects" />
            <PageHeader text={"Projects"} align={"left"}/>
            <ProjectLink to={"/projects/beardinator"} align={"left"}>
                {"BEARDINATOR"}
                <img src={"/projects/beardinator/desktop.png"} />
            </ProjectLink>
            <ProjectLink to={"/projects/beardinator"} align={"left"}>
                {"SLEEPY STUDIOS WEBSITE"}
                <img src={"/projects/beardinator/desktop.png"} />
            </ProjectLink>
            <ProjectLink to={"/projects/beardinator"} align={"left"}>
                {"JEALOUS RECTANGLE"}
                <img src={"/projects/beardinator/desktop.png"} />
            </ProjectLink>
        </Container>
    </Layout>
);

export default Projects
