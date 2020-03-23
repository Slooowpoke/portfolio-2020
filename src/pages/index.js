import React from "react"
import Layout from "../components/layout"
import { Container, NavigationContainer } from "../components/layoutComponents"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import TracedHeart from "../components/TracedHeart";
import NavigationLink from "../components/NavigationLink";

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <TracedHeart />
      <NavigationContainer>
        <PageHeader text={"Mali Coxon"} />
        <NavigationLink to={"/projects"}>
          {"PROJECTS"}
        </NavigationLink>
        <NavigationLink to={"/blog"}>
          {"BLOG"}
        </NavigationLink>
        <NavigationLink to={"/contact"}>
          {"CONTACT"}
        </NavigationLink>
        <hr />
        <p>
          I have a love of web development, reading, funky shirts and yum yums.
        </p>
        <hr />
      </NavigationContainer>
    </Container>
  </Layout>
);

export default IndexPage
