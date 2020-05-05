import React from "react"
import { Container, NavBar } from "../components/Layout/LayoutComponents"
import SnippetText from "../components/Layout/SnippetText";
import Link from "../components/Link/Link";
import OutlinedHeader from "../components/Layout/OutlinedHeader";
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";
import PageHeader from "../components/PageHeader/PageHeader";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO/SEO";

const Contact = () => (
    <Layout>
        <Container>
            <SEO title="Contact"/>
            <NavBar>
                <Link to={"/"}>
                    {"HOME"}
                </Link>
            </NavBar>
            <PageHeader text={"Contact"} align={"left"}/>
            <FadeInOnLoad>
                <OutlinedHeader align={"left"}>
                    {"I don't bite."}<sup>{"(much)"}</sup>
                </OutlinedHeader>
                <SnippetText>
                    {"You can find me on Twitter "}<a style={{textTransform: 'none'}} href={"https://twitter.com/slooowpoke"}>{"here."}</a>
                    <br />
                    {"You can find me on LinkedIn "}<a style={{textTransform: 'none'}} href={"https://www.linkedin.com/in/mali-coxon/"}>{"here."}</a>
                    <br />
                    {"You can find me on GitHub "}<a style={{textTransform: 'none'}} href={"https://github.com/slooowpoke/"}>{"here."}</a>
                    <br />
                    {"You can drop me an email at "}<a style={{textTransform: 'none'}} href={"mailto: mail@malicoxon.co.uk"}>{"mail@malicoxon.co.uk"}</a>
                </SnippetText>
            </FadeInOnLoad>
        </Container>
    </Layout>
);

export default Contact;
