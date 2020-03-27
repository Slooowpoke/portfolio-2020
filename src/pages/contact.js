import React from "react"
import { Container } from "../components/Layout/LayoutComponents"
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
            <PageHeader text={"Contact"} align={"left"}/>
            <FadeInOnLoad>
                <OutlinedHeader align={"left"}>
                    {"I don't bite."}<sup>{"(much)"}</sup>
                </OutlinedHeader>
                <SnippetText>
                    {"You can find me on Twitter "}<Link to={"https://twitter.com"}>{"here."}</Link>
                </SnippetText>
                <SnippetText>
                    {"You can find me on LinkedIn "}<Link to={"https://twitter.com"}>{"here."}</Link>
                </SnippetText>
                <SnippetText>
                    {"You can find me on GitHub "}<Link to={"https://twitter.com"}>{"here."}</Link>
                </SnippetText>
                <SnippetText>
                    {"You can drop me an email at "}<Link to={"mail@malicoxon.co.uk"}>{"mail@malicoxon.co.uk"}</Link>
                </SnippetText>
            </FadeInOnLoad>
        </Container>
    </Layout>
);

export default Contact;
