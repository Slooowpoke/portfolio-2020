import React from "react";
import NavigationLink from "./NavigationLink";
import Subtitle from "./Subtitle";
import BlogSnippetText from "./BlogSnippetText";
import BlogLink from "./BlogLink";
import styled from "styled-components";

const BlogArticle = styled.article`
    margin: 4em auto;
`;

const BlogSnippet = () => (
    <>
        <BlogArticle>
            <NavigationLink to={"/projects/beardinator"} align={"left"}  marginY={"0.5em"}>
                {"NEXT.JS AND JWT"}
            </NavigationLink>
            <Subtitle>
                {"NOVEMBER 02 2018"}
            </Subtitle>
            <BlogSnippetText>
                {"In pursuit of SSR (Server side rendering for TTPB, making a React app good for SEO)…"}
            </BlogSnippetText>
            <BlogLink to={"/projects/beardinator"}>
                {"READ MORE"}
            </BlogLink>

        </BlogArticle>
        <hr />
    </>
);

export default BlogSnippet;
