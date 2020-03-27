import React from "react"
import { Container, NavigationContainer } from "../components/Layout/LayoutComponents"
import FadeInOnLoad from "../components/FadeInOnLoad/FadeInOnLoad";
import PageHeader from "../components/PageHeader/PageHeader";
import TracedHeart from "../components/TracedHeart/TracedHeart";
import Layout from "../components/Layout";
import NavigationLink from "../components/NavigationLink/NavigationLink";
import { SEO } from "../components/SEO/SEO";

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <TracedHeart />
      <NavigationContainer>
        <PageHeader text={"Mali Coxon"} />
        <FadeInOnLoad>
          <NavigationLink to={"/portfolio"}>
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
        </FadeInOnLoad>
      </NavigationContainer>
    </Container>
  </Layout>
);

export default IndexPage
